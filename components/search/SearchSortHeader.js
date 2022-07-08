import TwigTemplate from "../../lib/parse";
import ContainerTwoCol from "../layout/ContainerTwoCol";
import showing from '@components/components/search/Showing/showing.html.twig';
import sortBy from '@components/components/search/SortBy/sortBy.html.twig';
import {useEffect, useState} from "react";
import {useTranslation} from "next-i18next";
import { i18n } from 'next-i18next'
import {useRouter} from "next/router";
import api from "../../lib/api";
import updateParams from "../../lib/updateParams";

function getDisplayedResults(totalResults, pageSize, pageNumber) {
  const offset = (pageNumber - 1) * pageSize + 1;
  const last = offset + pageSize - 1;
  return `${offset} - ${last}`;
}

function SearchSortHeader(props) {
  const { locale, resultsMeta } = props;
  const { query, isReady } = useRouter();

  const [sortOptions, setSortOptions] = useState({});
  const [sortType, setSortType] = useState({});

  useEffect(() => {
    if(!isReady) return;
    const { sort } = query;
    const sortSelect = document.querySelector('.sort__select');
    sortSelect.addEventListener('change', (e) => {
      e.preventDefault();
      updateParams('sort', sortSelect.value);
      location.reload();
    });
    async function getSortOptions() {
      const res = await api.setLanguage(locale === 'cy' ? 'cy-GB' : '').setType('sortOptions').getResults();
      let sortOptions = [];
      res.sortOptions.forEach(option => {
        sortOptions.push({
          text: option.sortOptionName,
          value: option.sortOptionKey,
        });
      });
      setSortOptions(sortOptions);
    }
    getSortOptions();
    setSortType(sort);
    i18n.addResourceBundle(locale, 'searchSortHeader')
  }, [isReady]);

  const {t} = useTranslation(['searchSortHeader']);

  const showingContent = {
    showing: t('showing'),
    of: t('of'),
    results: t('results'),
    displayed_results: getDisplayedResults(resultsMeta.totalResults, resultsMeta.pageSize, resultsMeta.pageNumber),
    total_results: resultsMeta.totalResults,
  }

  const sortByContent = {
    sort_by: "Sort by",
    options: sortOptions,
    default: sortType,
  }

  return (
    <>
      <ContainerTwoCol>
        <TwigTemplate template={showing} values={showingContent} attribs={[]}/>
        <TwigTemplate template={sortBy} values={sortByContent} attribs={[]}/>
      </ContainerTwoCol>

    </>
  )
}

export default SearchSortHeader;