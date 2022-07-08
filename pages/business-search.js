import PageWrapper from '../components/layout/PageWrapper';
import LayoutCentered from '../components/layout/LayoutCentered';
import ratingsSearchBox from '@components/components/fhrs/RatingsSearchBox/ratingsSearchBox.html.twig';
import searchCard from '@components/components/fhrs/SearchCard/searchCard.html.twig';
import searchNoResults from '@components/components/search/SearchNoResults/searchNoResults.html.twig';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import SearchBoxMain from "../components/search/SearchBoxMain";
import SearchSortHeader from "../components/search/SearchSortHeader";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import api from "../lib/api";
import TwigTemplate from "../lib/parse";
import formatDate from "../lib/formatDate";
import {useTranslation} from "next-i18next";
import Pagination from "../components/search/Pagination";

export async function getStaticProps(context) {
  const res = await fetch(process.env.FSA_MAIN_BASE_URL + (context.locale === 'cy' ? '/cy' : '') + '/api/menus');
  const menus = await res.json();
  return {
    props: {
      menus: menus,
      locale: context.locale,
      ...(await serverSideTranslations(context.locale, ['common', 'businessSearch', 'ratingsSearchBox', 'searchPage', 'searchSortHeader', 'pagination', 'dates'])),
    },
    revalidate: 21600,
  }
}

function BusinessSearch({locale}) {
  const {t} = useTranslation(['searchPage', 'dates']);
  const [results, setResults] = useState({});
  const {query, isReady} = useRouter();
  useEffect(() => {
    if (!isReady) return;

    async function getSearchResults(query) {
      const {
        "business-name-search": business_name_search,
        "address-search": address_search,
        business_type,
        hygiene_rating,
        hygiene_rating_or_status,
        country_or_la,
        hygiene_status,
        sort,
        page,
      } = query;
      let rating = null;
      if (hygiene_rating_or_status) {
        rating = hygiene_rating_or_status === 'status' ? hygiene_status : hygiene_rating;
      }
      const parameters = {
        name: business_name_search,
        address: address_search,
        businessTypeId: business_type,
        ratingKey: rating,
        countryId: country_or_la,
        sortOptionKey: sort,
        pageNumber: page ? page : 1,
        pageSize: 10,
      }
      const searchResults = await api.setLanguage(locale === 'cy' ? 'cy-GB' : '').setType('establishments', {}, parameters).getResults();
      setResults(searchResults);
    }

    getSearchResults(query)
  }, [isReady]);

  const establishments = results.establishments;
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
    title: t('no_results_title'),
    no_results_text: t('no_results_text'),
    food_hygiene_rating_text: t('food_hygiene_rating_text'),
    food_hygiene_rating_link: '#',
    food_hygiene_rating_link_text: t('food_hygiene_rating_link_text'),
  }

  return (
    <div>
      <LayoutCentered>
        <SearchBoxMain locale={locale} query={query} submitType={'input'}/>
        {resultsHeader}
        {establishments ? establishments.map((establishment) => {
          let formattedAddress = '';
          for (let i = 1; i <= 4; i++) {
            formattedAddress += establishment[`AddressLine${i}`] ? establishment[`AddressLine${i}`] + '<br>' : '';
          }
          formattedAddress = formattedAddress.replace(/<br>$/, '');

          const date = new Date(establishment.RatingDate);
          const formattedDate = formatDate(date, t, locale);

          const establishmentContent = {
            business_name: establishment.BusinessName,
            business_link: `business/${establishment.FHRSID.toString()}/${establishment.BusinessName.replace(/[^a-z0-9 -]/gi, '').replace(/\s+/g, '-').toLowerCase()}`,
            private: !formattedAddress,
            address: formattedAddress,
            post_code: establishment.PostCode,
            last_inspected: t('last_inspected'),
            rating_date: formattedDate,
            rating: establishment.RatingValue.toString().replace(' ', ''),
            private_address: t('private_address'),
            registered_with: t('registered_with'),
            local_authority_name: establishment.LocalAuthorityName,
            local_authority: t('local_authority'),
            business_say: t('business_say'),
            business_appeal: !!establishment.RightToReply,
            fhis: establishment.SchemeType === 'FHIS',
          }
          return <TwigTemplate key={`${establishment.FHRSID.toString()}`} template={searchCard}
                               values={establishmentContent} attribs={[]}/>
        }) : <TwigTemplate template={searchNoResults} values={noResultsContent} attribs={[]}/>}
        {paginationBlock}
      </LayoutCentered>
    </div>
  )
}

export default PageWrapper(BusinessSearch);
