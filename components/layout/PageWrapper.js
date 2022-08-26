import header from '@components/components/general/Header/header.html.twig';
import footer from '@components/components/general/Footer/footer.html.twig';
import TwigTemplate from '../../lib/parse.js';
import InitLanguageSwitcher from '../../lib/languageSwitcher';
import promoGroup from '@components/components/landing/PromoGroup/promoGroup.html.twig';
import {useEffect} from "react";
import {i18n, useTranslation} from "next-i18next";

export async function getStaticProps (context) {
  const res = await fetch(process.env.FSA_MAIN_BASE_URL + (context.locale === 'cy' ? '/cy' : '') + '/api/menus');
  const menus = await res.json();
  if (!res.ok) {
    throw new Error(`Failed to fetch menus, received status ${res.status}`)
  }
  return {
    props: {
      menus,
    },
    locale: context.locale,
    revalidate: 21600,
  };
}

export default function PageWrapper(Component, options) {
  function PageWrapper(props) {
    const {locale} = props;
    useEffect(() => {
      i18n.addResourceBundle(locale, 'common')
    }, []);
    const {t} = useTranslation(['common']);

    let promoGroupContent = {
      cards: [
        {
          title: t('download_data_label'),
          description: t('download_data_description'),
          promo_link: '/open-data',
        },
        {
          title: t('food_problems_label'),
          description: t('food_problems_description'),
          promo_link: 'https://www.food.gov.uk/contact/consumers/report-problem',
        },
        {
          title: t('be_updated_label'),
          description: t('be_updated_description'),
          promo_link: 'https://www.food.gov.uk/news-alerts/subscribe/alerts/',
        },
      ],
    }

    if (options) {
      if (options.footerBlockText) {
        const text = {
          title: t('promo_group_title'),
          description: t('promo_group_description'),
          description_link_url: '#',
          description_link_label: t('promo_group_link'),
        };
        promoGroupContent = {...promoGroupContent, ...text};
      }
    }
  InitLanguageSwitcher(props.menus.header);
    return (
      <>
        <TwigTemplate template={header} values={props.menus.header} attribs={[]}/>
        <main>
          <Component {...props} />
        </main>
        <TwigTemplate template={promoGroup} values={promoGroupContent} attribs={[]}/>
        <TwigTemplate template={footer} values={props.menus.footer} attribs={[]}/>
      </>
    );
  }
  PageWrapper.displayName = `PageWrapper(${Component.displayName || Component.name}`;
  return PageWrapper;
}


