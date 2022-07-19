import LayoutCentered from '../../components/layout/LayoutCentered';
import PageWrapper from '../../components/layout/PageWrapper';
import api from '../../lib/api.js';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Pagination from "../../components/search/Pagination";
import SearchSortHeader from "../../components/search/SearchSortHeader";
import Head from "next/head";
import SearchBoxMain from "../../components/search/SearchBoxMain";
import Loader from "../../components/search/Loader";
import formatDate from "../../lib/formatDate";
import TwigTemplate from "../../lib/parse";
import {useTranslation} from "next-i18next";
import searchCard from '@components/components/fhrs/SearchCard/searchCard.html.twig';
import textBlock from '@components/components/article/TextBlock/textBlock.html.twig';
import {getSearchBoxOptions} from "../../lib/getInputFieldValues";

export async function getStaticPaths () {
  const data = await api.setType('authorities', {pageNumber: 1, pageSize: 1}).getResults();
  const authorities = data.authorities;
  const paths = authorities.map((authority) => {
    return {
      params: {
        id: authority.LocalAuthorityId.toString(),
      }
    }});
  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps (context) {
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

  return {
    props: {
      menus: menus,
      locale: context.locale,
      authority: authority,
      options: options,
      ...(await serverSideTranslations(context.locale, ['searchPage', 'searchSortHeader', 'common', 'ratingsSearchBox', 'dates'])),
    },
    revalidate: 21600,
  }
}

function LocalAuthoritySearch({authority, locale, options}) {
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
      try {
        searchResults = await api.setLanguage(locale === 'cy' ? 'cy-GB' : '').setType('establishments', {}, parameters).getResults();
        setStatus(false);
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
    resultsHeader = <SearchSortHeader locale={locale} resultsMeta={resultsMeta}/>;
  }

  const noResultsContent = {
    content: `<p class='search-no-results__title'>${t('no_results_title')}</p>`,
  }

  const helpText = t('no_results_text', {ns:'searchPage'});

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
                {businesses.map((business) => {
                  let formattedAddress = '';
                  for (let i = 1; i <= 4; i++) {
                    formattedAddress += business[`AddressLine${i}`] ? business[`AddressLine${i}`] + '<br>' : '';
                  }
                  formattedAddress = formattedAddress.replace(/<br>$/, '');

                  const date = new Date(business.RatingDate);
                  const formattedDate = formatDate(date, t, locale);

                  const establishmentContent = {
                    business_name: business.BusinessName,
                    business_link: `/business/${business.FHRSID.toString()}/${business.BusinessName.replace(/[^a-z0-9 -]/gi, '').replace(/\s+/g, '-').toLowerCase()}`,
                    private: !formattedAddress,
                    address: formattedAddress,
                    post_code: business.PostCode,
                    last_inspected: t('last_inspected'),
                    rating_date: formattedDate,
                    rating: business.RatingValue.toString().replace(' ', ''),
                    private_address: t('private_address'),
                    registered_with: t('registered_with'),
                    local_authority_name: business.LocalAuthorityName,
                    local_authority: t('local_authority'),
                    business_say: t('business_say'),
                    business_appeal: !!business.RightToReply,
                    fhis: business.SchemeType === 'FHIS',
                  }
                  return <TwigTemplate key={`${business.FHRSID.toString()}`} template={searchCard}
                                       values={establishmentContent} attribs={[]}/>
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
    </>
  )
}

export default PageWrapper(LocalAuthoritySearch);
