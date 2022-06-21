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
import {useRouter} from 'next/router';

export async function getStaticPaths () {
  const data = await api.setType('establishments', {basic: true, pageNumber: 1, pageSize: 500}).getResults();
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
  const res = await fetch(process.env.FSA_MAIN_BASE_URL + '/api/menus');
  const menus = await res.json();
  const businessId = context.params.id;
  const business = await api.setType('establishments', {id: businessId}).getResults();
  const scores = await api.setType('scoredescriptors', {}, {establishmentId: businessId}).getResults();
  return {
    props: {
      business: business,
      scores: scores,
      menus: menus,
    },
    revalidate: 21600,
  }
}

function BusinessPage({business, scores}) {
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
    back_to_search_results: 'Back to search results',
    search_local_link: '#',
    search_this_local_authority_area: 'Search this local authority area',
    search_all_link: '#',
    search_all_data: 'Search all data',
    address_title: 'Address',
    address_content: formattedAddress,
    business_type_title: 'Business type',
    business_type_content: business.BusinessType,
    date_title: 'Date of inspection',
    date_content: formattedDate,
    rating: business.RatingValue,
  }

  const foodSafetyText = {
    content: '<p>If you wish to see the food safety officer’s report on which this rating is based, you can request this from the local authority that carried out the inspection. You can do this by sending an email to the address below. The local authority will consider your request and will usually send you a copy of the report. In some cases, the local authority may decide that they cannot do so but will let you know this and explain why.</p>',
  }

  const aboutRightToReply = {
    tag: 'h3',
    title: 'About comments made by the business:',
    description: '<p>A business has the right to reply to its local authority about the food hygiene rating given. This means a business may draw attention to improvements made since the inspection and/or explain particular circumstances at the time of inspection that might have affected the rating the business was given. The comments made by the business have been reviewed and may have been edited by a local authority food safety officer so they fit the terms and conditions of this website but the accuracy of any statements made has not been verified.</p>',
  }

  let rightToReplySection = '';
  if (businessReply) {
    const rightToReply = {
      tag: 'h2',
      title: 'What the business says',
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
    title: 'Are you the business owner or manager?',
    description: '<p>If any information on this page is incorrect you can email the correct information to your local authority by using the email address below.</p><p>You can find out <a href="https://www.food.gov.uk/business-guidance/food-hygiene-ratings-for-businesses">how to appeal against the rating given and find out about your right to reply</a>. You can also <a href="https://www.food.gov.uk/business-guidance/food-hygiene-ratings-for-businesses"> ask for a re-inspection</a>.</p>',
  }

  const getCodeText = {
    tag: 'h2',
    title: 'Display this rating on your website',
    description: '<p>You can display this rating on your website.</p><p><a href="#">Get the code.</a></p>',
  }

  const promoGroupText = {
    cards: [
      {
        title: 'Download data',
        description: 'Re-usable hygiene data',
        promo_link: '/open-data',
      },
      {
        title: 'Food problems?',
        description: 'Consumers, businesses and enforcers can report issues',
        promo_link: 'https://www.food.gov.uk/contact/consumers/report-problem',
      },
      {
        title: 'Be updated',
        description: 'Get email and text updates. Follow us',
        promo_link: 'https://www.food.gov.uk/news-alerts/subscribe/alerts/',
      },
    ]
  }

  return (
    <>
      <LayoutCentered>
        <TwigTemplate template={businessHero} values={heroData} attribs={[]}/>
        <StandardsTable scores={scores}/>
        <TwigTemplate template={textBlock} values={foodSafetyText} attribs={[]}/>
        {rightToReplySection}
        <TwigTemplate template={titleAndText} values={businessOwnerText} attribs={[]}/>
        <TwigTemplate template={titleAndText} values={getCodeText} attribs={[]}/>
        <LocalAuthority business={business} />
      </LayoutCentered>
      <TwigTemplate template={promoGroup} values={promoGroupText} attribs={[]}/>
    </>
  )
}

export default PageWrapper(BusinessPage);
