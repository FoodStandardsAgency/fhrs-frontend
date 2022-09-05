import LayoutCentered from '../../components/layout/LayoutCentered';
import PageWrapper from '../../components/layout/PageWrapper';
import api from '../../lib/api.js';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Pagination from "../../components/search/Pagination";
import SearchSortHeader from "../../components/search/SearchSortHeader";
import Head from "next/head";
import SearchBoxMain from "../../components/search/SearchBoxMain";
import Loader from "../../components/search/Loader";
import TwigTemplate from "../../lib/parse";
import {useTranslation} from "next-i18next";
import textBlock from '@components/components/article/TextBlock/textBlock.html.twig';
import {getSearchBoxOptions} from "../../lib/getInputFieldValues";
import SearchCard from "../../components/search/SearchCard";

export async function getStaticPaths () {
  const authorities = [];
  /**
  @TODO : reinstate when servers sorted.
  const data = await api.setType('authorities', {pageNumber: 1, pageSize: 1}).getResults();
  const authorities = data.authorities;
  */
  console.log("AUTHORITIES", authorities);
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
  const authority = await api.setLanguage(context.locale === 'cy' ? 'cy-GB' : '').setType('authorities', {id: authorityId}).getResults();

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
      ...(await serverSideTranslations(context.locale, ['searchPage', 'searchSortHeader', 'common', 'ratingsSearchBox', 'dates'])),
    },
    revalidate: 21600,
  }
}

function LocalAuthoritySearch({authority, locale, options, sortOptions}) {
  const {t} = useTranslation(['searchPage', 'dates', 'common']);
  const pageTitle = `${t('page_title', {ns: 'searchPage'})} | ${t('title', {ns: 'common'})}`;
  const [results, setResults] = useState({});
  const [loading, setStatus] = useState(true);
  const {query, isReady} = useRouter();

  useEffect(() => {
    if (!isReady) return;

    async function getSearchResults(query) {
      const {
        "business-name-search": business_name_search,
        "address-search": address_search,
        business_type,
        hygiene_rating,
        hygiene_status,
        sort,
        page,
      } = query;
      const rating = hygiene_status ? hygiene_status : hygiene_rating;
      const parameters = {
        name: business_name_search,
        address: address_search,
        businessTypeId: business_type,
        ratingKey: rating,
        sortOptionKey: sort,
        pageNumber: page ? page : 1,
        pageSize: 10,
        localAuthorityId: authority.LocalAuthorityId.toString(),
      }
      let searchResults = {};
      let authorities = {};
      try {
        searchResults = await api.setLanguage(locale === 'cy' ? 'cy-GB' : '').setType('establishments', {}, parameters).getResults();
        authorities = await api.setLanguage(locale === 'cy' ? 'cy-GB' : '').setType('authorities').getResults();
        setStatus(false);
        searchResults.establishments = searchResults.establishments.map(establishment => {
          const authority = authorities.authorities.filter((la) => {
            return la.LocalAuthorityIdCode === establishment.LocalAuthorityCode;
          });
          establishment.inWales = authority[0].RegionName === 'Wales';
          return establishment;
        })
        setResults(searchResults);
      } catch (e) {
        setStatus(false);
        setResults(searchResults);
      }
    }

    getSearchResults(query)
  }, [isReady]);

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

  const helpText = t('no_results_text', {ns: 'searchPage'});

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <LayoutCentered>
        <SearchBoxMain locale={locale} query={query} submitType={'input'} localAuthority={authority} options={options}/>
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
                })
                }
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
    </>
  )
}

export default PageWrapper(LocalAuthoritySearch);
