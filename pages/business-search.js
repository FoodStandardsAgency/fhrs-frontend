import PageWrapper from '../components/layout/PageWrapper';
import LayoutCentered from '../components/layout/LayoutCentered';
import ratingsSearchBox from '@components/components/fhrs/RatingsSearchBox/ratingsSearchBox.html.twig';
import textBlock from '@components/components/article/TextBlock/textBlock.html.twig';
import breadcrumb from '@components/components/general/Breadcrumb/breadcrumbs.html.twig';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import SearchBoxMain from "../components/search/SearchBoxMain";
import SearchSortHeader from "../components/search/SearchSortHeader";
import {useEffect, useState} from "react";
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
      ...(await serverSideTranslations(context.locale, ['common', 'businessSearch', 'ratingsSearchBox', 'searchPage', 'searchSortHeader', 'pagination', 'dates'])),
    },
    revalidate: 21600,
  }
}

function BusinessSearch({locale, options, sortOptions, bingKey}) {

  const {t} = useTranslation(['searchPage', 'dates', 'common']);

  const pageTitle = `${t('page_title', {ns: 'searchPage'})} | ${t('title', {ns: 'common'})}`;

  const [results, setResults] = useState({});
  const [loading, setStatus] = useState(true);
  const [center, setCenter] = useState(null);
  const [cardsLoaded, setCardsLoaded] = useState(false);
  const {query, isReady} = useRouter();

  useEffect(() => {
    if (!isReady) return;

    const mapWrapper = document.querySelector('.ratings-search-box__map');
    const mapToggle = document.querySelector('#map-toggle');

    const countries = options.countries.map((country) => {
      return country.value;
    });

    async function getSearchResults(query, mapWrapper = null) {
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
        longitude
      } = query;
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
        pageSize: 10,
        schemeTypeKey: scheme,
        ratingOperatorKey: range,
        latitude: latitude,
        longitude: longitude,
      }
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

          const {latitude, longitude} = establishment.geocode;
          let mapDetails = {};

          if (latitude && longitude) {
            const mapPinNumber = index + 1;
            mapDetails = {
              pinNumber: mapPinNumber,
              longitude: longitude,
              latitude: latitude,
            }
            pushPins.push(getPushPin(establishment, mapPinNumber))
            locations.push({
              latitude: latitude,
              longitude: longitude,
            })
          }
          establishment.mapDetails = mapDetails;
          return establishment;
        })
        if (mapWrapper) {
          renderMap(mapWrapper, pushPins, locations, center, bingKey)
        }
        if (mapToggle && cardsLoaded) {
          initMapPins(mapWrapper, setCenter);
          mapToggle.addEventListener('click', () => {
            initMapPins(mapWrapper, setCenter);
          });
        }
        setStatus(false);
        setResults(searchResults);
      } catch (e) {
        setStatus(false);
        setResults(searchResults);
        // TODO: add error state for no results
      }
    }

    getSearchResults(query, mapWrapper);
  }, [isReady, center, cardsLoaded]);

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
    paginationBlock = <Pagination resultsMeta={resultsMeta} locale={locale}/>;
  }

  let resultsHeader = '';
  if (resultsMeta.totalResults) {
    resultsHeader = <SearchSortHeader locale={locale} resultsMeta={resultsMeta} sortOptions={sortOptions}/>;
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

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <LayoutFullWidth>
        <TwigTemplate template={breadcrumb} values={breadcrumbContent} attribs={[]}/>
      </LayoutFullWidth>
      <LayoutCentered>
        <SearchBoxMain locale={locale} query={query} submitType={'input'} pageTitle={searchBoxTitle} options={options}
                       showMap={showMap}/>
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
                    <SearchCard key={`search-card-${index}`} business={business} locale={locale}/>
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
      </LayoutCentered>
    </>
  )
}

export default PageWrapper(BusinessSearch);
