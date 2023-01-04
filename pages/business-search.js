import PageWrapper from '../components/layout/PageWrapper';
import LayoutCentered from '../components/layout/LayoutCentered';
import ratingsSearchBox from '@components/components/fhrs/RatingsSearchBox/ratingsSearchBox.html.twig';
import textBlock from '@components/components/article/TextBlock/textBlock.html.twig';
import breadcrumb from '@components/components/general/Breadcrumb/breadcrumbs.html.twig';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import SearchBoxMain from "../components/search/SearchBoxMain";
import SearchSortHeader from "../components/search/SearchSortHeader";
import dataDownload from '@components/components/fhrs/DataDownload/dataDownload.html.twig';
import {useEffect, useState, useRef} from "react";
import {useRouter} from "next/router";
import api from "../lib/api";
import TwigTemplate from "../lib/parse";
import {useTranslation} from "next-i18next";
import Pagination from "../components/search/Pagination";
import LayoutFullWidth from "../components/layout/LayoutFullWidth";
import Loader from "../components/search/Loader/Loader"
import Head from "next/head";
import {getSearchBoxOptions} from "../lib/getInputFieldValues";
import SearchCard from "../components/search/SearchCard";
import {getPushPin, initMapPins, renderMap} from "../lib/bingMapHelpers";
import generateBreadcrumbs from "../lib/breadcrumbs";
import SearchResultsPerPage from "../components/search/SearchResultsPerPage";
import updateMultiParams from "../lib/updateMultiParams";
import * as Url from "url";
import {generateDataUri, getSelectContent} from "../lib/dataDownload";

export async function getStaticProps(context) {
  const res = await fetch(process.env.FSA_MAIN_BASE_URL + (context.locale === 'cy' ? '/cy' : '') + '/api/menus');
  const menus = await res.json();

  const searchFields = [
    {
      apiIndex: 'businessTypes',
      fieldName: 'BusinessTypeName',
      fieldKey: 'BusinessTypeId',
    },
    {
      apiIndex: 'countries',
      fieldName: 'name',
      fieldKey: 'nameKey',
    },
    {
      apiIndex: 'authorities',
      fieldName: 'Name',
      fieldKey: 'LocalAuthorityId',
    },
    {
      apiIndex: 'ratings',
      fieldName: 'ratingName',
      fieldKey: 'ratingKeyName',
    },
    {
      apiIndex: 'ratingOperators',
      fieldName: 'ratingOperatorName',
      fieldKey: 'ratingOperatorKey',
    }
  ];

  const options = await getSearchBoxOptions(searchFields, context.locale);
  const sortOptions = await api.setLanguage(context.locale === 'cy' ? 'cy-GB' : '').setType('sortOptions').getResults();
  return {
    props: {
      menus: menus,
      locale: context.locale,
      options: options,
      sortOptions: sortOptions.sortOptions,
      bingKey: process.env.NEXT_PUBLIC_BING_MAPS_KEY,
      ...(await serverSideTranslations(context.locale, ['common', 'businessSearch', 'ratingsSearchBox', 'searchPage', 'searchSortHeader', 'pagination', 'dates', 'searchResultsPerPage', 'dataDownload'])),
    },
    revalidate: 21600,
  }
}

function BusinessSearch({locale, options, sortOptions, bingKey}) {

  const {t} = useTranslation(['searchPage', 'dates', 'common', 'dataDownload']);

  const pageTitle = `${t('page_title', {ns: 'searchPage'})} | ${t('title', {ns: 'common'})}`;

  const [results, setResults] = useState({});
  const [loading, setStatus] = useState(true);
  const [center, setCenter] = useState(null);
  const [cardsLoaded, setCardsLoaded] = useState(false);
  const [forceUpdate, setForceUpdate] = useState();
  const [scrollToResults, setScrollToResults] = useState(false);
  const [errorState, setErrorState] = useState(false);
  const mapState = useRef(false);
  const perPage = useRef(10);
  const [apiDataUri, setApiDataUri] = useState('');
  const {query, isReady, push} = useRouter();

  const {
    "business-name-search": business_name_search,
    "address-search": address_search,
    business_type,
    hygiene_rating,
    hygiene_rating_or_status,
    country_or_la,
    hygiene_status,
    sort,
    range,
    page,
    latitude,
    longitude,
    page_size,
    init_map_state,
  } = query;

  useEffect(() => {
    if (!isReady) return;
    mapState.current = init_map_state === 'true' ?? mapState.current;
  }, [isReady]);

  useEffect(() => {
    if (!isReady) return;

    const mapWrapper = document.querySelector('.ratings-search-box__map');
    const mapToggle = document.querySelector('#map-toggle');

    const countries = options.countries.map((country) => {
      return country.value;
    });

    async function getSearchResults(query, mapWrapper = null, errorState) {
      if (errorState) {
        setResults({});
        return;
      }
      let rating = null;
      let scheme = null;
      let countryId = null;
      let localAuthorityId = null;
      if (hygiene_rating_or_status) {
        rating = hygiene_rating_or_status === 'status' ? hygiene_status : hygiene_rating;
        scheme = hygiene_rating_or_status === 'status' ? 'fhis' : 'fhrs';
      }
      // Get scheme information from value (format place-scheme)
      const locationDetails = country_or_la ? country_or_la.split('-') : null;
      if (locationDetails) {
        if (countries.includes(country_or_la)) {
          const countries = await api.setLanguage(locale === 'cy' ? 'cy-GB' : '').setType('countries').getResults();
          countryId = countries.countries.filter((country) => {
            return country.nameKey === locationDetails[0];
          }).map((country) => {
            return country.id;
          })
        } else {
          localAuthorityId = locationDetails[0];
        }
      }

      const parameters = {
        name: business_name_search,
        address: address_search,
        businessTypeId: business_type,
        ratingKey: rating,
        countryId: countryId ? countryId[0] : null,
        localAuthorityId: localAuthorityId,
        sortOptionKey: sort,
        pageNumber: page ? page : 1,
        pageSize: page_size && init_map_state !== 'true' ? page_size : 10,
        schemeTypeKey: scheme,
        ratingOperatorKey: range,
        latitude: latitude,
        longitude: longitude,
      }
      perPage.current = parameters.pageSize;
      let searchResults = {};
      let authorities = {};
      let pushPins = [];
      let locations = [];

        try {
          searchResults = await api.setLanguage(locale === 'cy' ? 'cy-GB' : '').setType('establishments', {}, parameters).getResults();
          authorities = await api.setLanguage(locale === 'cy' ? 'cy-GB' : '').setType('authorities').getResults();
          searchResults.establishments = searchResults.establishments.map((establishment, index) => {
            const authority = authorities.authorities.filter((la) => {
              return la.LocalAuthorityIdCode === establishment.LocalAuthorityCode;
            });
            establishment.inWales = authority[0].RegionName === 'Wales';

            const eLatitude = establishment.geocode?.latitude ?? undefined;
            const eLongitude = establishment.geocode?.longitude ?? undefined;
            let mapDetails = {};

            if (eLatitude && eLongitude) {
              const mapPinNumber = index + 1;
              mapDetails = {
                pinNumber: mapPinNumber,
                longitude: eLongitude,
                latitude: eLatitude,
              }
              pushPins.push(getPushPin(establishment, mapPinNumber, locale))
              locations.push({
                latitude: eLatitude,
                longitude: eLongitude,
              })
            }
            establishment.mapDetails = mapDetails;
            return establishment;
          })
          if (mapToggle) {
            if (!mapToggle.dataset.mapToggleEventProcessed) {
              mapToggle.addEventListener('click', () => {
                initMapPins(mapWrapper, setCenter);
                let newMapState = !mapState.current;
                mapState.current = newMapState;
                setForceUpdate(Math.random());
                if (newMapState === true && perPage.current > 10) {
                  updateMultiParams([{name: 'page_size', value: 10 }, {name: 'init_map_state', value: true}]);
                }
                else {
                  if (mapState.current && mapWrapper) {
                    renderMap(mapWrapper, pushPins, locations, center, bingKey)
                  }
                }
              });
            }
            mapToggle.dataset.mapToggleEventProcessed = 1;
          }
          if (mapState.current && mapWrapper) {
            renderMap(mapWrapper, pushPins, locations, center, bingKey);
          }
          setStatus(false);
          setResults(searchResults);
          initMapPins(mapWrapper, setCenter);
          let formatElem = document.getElementById('format');
          let formatVal = 'json';
          if (formatElem) {
            formatVal = formatElem.value;
          }

          setApiDataUri(`/api/download-data/${formatVal}${api.setLanguage(locale === 'cy' ? 'cy-GB' : '').setType('establishments', {}, parameters).uri}`);
          if (scrollToResults) {
            const showing = document.querySelector('#topOfResults');
            if (showing) {
              showing.scrollIntoView();
              setScrollToResults(false);
            }
          }
        } catch (e) {
          setStatus(false);
          setResults(searchResults);
          // TODO: add error state for no results
        }
    }
    getSearchResults(query, mapWrapper, errorState).then(() => {
    });
  }, [isReady, center, cardsLoaded, query, mapState, perPage, errorState]);

  // Logic for the data download component
  useEffect(() => {
    const numberOfResults = document.querySelector('#number-of-results-text');
    const pageNo = document.querySelector('#page-no-text');
    const format = document.querySelector('.data-download__select--format select');
    const down = document.querySelector('.data-download__button a');
    const err = document.querySelector('.data-download .ratings-search-box__error__container');
    let errBox = false;
    if (err) {
      err.classList.remove('ratings-search-box__error__container--active');
      errBox = err.querySelector('div');
    }
    if (down) {
      down.addEventListener('click', (e) => { 
        e.preventDefault();
        err.classList.remove('ratings-search-box__error__container--active');
        numberOfResults.closest('div.input-field').classList.remove('input-field--error');
        pageNo.closest('div.input-field').classList.remove('input-field--error');
        const no = parseInt(numberOfResults.value);
        const page = parseInt(pageNo.value);
        if (no > 5000) {
          numberOfResults.closest('div.input-field').classList.add('input-field--error');
          errBox.innerHTML = 'You can download a maximum of 5000 results';
          err.classList.add('ratings-search-box__error__container--active');
          return;
        }
        if (results.meta.totalCount < no * (page - 1)) {
          numberOfResults.closest('div.input-field').classList.add('input-field--error');
          pageNo.closest('div.input-field').classList.add('input-field--error');
          errBox.innerHTML = 'No results for this selection';
          err.classList.add('ratings-search-box__error__container--active');
          return;
        }
        if (typeof apiDataUri === 'string' && apiDataUri.length) {
          const url = new URL(window.location.origin + apiDataUri);
          url.searchParams.set('pageSize', no);
          url.searchParams.set('pageNumber', page);
          url.href = url.href.replace(/(json|xml)/, format.value);
          window.location = url;
        }   
      });
    }
  })

  let businesses = results.establishments;

  const meta = results.meta;
  let resultsMeta = {};
  if (meta) {
    resultsMeta = {
      pageNumber: meta.pageNumber,
      pageSize: meta.pageSize,
      totalResults: meta.totalCount,
      totalPages: meta.totalPages,
    }
  }

  let paginationBlock = '';
  if (resultsMeta.totalResults && resultsMeta.totalPages > 1) {
    paginationBlock = <Pagination resultsMeta={resultsMeta} locale={locale} routerPush={push} setStatus={setStatus} setScrollToResults={setScrollToResults} />;
  }

  let resultsHeader = '';
  if (resultsMeta.totalResults) {
    resultsHeader = <SearchSortHeader locale={locale} resultsMeta={resultsMeta} sortOptions={sortOptions} setStatus={setStatus} setScollToResults={setScrollToResults} />;
  }

  const helpText = t('no_results_text');

  const noResultsContent = {
    content: `<p class='search-no-results__title--h4'>${t('no_results_title')}</p>
              <p class="search-no-results__content--h4">${helpText}</p>`,
  }

  const breadcrumbLinks = [
    {
      'text': t('page_title', {ns: 'searchPage'}),
      'url': null,
    }
  ];

  const breadcrumbContent = generateBreadcrumbs(breadcrumbLinks, locale, t);

  const searchBoxTitle = t('search_box_title');

  const showMap = businesses ? businesses.length > 0 : false;

  function updateCardState() {
    if (!cardsLoaded) {
      setCardsLoaded(true);
    }
  }
  const distance = latitude && longitude;

  const translations = {
    download_data: t('download_data', {ns: 'dataDownload'}),
    format: t('format', {ns: 'dataDownload'}),
    results: t('results', {ns: 'dataDownload'}),
    all: t('all', {ns: 'dataDownload'}),
    download: t('download', {ns: 'dataDownload'}),
    number_of_results: t('number_of_results', {ns: 'dataDownload'}),
    page_number: t('page_number', {ns: 'dataDownload'}),
  }

  const dataDownloadContent = getSelectContent(apiDataUri, translations, perPage);
  const errorBoxValues = {title: 'error'};

  function getErrorState(state) {
    setErrorState(state);
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <script src={`https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=${bingKey}`} defer/>
      </Head>
      <LayoutFullWidth>
        <TwigTemplate template={breadcrumb} values={breadcrumbContent} attribs={[]}/>
      </LayoutFullWidth>
      <LayoutCentered>
        <SearchBoxMain locale={locale} query={query} submitType={'input'} pageTitle={searchBoxTitle} options={options}
                       showMap={showMap} setStatus={setStatus} sendData={getErrorState}/>
        <div id="topOfResults"></div>
        {
          Object.keys(query).length !== 0 && loading ?
            <Loader/> :
            businesses ? businesses.length > 0 && !loading ? (
              <>
                {resultsHeader}
                <p>{helpText}</p>
                {businesses.map((business, index) => {
                  updateCardState();
                  return (
                    <SearchCard key={`search-card-${index}`} business={business} locale={locale} distance={distance} setStatus={setStatus} mapState={mapState} />
                  )
                })}
                {paginationBlock}
              </>
            ) : (
              <>
                <TwigTemplate template={textBlock} values={noResultsContent} attribs={[]}/>
              </>
            ) : ''
        }
        {!mapState.current && <SearchResultsPerPage locale={locale} query={query} perPage={perPage} mapState={mapState} setScollToResults={setScrollToResults} />}
        {
          (businesses && businesses.length > 0) && <>
            <TwigTemplate template={dataDownload} values={dataDownloadContent} attribs={[]}/>
          </>
        }
      </LayoutCentered>
    </>
  )
}

export default PageWrapper(BusinessSearch);
