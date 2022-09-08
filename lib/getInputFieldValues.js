import api from "./api";

async function getFieldData(apiIndex, fieldName, fieldKey, locale, fhis = false) {
  let fieldData = [];
  try {
    const data = await api.setLanguage(locale === 'cy' ? 'cy-GB' : '').setType(apiIndex).getResults();
    let options = [];
    if (apiIndex === 'ratingOperators') {
      options = data.ratingOperator;
    }
    else {
      options = data[apiIndex];
    }
    Object.keys(options).map(function (key) {
      if (apiIndex === 'ratings' && (fhis) && options[key].schemeTypeId === 1) {
        return;
      }
      else if (apiIndex === 'ratings' && (!fhis) && options[key].schemeTypeId === 2) {
        return;
      }
      const name = options[key][fieldName];
      const value = options[key][fieldKey]
      // For the country and authority indexes, include the scheme type in the value
      if (apiIndex === 'countries' || apiIndex === 'authorities') {
        fieldData.push({
          text: name,
          value: `${value}-${options[key][fieldKey] === 'Scotland' || options[key]['SchemeType'] === 2 ? 'fhis' : 'fhrs'}`,
        });
      } else {
        fieldData.push({
          text: name,
          value: value,
        });
      }
    });
    if (apiIndex !== 'businessTypes') {
      fieldData.unshift({
        text: locale === 'cy' ? 'Pob un' : 'All',
        value: 'all',
      })
    }
  }
  catch(error) {
    // @TODO better handling for 403s from API
    console.log(error);
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
