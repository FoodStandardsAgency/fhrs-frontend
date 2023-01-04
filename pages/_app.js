import 'fsa-pattern-library-assets/dist/main.css';
import {appWithTranslation} from 'next-i18next';
import {HistoryProvider} from '../context/History'
import Head from 'next/head'
import "../components/business-table.css";
import { useEffect } from 'react'
import { useRouter } from 'next/router';


function FhrsApp({Component, pageProps}) {
  const router = useRouter()

  useEffect(() => {
    // Some kind of weirdness is preventing azure giving a full URL in the header.
    // Force one in.
    const handleStop = (url) => {
      const lang = document.querySelectorAll('.header__language a');
      lang.forEach((a) => {
        let href = a.getAttribute('href');
        if (typeof window === 'object' && window.location?.search.length) {
          href = href.split('?')[0] + window.location.search;
        }
        a.setAttribute('href', href);
      });
      console.log(url);
      const q = new URLSearchParams(window.location.search);  

      const ps = document.querySelector('#number-of-results-text');
      const psv = parseInt(q.get('page_size'));
      if (ps && psv > 0) {
        ps.value = psv;
      }

      const p = document.querySelector('#page-no-text');
      const pv = parseInt(q.get('page'));
      if (p && pv > 0) {
        p.value = pv;
      }
    }

    router.events.on('routeChangeComplete', handleStop)

    return () => {
      router.events.off('routeChangeComplete', handleStop)
    }
  }, [router]);

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
