import localAuthority from '@components/components/fhrs/LocalAuthority/localAuthority.html.twig';
import TwigTemplate from '../../lib/parse.js';

function LocalAuthority(props) {
   const business = props.business;
   const translations = props.translations;
   const logo = props.logo;

   // Get local authority website domain only
   const website_url = business.LocalAuthorityWebSite;
   let domain = new URL(website_url);
   domain = domain.hostname;

   const laData = {
     local_authority: translations.la_section_title,
     name_title: translations.la_name_label,
     name_content: business.LocalAuthorityName,
     website_title: translations.la_website_label,
     website_url: website_url,
     website_label: domain,
     email_title: translations.la_email_label,
     email_address: business.LocalAuthorityEmailAddress.trim() ? business.LocalAuthorityEmailAddress : '',
     logo_url: logo,
     logo_alt: `${business.LocalAuthorityName} logo`,
     opens_in_new_tab_label: translations.opens_in_new_tab_label,
   }
   return(
     <>
       <TwigTemplate template={localAuthority} values={laData} attribs={[]}/>
     </>
   )
}

export default LocalAuthority;