import ratingsSearchBox from '@components/components/fhrs/RatingsSearchBox/ratingsSearchBox.html.twig';
import TwigTemplate from '../../lib/parse.js';
import api from "../../lib/api";
import {useEffect, useState} from "react";
import {useTranslation} from "next-i18next";
import { i18n } from 'next-i18next'

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

function SearchBoxMain(props) {
  const {locale, query, submit, submitType} = props;
  const [options, setOptions] = useState({});
  const searchFields = [
    {
      apiIndex: 'businessTypes',
      fieldName: 'BusinessTypeName',
      fieldKey: 'BusinessTypeId',
    },
    {
      apiIndex: 'countries',
      fieldName: 'name',
      fieldKey: 'id',
    },
    {
      apiIndex: 'ratings',
      fieldName: 'ratingName',
      fieldKey: 'ratingKeyName',
    },
  ];
  useEffect(() => {
    async function getSearchBoxOptions(fields, locale) {
      console.log('use', locale);
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
      setOptions(searchBoxOptions);
    }
    i18n.addResourceBundle(locale, 'ratingsSearchBox')
    getSearchBoxOptions(searchFields, locale)
  }, []);

  const {
    "business-name-search": business_name_search,
    "address-search": address_search,
    business_type,
    hygiene_rating,
    hygiene_rating_or_status,
    country_or_la,
    hygiene_status,
    range,
  } = query;

  let defaultRating = null;
  if (hygiene_rating_or_status) {
    defaultRating = hygiene_rating_or_status === 'status' ? hygiene_status : hygiene_rating;
  }

  const {t} = useTranslation(['ratingsSearchBox']);

  const searchBoxContent = {
    title: t('title'),
    business_name_label: t('business_name_label'),
    business_name_value: business_name_search ? business_name_search : '',
    address_search_label: t('address_search_label'),
    address_search_value: address_search ? address_search : '',
    location_label: t('location_label'),
    blocked_location_label: t('blocked_location_label'),
    search_map_results_label: t('search_map_results_label'),
    hide_map_results_label: t('hide_map_results_label'),
    more_options_label: t('more_options_label'),
    fewer_options_label: t('fewer_options_label'),
    local_authority_link: {
      url: '#',
      title: t('local_authority_link_title'),
    },
    submit_button_label: t('submit_button_label'),
    submit_button_url: submit,
    submit_button_type: submitType,
    left: [
      {
        type: "dropdown",
        title: t('business_type_label'),
        name: "business_type",
        id: "business_type",
        options: options.businessTypes,
        default: business_type ? business_type : 'all',
      },
      {
        type: "fieldset",
        legend: t('hygiene_rating_header'),
        fields: [
          {
            type: "single-radio",
            title: t('hygiene_rating_header'),
            name: "hygiene_rating_or_status",
            value: "rating",
            label: t('hygiene_rating_label'),
            id: "rating",
            default: hygiene_rating_or_status ? hygiene_rating_or_status : '',
          },
          {
            type: "dropdown",
            hide_label: true,
            title: t('hygiene_rating_header'),
            name: "hygiene_rating",
            id: "hygiene_rating",
            options: options.ratingsFHRS,
            default: defaultRating ? defaultRating : 'all',
          },
        ],
      },
      {
        type: "dropdown",
        title: t('range_label'),
        name: "range",
        id: "range",
        options: [
          {
            text: t('range_equal'),
            value: "equal"
          },
          {
            text: t('range_greater_than'),
            value: "gtoe"
          },
          {
            text: t('range_less_than'),
            value: "ltoe"
          }
        ],
        default: range ? range : "equal",
      },
    ],
    right: [
      {
        type: "dropdown",
        title: t('country_or_la_label'),
        name: "country_or_la",
        id: "country_or_la",
        options: options.countries,
        default: country_or_la ? country_or_la : 'all',
      },
      {
        type: "fieldset",
        legend: t('hygiene_status_header'),
        fields: [
          {
            type: "single-radio",
            name: "hygiene_rating_or_status",
            title: t('hygiene_status_header'),
            value: "status",
            label: t('hygiene_status_label'),
            id: "status",
            default: hygiene_rating_or_status ? hygiene_rating_or_status : '',
          },
          {
            type: "dropdown",
            title: t('hygiene_status_header'),
            name: "hygiene_status",
            id: "hygiene-status",
            hide_label: true,
            options: options.ratingsFHIS,
            default: hygiene_status ? hygiene_status : '',
          }
        ]
      }
    ]
  }
  return (
    <>
      <TwigTemplate template={ratingsSearchBox} values={searchBoxContent} attribs={[]}/>
    </>
  )
}

export default SearchBoxMain;