import LayoutCentered from '../../components/layout/LayoutCentered';
import PageWrapper from '../../components/layout/PageWrapper';
import api from '../../lib/api.js';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useEffect, useState, useRef} from "react";
import {useRouter} from "next/router";
import Pagination from "../../components/search/Pagination";
import SearchSortHeader from "../../components/search/SearchSortHeader";
import Head from "next/head";
import SearchBoxMain from "../../components/search/SearchBoxMain";
import Loader from "../../components/search/Loader";
import TwigTemplate from "../../lib/parse";
import {useTranslation} from "next-i18next";
import textBlock from '@components/components/article/TextBlock/textBlock.html.twig';
import breadcrumb from '@components/components/general/Breadcrumb/breadcrumbs.html.twig';
import {getSearchBoxOptions} from "../../lib/getInputFieldValues";
import SearchCard from "../../components/search/SearchCard";
import {getPushPin, initMapPins, renderMap} from "../../lib/bingMapHelpers";
import generateBreadcrumbs from "../../lib/breadcrumbs";
import SearchResultsPerPage from "../../components/search/SearchResultsPerPage";
import updateMultiParams from "../../lib/updateMultiParams";

export async function getStaticPaths() {
  const authorities = [];
  /**
   @TODO : reinstate when servers sorted.
   const data = await api.setType('authorities', {pageNumber: 1, pageSize: 1}).getResults();
   const authorities = data.authorities;
   */
  const paths = authorities.map((authority) => {
    return {
      params: {
        id: authority.LocalAuthorityId.toString(),
      }
    }
  });
  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps(context) {
  const res = await fetch(process.env.FSA_MAIN_BASE_URL + (context.locale === 'cy' ? '/cy' : '') + '/api/menus');
  const menus = await res.json();
  const authorityId = context.params.id;
  const authority = await api.setLanguage(context.locale === 'cy' ? 'cy-GB' : '').getAuthorityFromV1Id(authorityId);

  const searchFields = [
    {
      apiIndex: 'businessTypes',
      fieldName: 'BusinessTypeName',
      fieldKey: 'BusinessTypeId',
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
      authority: authority,
      options: options,
      sortOptions: sortOptions.sortOptions,
      bingKey: process.env.NEXT_PUBLIC_BING_MAPS_KEY,
      ...(await serverSideTranslations(context.locale, ['searchPage', 'searchSortHeader', 'common', 'ratingsSearchBox', 'dates', 'searchResultsPerPage'])),
    },
    revalidate: 21600,
  }
}

function LocalAuthoritySearch({authority, locale, options, sortOptions, bingKey}) {

  const {t} = useTranslation(['searchPage', 'dates', 'common', 'ratingsSearchBox']);

  const pageTitle = `${t('local_authority_link_title', {ns: 'ratingsSearchBox'})} - ${authority.Name}  | ${t('title', {ns: 'common'})}`;

  const [results, setResults] = useState({});
  const [loading, setStatus] = useState(true);
  const [center, setCenter] = useState(null);
  const [cardsLoaded, setCardsLoaded] = useState(false);
  const [forceUpdate, setForceUpdate] = useState();
  const [scrollToResults, setScrollToResults] = useState(false);
  const mapState = useRef(false);
  const perPage = useRef(10);
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

    async function getSearchResults(query, mapWrapper = null) {
      // @TODO: consolidate with the main business search results, the only difference is the LA id.
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
        localAuthorityId: authority.LocalAuthorityId.toString(),
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
                updateMultiParams([{name: 'page_size', value: 10}, {name: 'init_map_state', value: true}]);
              } else {
                if (mapState.current && mapWrapper) {
                  renderMap(mapWrapper, pushPins, locations, center, bingKey)
                }
              }
            });
          }
          mapToggle.dataset.mapToggleEventProcessed = 1;
        }
        if (mapState.current && mapWrapper) {
          renderMap(mapWrapper, pushPins, locations, center, bingKey)
        }
        setStatus(false);
        setResults(searchResults);
        initMapPins(mapWrapper, setCenter);
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

    getSearchResults(query, mapWrapper)
  }, [isReady, center, cardsLoaded, query, mapState, perPage]);

  const businesses = results.establishments;

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
    paginationBlock = <Pagination resultsMeta={resultsMeta} locale={locale} routerPush={push} setStatus={setStatus}
                                  setScrollToResults={setScrollToResults}/>;
  }

  let resultsHeader = '';
  if (resultsMeta.totalResults) {
    resultsHeader =
      <SearchSortHeader locale={locale} resultsMeta={resultsMeta} sortOptions={sortOptions} setStatus={setStatus}
                        setScollToResults={setScrollToResults}/>;
  }

  const helpText = t('no_results_text');

  const noResultsContent = {
    content: `<p class='search-no-results__title--h4'>${t('no_results_title')}</p>
              <p class="search-no-results__content--h4">${helpText}</p>`,
  }

  const showMap = businesses ? businesses.length > 0 : false;

  function updateCardState() {
    if (!cardsLoaded) {
      setCardsLoaded(true);
    }
  }


  const breadcrumbLinks = [
    {
      'text': t('local_authority_link_title', {ns: 'ratingsSearchBox'}),
      'url': '/search-a-local-authority-area',
    }
  ];

  const breadcrumbContent = generateBreadcrumbs(breadcrumbLinks, locale, t);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <script src={`https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=${bingKey}`} defer/>
      </Head>
      <LayoutCentered>
        <TwigTemplate template={breadcrumb} values={breadcrumbContent} attribs={[]}/>
        <SearchBoxMain locale={locale} query={query} submitType={'input'} localAuthority={authority} options={options}
                       showMap={showMap}/>
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
                    <SearchCard key={`search-card-${index}`} business={business} locale={locale} mapState={mapState}/>
                  )
                })
                }
                {paginationBlock}
              </>
            ) : (
              <>
                <TwigTemplate template={textBlock} values={noResultsContent} attribs={[]}/>
              </>
            ) : ''
        }
        {!mapState.current &&
        <SearchResultsPerPage locale={locale} query={query} perPage={perPage} mapState={mapState} setStatus={setStatus}
                              setScrollToResults={setScrollToResults}/>}
      </LayoutCentered>
    </>
  )
}

export default PageWrapper(LocalAuthoritySearch);
