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
  let content = {
    title: translations.download_data,
    results: translations.results,
    download: translations.download,
    download_link: dataUri,
  }
  if (perPage) {
    //const uri = dataUri ? dataUri : query;
    const q = new URLSearchParams(dataUri); 
    content.errorMessage = 'Error';
    content.number_of_results = {
      title: translations.number_of_results,
      id: 'number-of-results-text',
      defaultValue: perPage ? perPage.current : '', 
      name: 'pageSize',
    };
    content.page_no = {
      title: translations.page_number,
      id: 'page-no-text',
      defaultValue: q.get('pageNumber') ? q.get('pageNumber') : q.get('page') ? q.get('page') : 1,
      name: 'pageNumber',
    };
  }
  content.format = {
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
  };
  return content;
}


export {generateDataUri, getSelectContent};
