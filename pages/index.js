import PageWrapper from '../components/layout/PageWrapper';
import LayoutCentered from '../components/layout/LayoutCentered';
import TwigTemplate from "../lib/parse";
import hero from '@components/components/general/Hero/hero.html.twig';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import ratingsSearchBox from '@components/components/fhrs/RatingsSearchBox/ratingsSearchBox.html.twig';
import promoGroup from '@components/components/landing/PromoGroup/promoGroup.html.twig';
import {useTranslation} from "next-i18next";
import SearchBoxMain from "../components/search/SearchBoxMain";
import {useRouter} from "next/router";
import Head from 'next/head'
import {getSearchBoxOptions} from "../lib/getInputFieldValues";

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
      fieldKey: 'id',
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
      options: options,
      ...(await serverSideTranslations(context.locale, ['common', 'homepage', 'ratingsSearchBox', 'businessPage'])),
    },
    revalidate: 21600,
  }
}

function Home({locale, options}) {
  const {t} = useTranslation(['common', 'homepage', 'businessPage']);
  const pageTitle = `${t('page_title', {ns: 'homepage'})} | ${t('title')}`;
  const { query } = useRouter();
  const heroContent = {
    background_colour: 'green',
    type: 'hero--with-image',
    title: t('hero_title', {ns: 'homepage'}),
    content: t('hero_content', {ns: 'homepage'}),
    image: {
      alt: '',
      url: locale === 'cy' ? '/images/homepage-hero-image-welsh.jpeg' : '/images/homepage-hero-image.jpeg',
    },
    mini: true,
  }

  const promoGroupContent = {
    title: t('promo_group_title', {ns: 'homepage'}),
    description: t('promo_group_description', {ns: 'homepage'}),
    description_link_url: '#',
    description_link_label: t('promo_group_link', {ns: 'homepage'}),
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
    ],
  }

  const searchBoxTitle = t('search_box_title', {ns: 'homepage'});

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <TwigTemplate template={hero} values={heroContent} attribs={[]}/>
      <LayoutCentered>
         <SearchBoxMain locale={locale} query={query} submit={'/business-search'} submitType={'input'} pageTitle={searchBoxTitle} options={options} />
      </LayoutCentered>
      <TwigTemplate template={promoGroup} values={promoGroupContent} attribs={[]}/>
    </>
  )
}

export default PageWrapper(Home);
