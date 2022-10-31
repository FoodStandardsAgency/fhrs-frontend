import TwigTemplate from "../../lib/parse";
import {useEffect} from "react";
import {useTranslation} from "next-i18next";
import pagination from '@components/components/search/Pagination/pagination.html.twig';
import { i18n } from 'next-i18next'
import updateParams from "../../lib/updateParams";

function SearchSortHeader(props) {
  const { locale, resultsMeta } = props;

  useEffect(() => {
    const paginationLinks = document.querySelectorAll('.pagination__item a');
    paginationLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        updateParams('page', link.getAttribute('data-page'));
        location.reload();
      });
    });
    i18n.addResourceBundle(locale, 'pagination')
  }, []);

  const {t} = useTranslation(['pagination']);

  const paginationContent = {
    pagination_type: "Search",
    total_pages: resultsMeta.totalPages,
    current_page: resultsMeta.pageNumber ? parseInt(resultsMeta.pageNumber, 10) : 1,
    max_visible_pages: 4,
    first_label: t('first'),
    previous_label: t('previous'),
    next_label: t('next'),
    last_label: t('last'),
  }

  return (
    <>
      <TwigTemplate template={pagination} values={paginationContent} attribs={[]}/>
    </>
  )
}

export default SearchSortHeader;