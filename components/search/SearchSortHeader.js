import TwigTemplate from "../../lib/parse";
import ContainerTwoCol from "../layout/ContainerTwoCol";
import showing from '@components/components/search/Showing/showing.html.twig';
import sortBy from '@components/components/search/SortBy/sortBy.html.twig';
import {useEffect, useState} from "react";
import {useTranslation} from "next-i18next";
import { i18n } from 'next-i18next'
import {useRouter} from "next/router";
import updateParams from "../../lib/updateParams";

function getDisplayedResults(totalResults, pageSize, pageNumber) {
  const offset = (pageNumber - 1) * pageSize + 1;
  let last = offset + pageSize - 1;
  if (last > totalResults) {
    last = totalResults;
  }
  return `${offset} - ${last}`;
}

function getSortOptions(options, location = false) {
  let sortOptions = [];
  options.forEach(option => {
    if (!location && option.sortOptionName === 'Distance') {
      return;
    }
    sortOptions.push({
      text: option.sortOptionName,
      value: option.sortOptionKey,
    });
  });
  return sortOptions;
}

function SearchSortHeader(props) {
  const { locale, resultsMeta, sortOptions } = props;
  const { query, isReady } = useRouter();

  const [sortType, setSortType] = useState({});

  const { sort, latitude, longitude } = query;
  useEffect(() => {
    if(!isReady) return;
    const sortSelect = document.querySelector('.sort__select');
    sortSelect.addEventListener('change', (e) => {
      e.preventDefault();
      updateParams('sort', sortSelect.value);
      location.reload();
    });
    setSortType(sort);
    i18n.addResourceBundle(locale, 'searchSortHeader')
  }, [isReady]);

  const {t} = useTranslation(['searchSortHeader']);

  const showingContent = {
    showing: t('showing'),
    of: t('of'),
    results: t('results'),
    displayed_results: getDisplayedResults(resultsMeta.totalResults, resultsMeta.pageSize, resultsMeta.pageNumber),
    total_results: resultsMeta.totalResults.toLocaleString(),
  }

  const locationSearch = latitude && longitude ? true : false;
  const sortByContent = {
    sort_by: t('sort_by'),
    options: getSortOptions(sortOptions, locationSearch),
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
