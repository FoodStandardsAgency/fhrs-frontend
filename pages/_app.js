import '../styles/globals.css'
import 'fsa-pattern-library-assets/dist/main.css';
import {appWithTranslation} from 'next-i18next';
import {HistoryProvider} from '../context/History'

function FhrsApp({Component, pageProps}) {
  const bingKey = process.env.NEXT_PUBLIC_BING_MAPS_KEY;
  return (
    <>
      <HistoryProvider>
        <Component {...pageProps} />
      </HistoryProvider>
      <script src={"/main.js"} defer/>
      <script src={`https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=${bingKey}`} defer/>
    </>
  )
}

export default appWithTranslation(FhrsApp);
