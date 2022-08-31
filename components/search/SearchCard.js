import TwigTemplate from "../../lib/parse";
import formatDate from "../../lib/formatDate";
import {useEffect} from "react";
import searchCard from '@components/components/fhrs/SearchCard/searchCard.html.twig';

import {i18n, useTranslation} from "next-i18next";

function SearchCard(props) {
  const {business, locale} = props;

  useEffect(() => {
    i18n.addResourceBundle(locale, 'searchPage')
  }, [locale]);

  const {t} = useTranslation(['searchPage']);

  let formattedAddress = '';
  for (let i = 1; i <= 4; i++) {
    formattedAddress += business[`AddressLine${i}`] ? business[`AddressLine${i}`] + '<br>' : '';
  }
  formattedAddress = formattedAddress.replace(/<br>$/, '');

  const date = new Date(business.RatingDate);
  const formattedDate = formatDate(date, t, locale);

  const establishmentContent = {
    business_name: business.BusinessName,
    business_link: `${locale === 'cy' ? '/cy' : ''}/business/${business.FHRSID.toString()}/${business.BusinessName.replace(/[^a-z0-9 -]/gi, '').replace(/\s+/g, '-').toLowerCase()}`,
    private: !formattedAddress,
    address: formattedAddress,
    post_code: business.PostCode,
    last_inspected: t('last_inspected'),
    rating_date: formattedDate,
    rating: business.RatingValue.toString().replace(' ', ''),
    private_address: t('private_address'),
    registered_with: t('registered_with'),
    local_authority_name: business.LocalAuthorityName,
    local_authority: t('local_authority'),
    business_say: t('business_say'),
    business_appeal: !!business.RightToReply,
    fhis: business.SchemeType === 'FHIS',
    wales_business: business.inWales,
    welsh: locale === 'cy',
    pin_number: business.mapDetails ? business.mapDetails.pinNumber : null,
    latitude: business.mapDetails ? business.mapDetails.latitude : null,
    longitude: business.mapDetails ? business.mapDetails.longitude : null,
  }

  return (
    <>
      <TwigTemplate key={`${business.FHRSID.toString()}`} template={searchCard}
                    values={establishmentContent} attribs={[]}/>
    </>
  )
}

export default SearchCard;
