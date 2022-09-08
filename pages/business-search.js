import PageWrapper from '../components/layout/PageWrapper';
import LayoutCentered from '../components/layout/LayoutCentered';
import ratingsSearchBox from '@components/components/fhrs/RatingsSearchBox/ratingsSearchBox.html.twig';
import textBlock from '@components/components/article/TextBlock/textBlock.html.twig';
import breadcrumb from '@components/components/general/Breadcrumb/breadcrumbs.html.twig';
import mapInfoBox from '@components/components/fhrs/MapInfobox/mapInfobox.html.twig';
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
import * as ReactDOM from "react-dom";
import BingMapsReact from "../lib/bing-maps";
import { renderToString } from 'react-dom/server'

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
  const {query, isReady} = useRouter();

  useEffect(() => {
    if (!isReady) return;
    const mapWrapper = document.querySelector('.ratings-search-box__map');
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
      }
      let searchResults = {};
      let authorities = {};
      let pushPins = [];
      let locations = [];

      try {
        searchResults = await api.setLanguage(locale === 'cy' ? 'cy-GB' : '').setType('establishments', {}, parameters).getResults();
        authorities = await api.setLanguage(locale === 'cy' ? 'cy-GB' : '').setType('authorities').getResults();
        searchResults.establishments = searchResults.establishments.map((establishment, index) => {
          const {latitude, longitude} = establishment.geocode;
          let mapDetails = {};
          let formattedAddress = '';
          for (let i = 1; i <= 4; i++) {
            formattedAddress += establishment[`AddressLine${i}`] ? establishment[`AddressLine${i}`] + '<br>' : '';
          }
          formattedAddress += establishment.PostCode;
          formattedAddress = formattedAddress.replace(/<br>$/, '');
          const infoBoxValues = {
            title: establishment.BusinessName ? establishment.BusinessName : 'Unknown',
            address: formattedAddress,
            rating: establishment.RatingValue,
            welsh: false,
            fhis: establishment.SchemeType === 'FHIS',
          }
          if (latitude && longitude) {
            const mapPinNumber = index + 1;
            mapDetails = {
              pinNumber: mapPinNumber,
              longitude: longitude,
              latitude: latitude,
            }
            pushPins.push(
              {
                center: {
                  latitude: latitude,
                  longitude: longitude,
                },
                options: {
                  icon: `./images/map-icons/pin--${mapPinNumber}.svg`,
                  hoverIcon: `./images/map-icons/pin--${mapPinNumber}--hover.svg`,
                  anchor: {x: 20 , y: 40},
                },
                infoboxHtml: renderToString(<TwigTemplate template={mapInfoBox} values={infoBoxValues} attribs={[]}/>),
              }
            )
            locations.push(
              {
                latitude: latitude,
                longitude: longitude,
              }
            )
          }
          const authority = authorities.authorities.filter((la) => {
            return la.LocalAuthorityIdCode === establishment.LocalAuthorityCode;
          });
          establishment.inWales = authority[0].RegionName === 'Wales';
          establishment.mapDetails = mapDetails;
          return establishment;
        })
        if (mapWrapper) {
          const map = Microsoft.Maps;
          const bounds = map.LocationRect.fromLocations(locations);
          ReactDOM.render(<BingMapsReact
            bingMapsKey={bingKey}
            mapOptions={{
              navigationBarMode: 'default',
              allowInfoboxOverflow: true,
              backgroundColor: '#ff0000',
            }}
            onMapReady={() => {mapWrapper.querySelector('.MicrosoftMap div:last-of-type').style.removeProperty('overflow');}}
            pushPinsWithInfoboxes={pushPins}
            viewOptions={{
              mapTypeId: 'road',
              bounds:  center ? null : bounds,
              padding: 0,
              center: center,
              zoom: center ? 15 : null,
            }}
            mapClassName="search"
            mapWrapper={mapWrapper}
          />, mapWrapper)
        }
        setStatus(false);
        setResults(searchResults);
        const mapPins = document.querySelectorAll('.fhrs-search-card__map-pin');
        if (mapPins) {
          mapPins.forEach((pin) => {
            pin.addEventListener('click', (e) => {
              e.preventDefault();
              const latitude = pin.getAttribute('data-latitude');
              const longitude = pin.getAttribute('data-longitude');
              setCenter({latitude: latitude, longitude: longitude});
              mapWrapper.scrollIntoView();
            });
          })
        }
      } catch (e) {
        setStatus(false);
        // TODO: add error state for no results
      }
    }
    getSearchResults(query, mapWrapper);
  }, [isReady, center]);

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

  const noResultsContent = {
    content: `<p class='search-no-results__title'>${t('no_results_title')}</p>`,
  }

  const helpText = t('no_results_text');

  const breadcrumbContent = {
    items: [
      {
        'text': 'Home',
        'url': '/'
      },
      {
        'text': 'Business search',
        'url': null,
      },
    ],
  }

  const searchBoxTitle = t('search_box_title');

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <LayoutFullWidth>
        <TwigTemplate template={breadcrumb} values={breadcrumbContent} attribs={[]}/>
      </LayoutFullWidth>
      <LayoutCentered>
        <SearchBoxMain locale={locale} query={query} submitType={'input'} pageTitle={searchBoxTitle} options={options} showMap={true}/>
        {
          Object.keys(query).length !== 0 && loading ?
            <Loader/> :
            businesses ? businesses.length > 0 && !loading ? (
              <>
                {resultsHeader}
                <p>{helpText}</p>
                {businesses.map((business, index) => {
                  return (
                    <SearchCard key={`search-card-${index}`} business={business} locale={locale}/>
                  )
                })}
                {paginationBlock}
              </>
            ) : (
              <>
                <TwigTemplate template={textBlock} values={noResultsContent} attribs={[]}/>
                {helpText}
              </>
            ) : ''
        }
      </LayoutCentered>
    </div>
  )
}

export default PageWrapper(BusinessSearch);
