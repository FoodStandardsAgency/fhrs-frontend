import header from '@components/components/general/Header/header.html.twig';
import footer from '@components/components/general/Footer/footer.html.twig';
import TwigTemplate from '../../lib/parse.js';
import InitLanguageSwitcher from '../../lib/languageSwitcher';
import promoGroup from '@components/components/landing/PromoGroup/promoGroup.html.twig';
import feedback from '@components/components/general/Feedback/feedback.html.twig';
import {useEffect} from "react";
import {i18n, useTranslation} from "next-i18next";
import { useRouter } from 'next/router'

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
    const router = useRouter();
    let path;
    if (router) {
      const pathname = router.pathname;
      path = pathname.split("/").pop();
    }
    useEffect(() => {
      i18n.addResourceBundle(locale, 'common')
    }, []);

    const {t} = useTranslation(['common']);

    // Only add the beta banner if we're on the online-ratings page
    if (path === 'online-ratings') {
      props.menus.header['beta_banner'] = {
        content: t('beta_banner_online_ratings'),
      };
    }

    let promoGroupContent = {
      cards: [
        {
          title: t('download_data_label'),
          description: t('download_data_description'),
          promo_link: locale === 'cy' ? '/cy/open-data' : '/open-data',
        },
        {
          title: t('food_problems_label'),
          description: t('food_problems_description'),
          promo_link: locale === 'cy' ? 'https://www.food.gov.uk/cy/contact/consumers/rhoi-gwybod-am-broblem' : 'https://www.food.gov.uk/contact/consumers/report-problem',
        },
        {
          title: t('be_updated_label'),
          description: t('be_updated_description'),
          promo_link: locale === 'cy' ? 'https://www.food.gov.uk/cy/news-alerts/subscribe' : 'https://www.food.gov.uk/news-alerts/subscribe',
        },
      ],
    }
    let hidePromoGroup = false;
    if (options) {
      if (options.footerBlockText) {
        const text = {
          title: t('promo_group_title'),
          description: t('promo_group_description'),
          description_link_url: locale === 'cy' ? 'https://www.food.gov.uk/cy/canllawiau-defnyddiwr/cynllun-sgorio-hylendid-bwyd' : 'https://www.food.gov.uk/safety-hygiene/food-hygiene-rating-scheme',
          description_link_label: t('promo_group_link'),
        };
        promoGroupContent = {...promoGroupContent, ...text};
      }
      if (options.hidePromoGroup) {
        hidePromoGroup = true;
      }
    }
    const feedbackSectionContent = {
      feedback_rich_text: t('feedback_content'),
    }
  InitLanguageSwitcher(props.menus.header);
    return (
      <>
        <TwigTemplate template={header} values={props.menus.header} attribs={[]}/>
        <main>
          <Component {...props} />
          {!hidePromoGroup && <TwigTemplate template={promoGroup} values={promoGroupContent} attribs={[]}/>}
        </main>
        <TwigTemplate template={feedback} values={feedbackSectionContent} attribs={[]}/>
        <TwigTemplate template={footer} values={props.menus.footer} attribs={[]}/>
      </>
    );
  }
  PageWrapper.displayName = `PageWrapper(${Component.displayName || Component.name}`;
  return PageWrapper;
}


