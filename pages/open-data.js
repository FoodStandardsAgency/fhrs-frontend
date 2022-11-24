import PageWrapper from '../components/layout/PageWrapper';
import LayoutCentered from '../components/layout/LayoutCentered';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import Head from 'next/head'
import api from "../lib/api";
import TwigTemplate from "../lib/parse";
import businessHero from '@components/components/fhrs/BusinessHero/businessHero.html.twig';
import textBlock from '@components/components/article/TextBlock/textBlock.html.twig';
import titleAndText from '@components/components/form/TitleAndText/titleAndText.html.twig';
import imageSection from '@components/components/fhrs/ImageSection/imageSection.html.twig';
import {useEffect, useState} from "react";

const options = {
  hidePromoGroup: true,
}

export async function getStaticProps(context) {
  const res = await fetch(process.env.FSA_MAIN_BASE_URL + (context.locale === 'cy' ? '/cy' : '') + '/api/menus');
  const menus = await res.json();

  const regions = await api.setLanguage(context.locale === 'cy' ? 'cy-GB' : '').setType('regions').getResults();
  const authorities = await api.setLanguage(context.locale === 'cy' ? 'cy-GB' : '').setType('authorities').getResults();

  return {
    props: {
      menus: menus,
      locale: context.locale,
      regions: regions,
      authorities: authorities,
      ...(await serverSideTranslations(context.locale, ['common', 'openData'])),
    },
    revalidate: 21600,
  }
}

function OpenData({locale, authorities, regions}) {
  const {t} = useTranslation(['common', 'openData']);
  const pageTitle = `${t('page_title', {ns: 'openData'})} | ${t('title')}`;
  const sortedAuthorities = authorities.authorities.sort((a,b) => a.Name.localeCompare(b.Name))
  const [tablesProcessed, setTablesProcessed] = useState(false);

  // Process tables
  useEffect(() => {
    if (!tablesProcessed) {
      window.mobileTables();
      setTablesProcessed(true);
    }
  });

  let regionSections = [];

  regions.regions.forEach(region => {
    const matchingAuthorities = sortedAuthorities.filter((authority) => {
      if (authority.RegionName === region.nameKey) {
        return authority;
      }
    });
    regionSections.push({
      name: region.name,
      authorities: matchingAuthorities,
    })
  });

  const heroData = {
    name: t('header', {ns: 'openData'}),
  }

  const intro = {
    content: t('intro', {ns: 'openData'}),
  }

  const termsAndConditions = {
    title: t('terms_title', {ns: 'openData'}),
    tag: 'h2',
    description: t('terms_content', {ns: 'openData'}),
  }

  const about = {
    title: t('about_title', {ns: 'openData'}),
    tag: 'h2',
    description: t('about_content', {ns: 'openData'}),
  }

  const systemStatus = {
    title: t('system_status_title', {ns: 'openData'}),
    tag: 'h2',
    description: t('system_status_content', {ns: 'openData'}),
  }

  const guidance = {
    title: t('api_guidance_title', {ns: 'openData'}),
    tag: 'h2',
    description: t('api_guidance_content', {ns: 'openData'}),
  }

  const images = {
    title: t('images_title', {ns: 'openData'}),
    description: t('images_desc', {ns: 'openData'}),
    welsh: locale === 'cy',
    download_link: '/images/ratings.zip',
    download_text: t('images_download_text', {ns: 'openData'}),
    filesize: '1 MB',
    file_format: 'ZIP',
    fhrs_badges: [
      {
        class_name: 'image-section',
        rating: 5,
        version: 3,
      },
      {
        class_name: 'image-section',
        rating: 5,
        version: 1,
      },
      {
        class_name: 'image-section',
        rating: 5,
        version: 2,
      },
      {
        class_name: 'image-section',
        rating: 5,
        version: 4,
      },
      {
        class_name: 'image-section',
        rating: 5,
        version: 5,
      },
    ],
    fhis_badges: [
      {
        class_name: 'image-section',
        rating: 'Pass',
        version: 1,
      },
      {
        class_name: 'image-section',
        rating: 'Pass',
        version: 2,
      },
      {
        class_name: 'image-section',
        rating: 'Pass',
        version: 3,
      },
    ],
  }

  const legacy = {
    title: t('legacy_online_ratings_title', {ns: 'openData'}),
    tag: 'h2',
    description: t('legacy_online_ratings_content', {ns: 'openData'}),
  }

  const scoreDescriptors = {
    title: t('score_descriptors_title', {ns: 'openData'}),
    tag: 'h2',
    description: t('score_descriptors_content', {ns: 'openData'}),
  }

  const downloadableFiles = {
    title: t('downloadable_files_title', {ns: 'openData'}),
    tag: 'h2',
    description: t('downloadable_files_content', {ns: 'openData'}),
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <LayoutCentered>
        <TwigTemplate template={businessHero} values={heroData} attribs={[]}/>
        <TwigTemplate template={textBlock} values={intro} attribs={[]}/>
        <TwigTemplate template={titleAndText} values={termsAndConditions} attribs={[]}/>
        <TwigTemplate template={titleAndText} values={about} attribs={[]}/>
        <TwigTemplate template={titleAndText} values={systemStatus} attribs={[]}/>
        <TwigTemplate template={titleAndText} values={guidance} attribs={[]}/>
        <TwigTemplate template={imageSection} values={images} attribs={[]}/>
        <TwigTemplate template={titleAndText} values={legacy} attribs={[]}/>
        <TwigTemplate template={titleAndText} values={scoreDescriptors} attribs={[]}/>
        <TwigTemplate template={titleAndText} values={downloadableFiles} attribs={[]}/>
        {
          regionSections.map(section => {
            const authorityTable = `
               <table>
                 <caption>${section.name}</caption>
                 <thead>
                   <tr>
                     <th scope="col">${t('local_authority', {ns: 'openData'})}</th>
                     <th scope="col">${t('last_update', {ns: 'openData'})}</th>
                     <th scope="col">${t('number_of_businesses', {ns: 'openData'})}</th>
                   </tr>
                 </thead>
                 <tbody>
                  ${section.authorities.map(authority => {
                      const date = new Date(authority.LastPublishedDate);
                      const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} at ${date.getHours() % 12 || 12}:${date.getMinutes()}`;
                      return `
                        <tr>
                          <td><a href="${authority.FileName}">${authority.Name} (${t('english_language', {ns: 'openData'})})</a></td>
                          <td>${formattedDate}</td>
                          <td>${authority.EstablishmentCount.toLocaleString()}</td>
                        </tr>
                        ${
                          authority.FileNameWelsh ? `
                            <td><a href="${authority.FileNameWelsh}">${authority.Name} (${t('welsh_language', {ns: 'openData'})})</a></td>
                            <td>${formattedDate}</td>
                            <td>${authority.EstablishmentCount}</td>
                          ` : ''
                        }
                      `
                    }).join('')}
                 </tbody>
               </table>
            `;
            const sectionDetails = {
              content: authorityTable,
            }
            const key = `region-section-${(section.name).toLowerCase().replace(/\s/g, '')}`
            return (
              <TwigTemplate key={key} template={textBlock} values={sectionDetails} attribs={[]}/>
            )
          })
        }
      </LayoutCentered>
    </>
  )
}

export default PageWrapper(OpenData, options);
