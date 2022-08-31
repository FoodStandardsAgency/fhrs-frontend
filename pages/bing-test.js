import PageWrapper from '../components/layout/PageWrapper';
import BingMapsReact from "bingmaps-react";

export async function getStaticProps(context) {
  const res = await fetch(process.env.FSA_MAIN_BASE_URL + (context.locale === 'cy' ? '/cy' : '') + '/api/menus');
  const menus = await res.json();
  return {
    props: {
      menus: menus,
      locale: context.locale,
      bing_key: process.env.NEXT_PUBLIC_BING_MAPS_KEY,
    },
    revalidate: 21600,
  }
}

function BingTest({bing_key}) {
  return (<div style={{width:"1000px", height:"1000px"}}>
    <BingMapsReact 
      bingMapsKey={bing_key} 
      mapOptions={{
        navigationBarMode: "square",
      }}
      width="500px"
      viewOptions={{
        center: { latitude: 42.360081, longitude: -71.058884 },
        mapTypeId: "grayscale",
      }}
    /></div>
  )
  
}

export default PageWrapper(BingTest);
