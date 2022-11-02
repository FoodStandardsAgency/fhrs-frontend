import { useRouter } from 'next/router'

export default function InitLanguageSwitcher(header) {
  const router = useRouter();
  const { asPath } = router;
  let path = asPath;
  if (!path.includes('?') && window?.location.search) {
    path += window?.location.search;
  }
  header.english_link = path;
  header.welsh_link = '/cy' + path;
}
