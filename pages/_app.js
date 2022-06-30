import '../styles/globals.css'
import { SearchContext } from "../context/searchContext.js";
import 'fsa-pattern-library-assets/dist/main.css';
import { appWithTranslation } from 'next-i18next';
import Script from 'next/script';

function FhrsApp({ Component, pageProps }) {
   return (
    <>
      <SearchContext.Provider>
        <Component {...pageProps} />
      </SearchContext.Provider>
      <Script src={"/fsa-pattern-library-assets/dist/main.js"}/>
    </>
  )
}

export default appWithTranslation(FhrsApp);
