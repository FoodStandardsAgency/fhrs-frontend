import header from '@components/components/general/Header/header.html.twig';
import footer from '@components/components/general/Footer/footer.html.twig';
import TwigTemplate from '../lib/parse.js';
import api from '../lib/api.js';

export async function getStaticProps () {
  const res = await fetch(process.env.FSA_MAIN_BASE_URL + '/api/menus');
  const menus = await res.json();
  if (!res.ok) {
    throw new Error(`Failed to fetch menus, received status ${res.status}`)
  }
  return {
    props: {
      menus,
    },
    revalidate: 21600,
  };
}

function Home({menus}) {
// Test data for the ratings api
//   const data = async () => {
//     // Regions
//     console.log('Regions');
//     console.log("pages", await api.setType('regions', {pageNumber: 2, pageSize: 5}).getResults());
//     console.log("basicPages", await api.setType('regions', {pageNumber: 2, pageSize: 5, basic: true}).getResults());
//     console.log("basic", await api.setType('regions', {basic: true}).getResults());
//     console.log("all", await api.setType('regions').getResults());
//     console.log("single", await api.setType('regions', {id: 5}).getResults());
//     // Authorities
//     console.log('Authorities');
//     console.log("pages", await api.setType('authorities', {pageNumber: 2, pageSize: 5}).getResults());
//     console.log("basicPages", await api.setType('authorities', {pageNumber: 2, pageSize: 5, basic: true}).getResults());
//     console.log("basic", await api.setType('authorities', {basic: true}).getResults());
//     console.log("all", await api.setType('authorities').getResults());
//     console.log("single", await api.setType('authorities', {id: 5}).getResults());
//     // Business Types
//     console.log('Business Types');
//     console.log("pages", await api.setType('businessTypes', {pageNumber: 2, pageSize: 5}).getResults());
//     console.log("basicPages", await api.setType('businessTypes', {pageNumber: 2, pageSize: 5, basic: true}).getResults());
//     console.log("basic", await api.setType('businessTypes', {basic: true}).getResults());
//     console.log("all", await api.setType('businessTypes').getResults());
//     console.log("single", await api.setType('businessTypes', {id: 5}).getResults());
//     // Countries
//     console.log('Countries');
//     console.log("pages", await api.setType('countries', {pageNumber: 2, pageSize: 5}).getResults());
//     console.log("basicPages", await api.setType('countries', {pageNumber: 2, pageSize: 5, basic: true}).getResults());
//     console.log("basic", await api.setType('countries', {basic: true}).getResults());
//     console.log("all", await api.setType('countries').getResults());
//     console.log("single", await api.setType('countries', {id: 2}).getResults());
//     // Establishments
//     console.log('Establishments');
//     console.log("basicPages", await api.setType('establishments', {pageNumber: 2, pageSize: 5, basic: true}).getResults());
//     console.log("basic", await api.setType('establishments', {basic: true}).getResults());
//     console.log("single", await api.setType('establishments', {id: 4}).getResults());
//     console.log("withParams", await api.setType('establishments', {}, {name: 'mcdonalds', ratingKey: '1'}).getResults());
//     // Scheme types
//     console.log('Scheme types');
//     console.log("all", await api.setType('schemetypes').getResults());
//     // Sort Options
//     console.log('Sort options');
//     console.log("all", await api.setType('sortoptions').getResults());
//     // Score descriptors
//     console.log('Score descriptors');
//     console.log("all", await api.setType('scoredescriptors', {establishmentId : '4'}).getResults());
//     // Ratings
//     console.log('Ratings');
//     console.log("all", await api.setType('ratings').getResults());
//     // Ratings operators
//     console.log('Rating operators');
//     console.log("all", await api.setType('ratingoperators').getResults());
//   }
  return (
    <div>
      <TwigTemplate template={header} values={menus.header} attribs={[]} />
      <TwigTemplate template={footer} values={menus.footer} attribs={[]} />
    </div>
  )
}

export default Home;
