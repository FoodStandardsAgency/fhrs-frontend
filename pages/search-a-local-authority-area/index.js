import PageWrapper from './../../components/layout/PageWrapper';
import LayoutCentered from './../../components/layout/LayoutCentered';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Head from 'next/head'
import LayoutFullWidth from "../../components/layout/LayoutFullWidth";
import api from "../../lib/api";
import TwigTemplate from "../../lib/parse";
import breadcrumb from '@components/components/general/Breadcrumb/breadcrumbs.html.twig';
import businessHero from '@components/components/fhrs/BusinessHero/businessHero.html.twig';
import textBlock from '@components/components/article/TextBlock/textBlock.html.twig';
import localAuthorityMap from '@components/components/fhrs/LocalAuthorityMap/localAuthorityMap.html.twig';
import {useTranslation} from "next-i18next";
import generateBreadcrumbs from "../../lib/breadcrumbs";

export async function getStaticProps(context) {
  const res = await fetch(process.env.FSA_MAIN_BASE_URL + (context.locale === 'cy' ? '/cy' : '') + '/api/menus');
  const menus = await res.json();

  const regions = await api.setLanguage(context.locale === 'cy' ? 'cy-GB' : '').setType('regions').getResults();

  return {
    props: {
      menus: menus,
      locale: context.locale,
      regions: regions.regions,
      ...(await serverSideTranslations(context.locale, ['common', 'homepage', 'localAuthorityLander'])),
    },
    revalidate: 21600,
  }
}

function LocalAuthoritySearchLander({locale, regions}) {
  const {t} = useTranslation(['dates', 'common', 'localAuthorityLander']);
  const pageTitle = `${t('page_title', {ns: 'localAuthorityLander'})} | ${t('title', {ns: 'common'})}`;

  const formattedRegions = {};

  regions.forEach(region => {
    const id = region.id;
    const nameKey = region.nameKey.replace(/\s+/g, '_').toLowerCase();
    const name = region.name;
    formattedRegions[nameKey] = {
      name: name,
      link: './search-a-local-authority-area/' + id,
    }
  });

  const breadcrumbLinks = [
    {
      'text': t('page_title', {ns: 'localAuthorityLander'}),
      'url': null,
    },
  ]

  const breadcrumbContent = generateBreadcrumbs(breadcrumbLinks, locale, t);

  const businessHeroContent = {
    name: t('page_title', {ns: 'localAuthorityLander'}),
    description: t('description', {ns: 'localAuthorityLander'}),
  }

  const textBlockContent = {
    content: `<p><a href="${locale === 'cy' ? '/cy' : '/'}">${t('search_all_data', {ns: 'localAuthorityLander'})}</a></p>`,
  }

  const localAuthorityMapContent = {
    default_map_title: t('countries_and_england_regions', {ns: 'localAuthorityLander'}),
    selected_region_title_prefix: t('selected_region_title_prefix', {ns: 'localAuthorityLander'}),
    selected_region_title_suffix: t('selected_region_title_suffix', {ns: 'localAuthorityLander'}),
    local_authority_label: t('local_authority', {ns: 'localAuthorityLander'}),
    number_of_businesses_label: t('number_of_businesses', {ns: 'localAuthorityLander'}),
    regions: formattedRegions,
    default_image_link: '/images/fhrs-map.svg',
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <LayoutCentered>
        <TwigTemplate template={breadcrumb} values={breadcrumbContent} attribs={[]}/>
        <TwigTemplate template={businessHero} values={businessHeroContent} attribs={[]}/>
        <TwigTemplate template={textBlock} values={textBlockContent} attribs={[]}/>
      </LayoutCentered>
      <LayoutFullWidth>
        <TwigTemplate template={localAuthorityMap} values={localAuthorityMapContent} attribs={[]}/>
      </LayoutFullWidth>
      <LayoutCentered>
      </LayoutCentered>
    </>
  )
}

export default PageWrapper(LocalAuthoritySearchLander);
