import localAuthority from '@components/components/fhrs/LocalAuthority/localAuthority.html.twig';
import TwigTemplate from '../../lib/parse.js';

function LocalAuthority(business) {
   business = business.business;
   const laData = {
     local_authority: 'Local Authority',
     name_title: 'Name',
     name_content: business.LocalAuthorityName,
     website_title: 'Website',
     website_url: business.LocalAuthorityWebSite,
     email_title: 'Email',
     email_address: business.LocalAuthorityEmailAddress,
     logo_svg: '',
   }
   return(
     <>
       <TwigTemplate template={localAuthority} values={laData} attribs={[]}/>
     </>
   )
}

export default LocalAuthority;