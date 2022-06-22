import header from '@components/components/general/Header/header.html.twig';
import footer from '@components/components/general/Footer/footer.html.twig';
import TwigTemplate from '../../lib/parse.js';
import InitLanguageSwitcher from '../../lib/languageSwitcher';

export async function getStaticProps (context) {
  const res = await fetch(process.env.FSA_MAIN_BASE_URL + (context.locale == 'cy' ? '/cy' : '') + '/api/menus');
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

export default function PageWrapper(Component) {
  function PageWrapper(props) {
  InitLanguageSwitcher(props.menus.header);
    return (
      <>
        <TwigTemplate template={header} values={props.menus.header} attribs={[]}/>
        <Component {...props} />
        <TwigTemplate template={footer} values={props.menus.footer} attribs={[]}/>
      </>
    );
  }
  PageWrapper.displayName = `PageWrapper(${Component.displayName || Component.name}`;
  return PageWrapper;
}


