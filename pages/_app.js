import '../styles/globals.css'
import { SearchContext } from "../context/searchContext.js";
import 'fsa-pattern-library-assets/dist/main.css';
import { appWithTranslation } from 'next-i18next';

function FhrsApp({ Component, pageProps }) {
  return <SearchContext.Provider><Component {...pageProps} /></SearchContext.Provider>
}

export default appWithTranslation(FhrsApp);
