import textBlock from '@components/components/article/TextBlock/textBlock.html.twig';
import businessHero from '@components/components/fhrs/BusinessHero/businessHero.html.twig';
import titleAndText from '@components/components/form/TitleAndText/titleAndText.html.twig';
import explanationBlock from '@components/components/article/ExplanationBlock/explanationBlock.html.twig';
import LayoutCentered from '../../../components/layout/LayoutCentered';
import StandardsTable from '../../../components/business/StandardsTable';
import LocalAuthority from '../../../components/business/LocalAuthority';
import PageWrapper from '../../../components/layout/PageWrapper';
import TwigTemplate from '../../../lib/parse.js';
import api from '../../../lib/api.js';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from "next-i18next";
import {useEffect, useState} from "react";
import BingMapsReact from "../../../lib/bing-maps";
import * as ReactDOM from "react-dom";
import formatDate from "../../../lib/formatDate";
import Head from "next/head";
import parse from 'html-react-parser';
import {useHistory} from '../../../context/History'

export async function getStaticPaths() {
  const establishments = [];
  /**
   @TODO : reinstate when servers sorted
   const data = await api.setType('establishments', {basic: true, pageNumber: 1, pageSize: 1}).getResults();
   const establishments = data.establishments;
   */
  const paths = establishments.map((establishment) => {
    let bn = establishment.BusinessName.replace(/[^a-z0-9 -]/gi, '').replace(/\s+/g, '-').toLowerCase();
    if (!bn.length) bn = "unknown";
    return {
      params: {
        id: establishment.FHRSID.toString(),
        businessName: bn,
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
  const businessId = context.params.id;
  const business = await api.setLanguage(context.locale === 'cy' ? 'cy-GB' : '').setType('establishments', {id: businessId}).getResults();
  const scores = await api.setLanguage(context.locale === 'cy' ? 'cy-GB' : '').setType('scoredescriptors', {}, {establishmentId: businessId}).getResults();
  return {
    props: {
      business: business,
      scores: scores,
      menus: menus,
      locale: context.locale,
      bing_key: process.env.NEXT_PUBLIC_BING_MAPS_KEY,
      ...(await serverSideTranslations(context.locale, ['dates', 'common', 'businessHero', 'businessPage'])),
    },
    revalidate: 21600,
  }
}

function BusinessPage({business, scores, locale, bing_key}) {
  const {previous} = useHistory();
  const {t} = useTranslation(['dates', 'common', 'businessHero', 'businessPage']);
  const [inWales, setInWales] = useState(false);
  const [localAuthorityId, setLocalAuthorityId] = useState(null);

  const {latitude, longitude} = business.geocode;

  useEffect(() => {
    const mapWrapper = document.querySelector('.business-hero__map__wrapper');
    if (mapWrapper) {
      ReactDOM.render(
  <BingMapsReact
        bingMapsKey={bing_key}
        mapOptions={{
          navigationBarMode: 'round',
        }}
        viewOptions={{
          center: {latitude: latitude, longitude: longitude},
          mapTypeId: 'road',
          zoom: 13,
        }}
        pushPins={[
          {
            center: {
              latitude: latitude,
              longitude: longitude,
            },
            options: {
              title: business.BusinessName,
            }
          }
        ]}
        mapClassName="business"
        mapWrapper={mapWrapper}
     />
, mapWrapper)
    }
  });

  useEffect(() => {
    async function localAuthorityDetails(localAuthorityCode) {
      const authorities = await api.setLanguage(locale === 'cy' ? 'cy-GB' : '').setType('authorities').getResults();
      const authority = authorities.authorities.filter((la) => {
        return la.LocalAuthorityIdCode === localAuthorityCode;
      });
      setInWales(authority[0].RegionName === 'Wales');
      setLocalAuthorityId(authority[0].LocalAuthorityId);
    }

    localAuthorityDetails(business.LocalAuthorityCode);
  }, []);

  const pageTitle = `${business.BusinessName ? business.BusinessName : 'unknown'} | ${t('page_title', {ns: 'businessPage'})} | ${t('title', {ns: 'common'})}`;

  // Format date
  const date = new Date(business.RatingDate);
  const formattedDate = formatDate(date, t, locale)

  // Format address
  let formattedAddress = '';
  for (let i = 1; i <= 4; i++) {
    formattedAddress += business[`AddressLine${i}`] ? business[`AddressLine${i}`] + '<br>' : '';
  }
  formattedAddress = formattedAddress.replace(/<br>$/, '');

  // Get business reply if available
  let businessReply = business.RightToReply;

  const isPrivate = !formattedAddress;
  const noMap = !latitude || !longitude;

  let statusDetails = null;
  if (business.NewRatingPending) {
    statusDetails = {
      summary: t('ss_recently_inspected', {ns: 'common'}),
      description: t('sd_recently_inspected', {ns: 'common'}),
    }
  }

  // Generate hero data
  const heroData = {
    name: business.BusinessName,
    back_link: previous ? locale === 'cy' ? `/cy${previous}` : previous : locale === 'cy' ? '/cy' : '/',
    back_to_search_results: t('back_to_search_results', {ns: 'businessHero'}),
    search_local_link: `${locale === 'cy' ? '/cy' : ''}/authority-search-landing/${localAuthorityId}`,
    search_this_local_authority_area: t('search_this_local_authority_area', {ns: 'businessHero'}),
    search_all_link: locale === 'cy' ? '/cy' : '/',
    search_all_data: t('search_all_data', {ns: 'businessHero'}),
    address_title: t('address_title', {ns: 'businessHero'}),
    private: isPrivate,
    address_content: formattedAddress,
    post_code: business.PostCode,
    private_address: t('private_address', {ns: 'businessHero'}),
    registered_with: t('registered_with', {ns: 'businessHero'}),
    local_authority_name: business.LocalAuthorityName,
    local_authority: t('local_authority', {ns: 'businessHero'}),
    business_type_title: t('business_type_title', {ns: 'businessHero'}),
    business_type_content: business.BusinessType,
    date_title: t('date_title', {ns: 'businessHero'}),
    date_content: formattedDate,
    rating: business.RatingValue === 'Pass and Eat Safe' ? 'PassEatSafe' : business.RatingValue.toString().replace(' ', ''),
    welsh: locale === 'cy',
    wales_business: inWales,
    map: !isPrivate && !noMap,
    show_map: t('show_map', {ns: 'businessHero'}),
    hide_map: t('hide_map', {ns: 'businessHero'}),
    fhis: business.SchemeType === 'FHIS',
    status_details: statusDetails,
  }

  const foodSafetyText = {
    content: t('food_safety_text', {ns: 'businessPage'}),
  }

  const aboutRightToReply = {
    tag: 'h3',
    title: t('about_comments_label', {ns: 'businessPage'}),
    description: t('about_comments_description', {ns: 'businessPage'}),
  }

  let rightToReplySection = '';
  if (businessReply) {
    const rightToReply = {
      tag: 'h2',
      title: t('what_the_business_says_label', {ns: 'businessPage'}),
      description: parse(businessReply),
    }
    rightToReplySection =
      <>
        <TwigTemplate template={titleAndText} values={rightToReply} attribs={[]}/>
        <TwigTemplate template={titleAndText} values={aboutRightToReply} attribs={[]}/>
      </>;
  }

  let noMapAvailableSection = '';
  if (isPrivate || noMap) {
    const noMapAvailable = {
      content: isPrivate ? t('private_no_map_available', {ns: 'businessPage'}) : t('no_map_available', {ns: 'businessPage'}),
    }
    noMapAvailableSection =
      <>
        <TwigTemplate template={textBlock} values={noMapAvailable} attribs={[]}/>
      </>;
  }

  const businessOwnerText = {
    tag: 'h2',
    title: t('business_owner_or_manager_title', {ns: 'businessPage'}),
    description: t('business_owner_or_manager_description', {ns: 'businessPage'}),
  }

  const getCodeText = {
    type: 'general',
    wysiwyg_content: `<h3>${t('get_code_title', {ns: 'businessPage'})}</h3><p>${t('get_code_description', {ns: 'businessPage'})}</p>`,
    link_text: t('get_code_link_text', {ns: 'businessPage'}),
    link_url: '#',
  }

  const localAuthorityText = {
    la_section_title: t('la_section_title', {ns: 'businessPage'}),
    la_name_label: t('la_name_label', {ns: 'businessPage'}),
    la_website_label: t('la_website_label', {ns: 'businessPage'}),
    la_email_label: t('la_email_label', {ns: 'businessPage'}),
    opens_in_new_tab_label: t('opens_in_new_tab_label', {ns: 'common'})
  }

  const standardsTableText = {
    st_area_inspected: t('st_area_inspected', {ns: 'businessPage'}),
    st_standards_found: t('st_standards_found', {ns: 'businessPage'}),
    st_hygienic_food_handling_label: t('st_hygienic_food_handling_label', {ns: 'businessPage'}),
    st_hygienic_food_handling_description: t('st_hygienic_food_handling_description', {ns: 'businessPage'}),
    st_hygienic_cleanliness_label: t('st_hygienic_cleanliness_label', {ns: 'businessPage'}),
    st_hygienic_cleanliness_description: t('st_hygienic_cleanliness_description', {ns: 'businessPage'}),
    st_hygienic_management_label: t('st_hygienic_management_label', {ns: 'businessPage'}),
    st_hygienic_management_description: t('st_hygienic_management_description', {ns: 'businessPage'}),
    st_standards_title: t('st_standards_title', {ns: 'businessPage'}),
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <LayoutCentered>
        <TwigTemplate template={businessHero} values={heroData} attribs={[]}/>
        {noMapAvailableSection}
        <StandardsTable scores={scores} translations={standardsTableText}/>
        <TwigTemplate template={textBlock} values={foodSafetyText} attribs={[]}/>
        {rightToReplySection}
        <TwigTemplate template={titleAndText} values={businessOwnerText} attribs={[]}/>
        <TwigTemplate template={explanationBlock} values={getCodeText} attribs={[]}/>
        <LocalAuthority business={business} translations={localAuthorityText}/>
      </LayoutCentered>
    </>
  )
}

export default PageWrapper(BusinessPage);
