import 'fsa-pattern-library-assets/dist/main.css';
import {appWithTranslation} from 'next-i18next';
import {HistoryProvider} from '../context/History'
import Head from 'next/head'
import "../components/business-table.css";


function FhrsApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <script src={"/main.js"} defer/>
      </Head>
      <HistoryProvider>
        <Component {...pageProps} />
      </HistoryProvider>
    </>
  )
}

export default appWithTranslation(FhrsApp);
