import PageWrapper from '../components/layout/PageWrapper';
import LayoutCentered from '../components/layout/LayoutCentered';
import ratingsSearchBox from '@components/components/FHRS/RatingsSearchBox/ratingsSearchBox.html.twig';
import searchCard from '@components/components/FHRS/SearchCard/searchCard.html.twig';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import SearchBoxMain from "../components/search/searchBoxMain";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import api from "../lib/api";
import TwigTemplate from "../lib/parse";

export async function getStaticProps(context) {
  const res = await fetch(process.env.FSA_MAIN_BASE_URL + (context.locale === 'cy' ? '/cy' : '') + '/api/menus');
  const menus = await res.json();
  return {
    props: {
      menus: menus,
      locale: context.locale,
      ...(await serverSideTranslations(context.locale, ['common', 'businessSearch', 'ratingsSearchBox'])),
    },
    revalidate: 21600,
  }
}

function BusinessSearch({locale}) {
  const [results, setResults] = useState({});
  const { query, isReady } = useRouter();
  useEffect(() => {
    if(!isReady) return;
    async function getSearchResults(query) {
      const {
        "business-name-search": business_name_search,
        "address-search": address_search,
        business_type,
        hygiene_rating,
        hygiene_rating_or_status,
        country_or_la,
        hygiene_status,
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
        pageNumber: 1,
        pageSize: 10,
      }
      const searchResults = await api.setLanguage(locale === 'cy' ? 'cy-GB' : '').setType('establishments', {}, parameters).getResults();
      setResults(searchResults);
    }
      getSearchResults(query)
    }, [isReady]);
  const establishments = results.establishments;
  return (
    <div>
      <LayoutCentered>
        <SearchBoxMain locale={locale} query={query} submitType={'input'}/>
        {establishments ? establishments.map((establishment)=> {
          let formattedAddress = '';
          for (let i = 1; i <= 4; i++) {
            formattedAddress += establishment[`AddressLine${i}`] ? establishment[`AddressLine${i}`] + '<br>' : '';
          }
          const date = new Date(establishment.RatingDate);
          const formattedDate = date.toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'});
          const establishmentContent = {
            business_name: establishment.BusinessName,
            business_link:`business/${establishment.FHRSID.toString()}/${establishment.BusinessName.replace(/[^a-z0-9 -]/gi, '').replace(/\s+/g, '-').toLowerCase()}`,
            private:  !formattedAddress,
            address: formattedAddress,
            post_code: establishment.PostCode,
            last_inspected: 'Last inspected',
            rating_date: formattedDate,
            rating: establishment.RatingValue.toString(),
            private_address: 'Private address',
            registered_with: 'Registered with',
            local_authority_name: establishment.LocalAuthorityName,
            local_authority: 'local authority',
            business_say: 'What the business says',
            business_appeal: !!establishment.RightToReply,
          }
          return <TwigTemplate key={`${establishment.FHRSID.toString()}`} template={searchCard} values={establishmentContent} attribs={[]}/>
        }) : ''}
      </LayoutCentered>
    </div>
  )
}

export default PageWrapper(BusinessSearch);
