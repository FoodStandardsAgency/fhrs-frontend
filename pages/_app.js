import '../styles/globals.css'
import {SearchContext} from "../context/searchContext.js";
import 'fsa-pattern-library-assets/dist/main.css';

function MyApp({ Component, pageProps }) {
  return <SearchContext.Provider><Component {...pageProps} /></SearchContext.Provider>
}

export default MyApp
