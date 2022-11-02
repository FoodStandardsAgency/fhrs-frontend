import { useRouter } from 'next/router'

export default function InitLanguageSwitcher(header) {
  const router = useRouter();
  const { asPath } = router;
  header.english_link = window.location.pathname + window.location.search ;
  header.welsh_link = '/cy' + window.location.pathname + window.location.search ;
}
