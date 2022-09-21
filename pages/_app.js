import 'fsa-pattern-library-assets/dist/main.css';
import '../styles/globals.css'
import {appWithTranslation} from 'next-i18next';
import {HistoryProvider} from '../context/History'
import Head from 'next/head'


function FhrsApp({Component, pageProps}) {
  const bingKey = process.env.NEXT_PUBLIC_BING_MAPS_KEY;
  return (
    <>
      <Head>
        <script src={"/main.js"} defer/>
        <script src={`https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=${bingKey}`} defer/>
      </Head>
      <HistoryProvider>
        <Component {...pageProps} />
      </HistoryProvider>
    </>
  )
}

export default appWithTranslation(FhrsApp);
