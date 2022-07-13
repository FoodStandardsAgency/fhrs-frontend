import '../styles/globals.css'
import 'fsa-pattern-library-assets/dist/main.css';
import { appWithTranslation } from 'next-i18next';
import './../components/search/Loader/Loader.css';

function FhrsApp({ Component, pageProps }) {
   return (
    <>
      <Component {...pageProps} />
      <script src={"/main.js"} defer />
    </>
  )
}

export default appWithTranslation(FhrsApp);
