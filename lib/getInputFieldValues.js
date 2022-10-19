import api from "./api";

async function getFieldData(apiIndex, fieldName, fieldKey, locale, fhis = false) {
  let fieldData = [];
  try {
    const data = await api.setLanguage(locale === 'cy' ? 'cy-GB' : '').setType(apiIndex).getResults();
    let options = [];
    if (apiIndex === 'ratingOperators') {
      options = data.ratingOperator;
    } else {
      options = data[apiIndex];
    }
    Object.keys(options).map(function (key) {
      if (apiIndex === 'ratings' && (fhis) && options[key].schemeTypeId === 1) {
        return;
      } else if (apiIndex === 'ratings' && (!fhis) && options[key].schemeTypeId === 2) {
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
    if (apiIndex !== 'businessTypes' && apiIndex !== 'ratingOperators') {
      fieldData.unshift({
        text: locale === 'cy' ? 'Pob un' : 'All',
        value: 'all',
      })
    }
  } catch (error) {
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
    } else {
      searchBoxOptions[apiIndex] = await getFieldData(apiIndex, fieldName, fieldKey, locale);
    }
  }
  return searchBoxOptions;
}


// Get translations of the business types as the API doesn't do this automatically
async function getTranslatedBusinessType(businessType, locale) {
  if (locale !== 'cy') {
    return businessType;
  }
  const businessTypes = await api.setLanguage('en-GB').setType('businessTypes').getResults();
  const translatedBusinessTypes = await api.setLanguage(locale === 'cy' ? 'cy-GB' : '').setType('businessTypes').getResults();

  let id;
  businessTypes.businessTypes.forEach((type) => {
    if (type.BusinessTypeName === businessType) {
      id = type.BusinessTypeId;
    }
  });
  let businessTypeName;
  translatedBusinessTypes.businessTypes.forEach((type) => {
    if (type.BusinessTypeId === id) {
      businessTypeName = type.BusinessTypeName;
    }
  });
  return businessTypeName;
}

export {getSearchBoxOptions, getTranslatedBusinessType};
