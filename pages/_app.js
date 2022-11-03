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
    const handleStop = () => {
      const lang = document.querySelectorAll('.header__language a');
      lang.forEach((a) => {
        let href = a.getAttribute('href');
        if (!href.includes('?') && typeof window === 'object' && window.location?.search.length) {
          href += window.location.search;
        }
        a.setAttribute('href', href);
      });
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
