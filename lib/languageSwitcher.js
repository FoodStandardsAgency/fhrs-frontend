import { useRouter } from 'next/router'

export default function InitLanguageSwitcher(header) {
  const router = useRouter();
  const { asPath } = router
  header.english_link = asPath;
  header.welsh_link = '/cy' + asPath;
}