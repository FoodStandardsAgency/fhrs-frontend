import ratingsSearchBox from '@components/components/fhrs/RatingsSearchBox/ratingsSearchBox.html.twig';
import TwigTemplate from '../../lib/parse.js';
import {useEffect, useState} from "react";
import {useTranslation} from "next-i18next";
import { i18n } from 'next-i18next'

function SearchBoxMain(props) {
  const {locale, query, submit, submitType, pageTitle, options, localAuthority, showMap, isHomepage} = props;
  const isLocalAuthoritySearch = !!localAuthority;
  let localAuthorityId = null;
  let isScottishLocalAuthority = false;
  if (localAuthority) {
    localAuthorityId = localAuthority.LocalAuthorityId.toString();
    isScottishLocalAuthority = localAuthority.RegionName === 'Scotland';
  }
  useEffect(() => {
    const form = document.querySelector('.ratings-search-box');
    const submit = form.querySelector('input[type="submit"]');
    const mapToggle = form.querySelector('#map-toggle');
    submit.addEventListener('click', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const searchParams = new URLSearchParams();
      for (const entry of formData.entries()) {
        if (entry[1]) {
          searchParams.append(entry[0], entry[1]);
        }
      }
      const mapState = mapToggle ? mapToggle.getAttribute('aria-checked') === 'true' : false;
      mapState ? searchParams.append('init_map_state', true) : null;
      const updatedUrl = `${locale === 'cy' ? '/cy' : ''}/${isLocalAuthoritySearch ? 'authority-search-landing/' + localAuthorityId : 'business-search'}${searchParams ? '?' + searchParams : ''}`;
      window.location.href = updatedUrl;
    });
    i18n.addResourceBundle(locale, 'ratingsSearchBox')
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
    init_map_state,
  } = query;

  let defaultRating = null;
  if (hygiene_rating_or_status) {
    defaultRating = hygiene_rating_or_status === 'status' ? hygiene_status : hygiene_rating;
  }

  const {t} = useTranslation(['ratingsSearchBox']);
  let searchAllData = {};
  let contentLeft = [
    {
      type: "dropdown",
      title: t('business_type_label'),
      name: "business_type",
      id: "business_type",
      options: options.businessTypes,
      default: business_type ? business_type : 'all',
    },
  ];
  let contentRight = [];
  if (isLocalAuthoritySearch) {
    searchAllData = {
      url: `${locale === 'cy' ? '/cy' : ''}/business-search`,
      title: t('search_all_data_label'),
    };
    if (isScottishLocalAuthority) {
      contentRight = contentRight.concat([
        {
          type: "dropdown",
          title: t('hygiene_status_header'),
          name: "hygiene_status",
          id: "hygiene-status",
          options: options.ratingsFHIS,
          default: hygiene_status ? hygiene_status : '',
        }
      ]);
    }
    else {
      contentRight = contentRight.concat([
        {
          type: "dropdown",
          title: t('hygiene_rating_header'),
          name: "hygiene_rating",
          id: "hygiene_rating",
          options: options.ratingsFHRS,
          default: defaultRating ? defaultRating : 'all',
        },
      ]);
    }
  }
  else {
    contentLeft = contentLeft.concat([
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
    ]);
    contentRight = contentRight.concat([
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
    ]);
  }

  const searchBoxContent = {
    title: pageTitle,
    title_prefix: isLocalAuthoritySearch ? t('search_the') : '',
    title_suffix: isLocalAuthoritySearch ? t('area') : '',
    subtitle_prefix: isLocalAuthoritySearch ? t('provided_by') : '',
    council_name: isLocalAuthoritySearch ? localAuthority.Name : '',
    area: isLocalAuthoritySearch ? localAuthority.Name : '',
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
    welsh: locale === 'cy',
    search_all_data_link: searchAllData,
    local_authority_link: {
      url: '#',
      title: isLocalAuthoritySearch ? t('search_a_different_area') : t('local_authority_link_title'),
    },
    submit_button_label: t('submit_button_label'),
    submit_button_url: submit,
    submit_button_type: submitType,
    left: contentLeft,
    right: contentRight,
    show_map: showMap,
    initial_map_state: init_map_state,
    is_homepage: isHomepage,
  }
  return (
    <>
      <TwigTemplate template={ratingsSearchBox} values={searchBoxContent} attribs={[]}/>
    </>
  )
}

export default SearchBoxMain;