import TwigTemplate from "../../lib/parse";
import formatDate from "../../lib/formatDate";
import {useEffect} from "react";
import searchCard from '@components/components/fhrs/SearchCard/searchCard.html.twig';

import {i18n, useTranslation} from "next-i18next";

function SearchCard(props) {
  const {business, locale, distance} = props;

  useEffect(() => {
    i18n.addResourceBundle(locale, 'searchPage')
  }, [locale]);

  const {t} = useTranslation(['searchPage', 'common']);

  let formattedAddress = '';
  for (let i = 1; i <= 4; i++) {
    formattedAddress += business[`AddressLine${i}`] ? business[`AddressLine${i}`] + '<br>' : '';
  }
  formattedAddress = formattedAddress.replace(/<br>$/, '');

  const date = new Date(business.RatingDate);
  const formattedDate = formatDate(date, t, locale);

  const query = window.location.search;
  const params = new URLSearchParams(query);

  const establishmentContent = {
    business_name: business.BusinessName,
    business_link: `${locale === 'cy' ? '/cy' : ''}/business/${business.FHRSID.toString()}/${business.BusinessName.replace(/[^a-z0-9 -]/gi, '').replace(/\s+/g, '-').toLowerCase()}`,
    private: !formattedAddress,
    address: formattedAddress,
    post_code: business.PostCode,
    last_inspected: t('last_inspected'),
    rating_date: formattedDate,
    rating: business.RatingValue === 'Pass and Eat Safe' ? 'PassEatSafe' : business.RatingValue.toString().replace(' ', ''),
    private_address: t('private_address'),
    registered_with: t('registered_with'),
    local_authority_name: business.LocalAuthorityName,
    local_authority: t('local_authority'),
    business_say: t('business_say'),
    business_appeal: !!business.RightToReply,
    fhis: business.SchemeType === 'FHIS',
    wales_business: business.inWales,
    welsh: locale === 'cy',
    pin_number: business.mapDetails && business.mapDetails.pinNumber < 11 ? business.mapDetails.pinNumber : null,
    pin_link: "#",
    latitude: business.mapDetails ? business.mapDetails.latitude : null,
    longitude: business.mapDetails ? business.mapDetails.longitude : null,
    show_pin: params.get('init_map_state'),
    miles_away: t('miles_away'),
    distance: distance && business.Distance ? business.Distance.toFixed(1) : null,
  }

  if (business.NewRatingPending) {
    const statusDetails = {
      status_summary: t('ss_recently_inspected', {ns: 'common'}),
      status_description: t('sd_recently_inspected', {ns: 'common'}),
    }
    Object.assign(establishmentContent, statusDetails);
  }

  return (
    <>
      <TwigTemplate key={`${business.FHRSID.toString()}`} template={searchCard}
                    values={establishmentContent} attribs={[]}/>
    </>
  )
}

export default SearchCard;
