// Creates an array of breadcrumbs (including the global breadcrumbs), and localises the links for when Welsh is selected
export default function generateBreadcrumbs(links, locale, t) {
  // Use sentence case for the ratings link text
  const ratingsTextLC = t('title', {ns: 'common'}).toLowerCase();
  const ratingsText = ratingsTextLC.charAt(0).toUpperCase() + ratingsTextLC.slice(1);
  let breadcrumbs = [
    {
      'text': t('home', {ns: 'common'}),
      'url': `https://www.food.gov.uk/${locale === 'cy' ? 'cy' : ''}`
    },
    {
      'text': ratingsText,
      'url': locale === 'cy' ? '/cy' : '/',
    }
  ];

  const formattedLinks = links.map(link => {
    return {
      'text': link.text,
      'url': link.url ? locale === 'cy' ? `/cy${link.url}` : link.url : null,
    }
  })

  breadcrumbs = breadcrumbs.concat(formattedLinks);
  return {
    items: breadcrumbs,
    expanded: false,
  }
}
