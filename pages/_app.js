import '../styles/globals.css'
import 'fsa-pattern-library-assets/dist/main.css';
import { SearchContext } from "../context/searchContext.js";
import { appWithTranslation } from 'next-i18next';
import Script from 'next/script';

function FhrsApp({ Component, pageProps }) {
   return (
    <>
      <SearchContext.Provider>
        <Component {...pageProps} />
      </SearchContext.Provider>
      <script src={"https://raw.githubusercontent.com/FoodStandardsAgency/fsa-pattern-library-assets/develop/dist/main.js"} />
    </>
  )
}

export default appWithTranslation(FhrsApp);
