import textBlock from '@components/components/article/TextBlock/textBlock.html.twig';
import businessHero from '@components/components/fhrs/BusinessHero/businessHero.html.twig';
import breadcrumb from '@components/components/general/Breadcrumb/breadcrumbs.html.twig';
import LayoutCentered from '../../components/layout/LayoutCentered';
import PageWrapper from '../../components/layout/PageWrapper';
import TwigTemplate from "../../lib/parse";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import Head from "next/head";
import LayoutFullWidth from "../../components/layout/LayoutFullWidth";
import api from "../../lib/api";
import localAuthorityMap from '@components/components/fhrs/LocalAuthorityMap/localAuthorityMap.html.twig';
import {useEffect, useState} from "react";
import updateParams from "../../lib/updateParams";
import {i18n, useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import generateBreadcrumbs from "../../lib/breadcrumbs";

export async function getStaticPaths() {
  const regions = [];
  /**
   @TODO : reinstate when servers sorted
   const data = await api.setType('regions').getResults();
   const authorities = data.authorities;
   */
  const paths = regions.map((region) => {
    return {
      params: {
        id: region.id,
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

  const id = context.params.id;
  const regions = await api.setLanguage(context.locale === 'cy' ? 'cy-GB' : '').setType('regions').getResults();
  const selectedRegion = await api.setLanguage(context.locale === 'cy' ? 'cy-GB' : '').setType('regions', {id: id}).getResults();
  const allAuthorities = await api.setLanguage(context.locale === 'cy' ? 'cy-GB' : '').setType('authorities').getResults();

  const selectedAuthorities = allAuthorities.authorities.filter((authority) => {
    if (authority.RegionName === selectedRegion.nameKey) {
      return authority;
    }
  });

  return {
    props: {
      menus: menus,
      locale: context.locale,
      regions: regions.regions,
      selectedRegion: selectedRegion,
      selectedAuthorities: selectedAuthorities,
      ...(await serverSideTranslations(context.locale, ['dates', 'common', 'localAuthorityLander', 'pagination'])),
    },
    revalidate: 21600,
  }
}

function LocalAuthorityRegion({locale, regions, selectedRegion, selectedAuthorities}) {
  const {t} = useTranslation(['dates', 'common', 'localAuthorityLander']);
  const {query, isReady} = useRouter();

  const pageTitle = `${t('page_title', {ns: 'localAuthorityLander'})} - ${selectedRegion.name} | ${t('title', {ns: 'common'})}`;

  const [tablesProcessed, setTablesProcessed] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (!isReady) return;

    const {page} = query;
    setPage(page);

    const paginationLinks = document.querySelectorAll('.pagination__item a');
    paginationLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        updateParams('page', link.getAttribute('data-page'));
      });
    });

    if (!tablesProcessed) {
      window.mobileTables();
      setTablesProcessed(true);
    }
    i18n.addResourceBundle(locale, 'pagination')
  }, [isReady, page]);

  let authorities = [];
  let totalPages = 1;
  const pageSize = 12;
  const currentPage = page ? page : 1;

  if (selectedAuthorities) {
    const sorted = selectedAuthorities.sort((a,b) => a.Name.localeCompare(b.Name))
    authorities = sorted.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    totalPages = Math.ceil(sorted.length/pageSize);
  }

  const formattedRegions = {};

  regions.forEach(region => {
    const id = region.id;
    const nameKey = region.nameKey.replace(/\s+/g, '_').toLowerCase();
    const name = region.name;
    formattedRegions[nameKey] = {
      name: name,
      link: `${locale === 'cy' ? '/cy' : ''}/search-a-local-authority-area/${id}`,
    }
  });

  const formattedAuthorities = authorities.map(authority => {
    return {
      local_authority: authority.Name,
      local_authority_link: `${locale === 'cy' ? '/cy' : ''}/authority-search-landing/${authority.LocalAuthorityId}`,
      number_of_businesses: authority.EstablishmentCount.toLocaleString(),
    }
  });

  const breadcrumbLinks = [
    {
      'text': t('page_title', {ns: 'localAuthorityLander'}),
      'url': `/search-a-local-authority-area`,
    },
    {
      'text': selectedRegion.name,
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
    selected_results_data: formattedAuthorities,
    selected_region: {
      name: selectedRegion.name,
      key: selectedRegion.nameKey.replace(/\s+/g, '-').toLowerCase(),
    },
    page: currentPage,
    total_pages: totalPages,
    default_image_link: '/images/fhrs-map.svg',
    first_label: t('first', {ns: 'pagination'}),
    previous_label: t('previous', {ns: 'pagination'}),
    next_label: t('next', {ns: 'pagination'}),
    last_label: t('last', {ns: 'pagination'}),
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

export default PageWrapper(LocalAuthorityRegion);
