import textBlock from '@components/components/article/TextBlock/textBlock.html.twig';
import businessHero from '@components/components/fhrs/BusinessHero/businessHero.html.twig';
import titleAndText from '@components/components/form/TitleAndText/titleAndText.html.twig';
import promoGroup from '@components/components/landing/PromoGroup/promoGroup.html.twig';
import LayoutCentered from '../../../components/layout/LayoutCentered';
import StandardsTable from '../../../components/business/StandardsTable';
import LocalAuthority from '../../../components/business/LocalAuthority';
import PageWrapper from '../../../components/layout/PageWrapper';
import TwigTemplate from '../../../lib/parse.js';
import api from '../../../lib/api.js';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from "next-i18next";

export async function getStaticPaths () {
  const data = await api.setType('establishments', {basic: true, pageNumber: 1, pageSize: 20}).getResults();
  const establishments = data.establishments;
  const paths = establishments.map((establishment) => {
    let bn = establishment.BusinessName.replace(/[^a-z0-9 -]/gi, '').replace(/\s+/g, '-').toLowerCase();
    if (!bn.length) bn = "unknown";
    return {
      params: {
        id: establishment.FHRSID.toString(),
        businessName: bn,
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
  const businessId = context.params.id;
  const business = await api.setLanguage(context.locale === 'cy' ? 'cy-GB' : '').setType('establishments', {id: businessId}).getResults();
  const scores = await api.setLanguage(context.locale === 'cy' ? 'cy-GB' : '').setType('scoredescriptors', {}, {establishmentId: businessId}).getResults();
  return {
    props: {
      business: business,
      scores: scores,
      menus: menus,
      locale: context.locale,
      ...(await serverSideTranslations(context.locale, ['common', 'businessHero', 'businessPage'])),
    },
    revalidate: 21600,
  }
}

function BusinessPage({business, scores, locale}) {
  const { t } = useTranslation(['common', 'businessHero', 'businessPage']);
  // Format date
  const date = new Date(business.RatingDate);
  const formattedDate = date.toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'});

  // Format address
  let formattedAddress = '';
  for (let i = 1; i <= 4; i++) {
    formattedAddress += business[`AddressLine${i}`] ? business[`AddressLine${i}`] + '<br>' : '';
  }
  formattedAddress += business.PostCode ? business.PostCode : '';

  // Get business reply if available
  let businessReply = business.RightToReply;

  // Generate hero data
  const heroData = {
    name: business.BusinessName,
    back_link: '#',
    back_to_search_results: t('back_to_search_results', {ns: 'businessHero'}),
    search_local_link: '#',
    search_this_local_authority_area: t('search_this_local_authority_area', {ns: 'businessHero'}),
    search_all_link: '#',
    search_all_data: t('search_all_data', {ns: 'businessHero'}),
    address_title: t('address_title', {ns: 'businessHero'}),
    address_content: formattedAddress,
    business_type_title: t('business_type_title', {ns: 'businessHero'}),
    business_type_content: business.BusinessType,
    date_title: t('date_title', {ns: 'businessHero'}),
    date_content: formattedDate,
    rating: business.RatingValue,
    welsh: locale === 'cy',
    wales_business: false, // This isn't captured in the API so not sure how we're going to get this?
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
      description: businessReply.replace('&lt;p&gt;', '').replace('&lt;/p&gt;', ''),
    }
    rightToReplySection =
      <>
        <TwigTemplate template={titleAndText} values={rightToReply} attribs={[]}/>
        <TwigTemplate template={titleAndText} values={aboutRightToReply} attribs={[]}/>
      </>;
  }

  const businessOwnerText = {
    tag: 'h2',
    title: t('business_owner_or_manager_title', {ns: 'businessPage'}),
    description: t('business_owner_or_manager_description', {ns: 'businessPage'}),
  }

  const getCodeText = {
    tag: 'h2',
    title: t('get_code_title', {ns: 'businessPage'}),
    description: t('get_code_description', {ns: 'businessPage'}),
  }

  const promoGroupText = {
    cards: [
      {
        title: t('download_data_label', {ns: 'businessPage'}),
        description: t('download_data_description', {ns: 'businessPage'}),
        promo_link: '/open-data',
      },
      {
        title: t('food_problems_label', {ns: 'businessPage'}),
        description: t('food_problems_description', {ns: 'businessPage'}),
        promo_link: 'https://www.food.gov.uk/contact/consumers/report-problem',
      },
      {
        title: t('be_updated_label', {ns: 'businessPage'}),
        description: t('be_updated_description', {ns: 'businessPage'}),
        promo_link: 'https://www.food.gov.uk/news-alerts/subscribe/alerts/',
      },
    ]
  }

  const localAuthorityText = {
    la_section_title: t('la_section_title', {ns: 'businessPage'}),
    la_name_label: t('la_name_label', {ns: 'businessPage'}),
    la_website_label: t('la_website_label', {ns: 'businessPage'}),
    la_email_label: t('la_email_label', {ns: 'businessPage'}),
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
  }

  return (
    <>
      <LayoutCentered>
        <TwigTemplate template={businessHero} values={heroData} attribs={[]}/>
        <StandardsTable scores={scores} translations={standardsTableText}/>
        <TwigTemplate template={textBlock} values={foodSafetyText} attribs={[]}/>
        {rightToReplySection}
        <TwigTemplate template={titleAndText} values={businessOwnerText} attribs={[]}/>
        <TwigTemplate template={titleAndText} values={getCodeText} attribs={[]}/>
        <LocalAuthority business={business} translations={localAuthorityText} />
      </LayoutCentered>
      <TwigTemplate template={promoGroup} values={promoGroupText} attribs={[]}/>
    </>
  )
}

export default PageWrapper(BusinessPage);
