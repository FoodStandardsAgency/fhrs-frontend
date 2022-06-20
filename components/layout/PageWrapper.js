import header from '@components/components/general/Header/header.html.twig';
import footer from '@components/components/general/Footer/footer.html.twig';
import TwigTemplate from '../../lib/parse.js';

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

const PageWrapper = (Component) =>  {
  return function PageWrapperInner(props) {
    return (
    <>
      <TwigTemplate template={header} values={props.menus.header} attribs={[]}/>
      <Component {...props} />
      <TwigTemplate template={footer} values={props.menus.footer} attribs={[]}/>
    </>)
  }
}

export default PageWrapper;

