import api from "./api";

async function getFieldData(apiIndex, fieldName, fieldKey, locale, fhis = false) {
  const data = await api.setLanguage(locale === 'cy' ? 'cy-GB' : '').setType(apiIndex).getResults();
  const options = data[apiIndex];
  let fieldData = [];
  Object.keys(options).map(function (key) {
    if (apiIndex === 'ratings' && (fhis) && options[key].schemeTypeId === 1) {
      return;
    }
    else if (apiIndex === 'ratings' && (!fhis) && options[key].schemeTypeId === 2) {
      return;
    }
    const name = options[key][fieldName];
    const value = options[key][fieldKey]
    fieldData.push({
      text: name,
      value: value,
    });
  });
  if (apiIndex !== 'businessTypes') {
    fieldData.unshift({
      text: locale === 'cy' ? 'Pob un' : 'All',
      value: 'all',
    })
  }
  return fieldData;
}

async function getSearchBoxOptions(fields, locale) {
  let searchBoxOptions = {};
  for (const field of fields) {
    const {apiIndex, fieldName, fieldKey} = field;
    if (apiIndex === 'ratings') {
      searchBoxOptions[`${apiIndex}FHRS`] = await getFieldData(apiIndex, fieldName, fieldKey, locale);
      searchBoxOptions[`${apiIndex}FHIS`] = await getFieldData(apiIndex, fieldName, fieldKey, locale, true);
    }
    else {
      searchBoxOptions[apiIndex] = await getFieldData(apiIndex, fieldName, fieldKey, locale);
    }
  }
  return searchBoxOptions;
}

export {getSearchBoxOptions};