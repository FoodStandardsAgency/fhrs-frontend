import TwigTemplate from "../../lib/parse";
import resultsPerPage from '@components/components/search/ResultsPerPage/resultsPerPage.html.twig';
import {useEffect, useState} from "react";
import {useTranslation} from "next-i18next";
import { i18n } from 'next-i18next'
import {useRouter} from "next/router";
import updateMultiParams from "../../lib/updateMultiParams";

function SearchResultsPerPage(props) {
  const { locale } = props;
  const { query, isReady } = useRouter();
  console.log("props", props);
  const { page_size } = query;
  useEffect(() => {
    if(!isReady) return;
    const resultsSelect = document.querySelector('.results-per-page__select');
    resultsSelect.addEventListener('change', (e) => {
      e.preventDefault();
      updateMultiParams([{name: 'page_size', value: resultsSelect.value}, {name: 'init_map_state', value: props.mapState.current === true ? true : ''}]);
    });
    i18n.addResourceBundle(locale, 'searchResultsPerPage')
  }, [isReady]);

  const {t} = useTranslation(['searchResultsPerPage']);

  const resultsPerPageContent = {
    results_per_page: t('results_per_page'),
    options: [
      {
        value: '10',
        text: '10',
      },
      {
        value: '25',
        text: '25',
      },
      {
        value: '50',
        text: '50',
      }
    ],
    default: props.perPage.current,
  }

  return (
    <>
      <TwigTemplate template={resultsPerPage} values={resultsPerPageContent} attribs={[]}/>
    </>
  )
}

export default SearchResultsPerPage;
