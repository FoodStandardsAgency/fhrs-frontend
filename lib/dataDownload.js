// Generate the URI for the download-data api
function generateDataUri(selectType, element, uri) {
  let newUri;
  const value = element.value;
  const params = new URLSearchParams(uri);
  if (selectType === 'number_of_results') {
    if (value === 'all') {
      params.delete('pageSize');
    } else {
      params.append('pageSize', value);
    }
    newUri = params.toString().replaceAll('%2F', '/').replaceAll('%3F', '?');
  } else if (selectType === 'format') {
    if (value === 'xml') {
      newUri = uri.replace('json', 'xml');
    } else {
      newUri = uri.replace('xml', 'json');
    }
  }
  return newUri;
}

// Populate the data download component
function getSelectContent(dataUri, translations, perPage = null) {
  return {
    title: translations.download_data,
    number_of_results: perPage ? {
      title: translations.number_of_results,
      id: 'number-of-results-select',
      options: [
        {
          text: perPage.current + ` ${translations.results}`,
          value: perPage.current,
        },
        {
          text: translations.all,
          value: 'all',
        },
      ],
    } : null,
    format: {
      title: translations.format,
      id: 'format-select',
      options: [
        {
          text: 'JSON',
          value: 'json',
        },
        {
          text: 'XML',
          value: 'xml',
        },
      ],
    },
    results: translations.results,
    download: translations.download,
    download_link: dataUri,
  };
}


export {generateDataUri, getSelectContent};