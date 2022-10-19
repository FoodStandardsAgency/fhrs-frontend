import businessHero from '@components/components/fhrs/BusinessHero/businessHero.html.twig';
import titleAndText from '@components/components/form/TitleAndText/titleAndText.html.twig';
import breadcrumb from '@components/components/general/Breadcrumb/breadcrumbs.html.twig';
import badgeDownload from '@components/components/fhrs/BadgeDownload/badgeDownload.html.twig';
import LayoutCentered from '../../../../components/layout/LayoutCentered';
import PageWrapper from '../../../../components/layout/PageWrapper';
import TwigTemplate from '../../../../lib/parse.js';
import api from '../../../../lib/api.js';
import businessNameToUrl from '../../../../lib/business.js';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from "next-i18next";
import {useEffect, useState} from "react";
import formatDate from "../../../../lib/formatDate";
import Head from "next/head";
import {useHistory} from '../../../../context/History'
import generateBreadcrumbs from "../../../../lib/breadcrumbs";
import {useRouter} from "next/router";

export async function getStaticPaths() {
  const establishments = [];
  /**
   @TODO : reinstate when servers sorted
   const data = await api.setType('establishments', {basic: true, pageNumber: 1, pageSize: 1}).getResults();
   const establishments = data.establishments;
   */
  const paths = establishments.map((establishment) => {
    let bn = businessNameToUrl(establishment.BusinessName);
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
      base_url: process.env.PROJECT_BASE_URL,
      ...(await serverSideTranslations(context.locale, ['dates', 'common', 'businessHero', 'businessPage', 'onlineRatings', 'searchPage'])),
    },
    revalidate: 21600,
  }
}

function generateBadges(id, rating, scheme, isWelsh, base_url) {
  let badges = [];
  let folder = 'fhrs';
  let extension = 'svg';
  let noOfBadges = 3;
  let sizes = {
    1: {
      size: '481 x 122',
      filesize: '35KB'
    },
    2: {
      size: '540 x 120',
      filesize: '24KB'
    },
    3: {
      size: '291 x 170',
      filesize: '28KB'
    }
  };

  if (isWelsh) {
    folder = 'fhrs-bilingual';
  }

  if (scheme !== 'FHRS') {
    folder = 'fhis';
    extension = 'jpg';
    noOfBadges = 2;
    sizes = {
      1: {
        size: '290 x 148',
        filesize: '44.56KB'
      },
      2: {
        size: '120 x 61',
        filesize: '7.73KB'
      }
    }
  }
  const formattedRating = rating === 'Pass and Eat Safe' ? 'PassEatSafe' : rating.toString().replace(' ', '');
  for (let i = noOfBadges; i > 0; i--) {
    badges.push(
      {
        class_name: 'badge-download',
        rating: formattedRating,
        version: i,
        size: sizes[i].size,
        filesize: sizes[i].filesize,
        download_link: '/embed/badges/' + folder + '/' + i + '/' + folder + '-badge-' + formattedRating + '.' + extension,
        code: `<script src="${base_url}/embed/embed-badge.js" data-business-id="${id}" data-rating-style="${i}" data-welsh="${isWelsh}"></script>`,
        preview_link: `/online-rating-preview?id=${id}&style=${i}&isWelsh=${isWelsh}`,
      },
    )
  }

  badges = scheme !== 'FHRS' ? badges.reverse() : badges;
  return badges;
}

function BusinessPage({business, locale, base_url}) {
  const {t} = useTranslation(['dates', 'common', 'businessHero', 'businessPage', 'onlineRatings', 'searchPage']);
  const [inWales, setInWales] = useState(false);
  const [localAuthorityId, setLocalAuthorityId] = useState(null);

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

  const pageTitle = `${business.BusinessName ? business.BusinessName : 'unknown'} | ${t('get_online_ratings', {ns: 'onlineRatings'})} | ${t('title', {ns: 'common'})}`;

  const isWelsh = inWales || locale === 'cy';

  // Format date
  const date = new Date(business.RatingDate);
  const formattedDate = formatDate(date, t, locale)

  // Format address
  let formattedAddress = '';
  for (let i = 1; i <= 4; i++) {
    formattedAddress += business[`AddressLine${i}`] ? business[`AddressLine${i}`] + '<br>' : '';
  }
  formattedAddress = formattedAddress.replace(/<br>$/, '');

  const isPrivate = !formattedAddress;

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
    back_link: `${locale === 'cy' ? '/cy' : ''}/business/${business.FHRSID.toString()}/${business.BusinessName.replace(/[^a-z0-9 -]/gi, '').replace(/\s+/g, '-').toLowerCase()}`,
    back_to_search_results: t('back_to_business_page', {ns: 'onlineRatings'}),
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
    map: false,
    fhis: business.SchemeType === 'FHIS',
    status_details: statusDetails,
    name_prefix: t('get_online_ratings_for', {ns: 'onlineRatings'}),
  }

  const howToContent = {
    title: t('how_to_display_title', {ns: 'onlineRatings'}),
    description: t('how_to_display_content', {ns: 'onlineRatings'}),
    tag: 'h2',
    class: 'legacy-badge-title',
  }

  const onlineRatingContent = {
    title: t('high_res_online_rating', {ns: 'onlineRatings'}),
    tag: 'h2',
    class: 'legacy-badge-title',
  }

  const legacyContent = {
    title: t('legacy_rating_title', {ns: 'onlineRatings'}),
    description: t('legacy_rating_content', {ns: 'onlineRatings'}),
    tag: 'h2',
    class: 'legacy-badge-title',
  }

  const badgeDownloadContent = {
    get_code: t('get_code', {ns: 'onlineRatings'}),
    pixels: t('pixels', {ns: 'onlineRatings'}),
    js: {
      label: t('copy_code', {ns: 'onlineRatings'}),
      rows: 2,
    },
    preview: t('preview', {ns: 'onlineRatings'}),
    download_image: t('download_image', {ns: 'onlineRatings'}),
    badges: generateBadges(business.FHRSID, business.RatingValue, business.SchemeType, isWelsh, base_url),
    fhis: business.SchemeType === 'FHIS',
    welsh: isWelsh,
  }

  const breadcrumbLinks = [
    {
      'text': business.BusinessName,
      'url': `/business/${business.FHRSID.toString()}/${businessNameToUrl(business.BusinessName)}`,
    },
    {
      'text': t('get_online_ratings', {ns: 'onlineRatings'}),
      'url': null,
    },
  ]

  const breadcrumbContent = generateBreadcrumbs(breadcrumbLinks, locale, t);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <LayoutCentered>
        <TwigTemplate template={breadcrumb} values={breadcrumbContent} attribs={[]}/>
        <TwigTemplate template={businessHero} values={heroData} attribs={[]}/>
        <TwigTemplate template={titleAndText} values={howToContent} attribs={[]}/>
        <TwigTemplate template={titleAndText} values={onlineRatingContent} attribs={[]}/>
        <TwigTemplate template={badgeDownload} values={badgeDownloadContent} attribs={[]}/>
        <TwigTemplate template={titleAndText} values={legacyContent} attribs={[]}/>
      </LayoutCentered>
    </>
  )
}

export default PageWrapper(BusinessPage);
