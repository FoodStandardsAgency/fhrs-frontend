import { useRouter } from 'next/router'

export default function InitLanguageSwitcher(header) {
  const router = useRouter();
  const { asPath } = router;
  console.log('router', router);
  console.log('asPath', asPath);
  header.english_link = asPath;
  header.welsh_link = '/cy' + asPath;
}