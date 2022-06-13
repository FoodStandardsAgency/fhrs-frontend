import '../styles/globals.css'
import { SearchContext } from "../context/searchContext.js";
import 'fsa-pattern-library-assets/dist/main.css';

function FhrsApp({ Component, pageProps }) {
  return <SearchContext.Provider><Component {...pageProps} /></SearchContext.Provider>
}

export default FhrsApp;
