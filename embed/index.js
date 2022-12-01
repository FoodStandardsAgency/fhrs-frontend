import api from "../lib/api";

const parentNode = document.currentScript.parentNode;

async function component() {
  const style = document.currentScript.getAttribute('data-rating-style') ?? 1;
  const url = new URL(document.currentScript.src);
  const businessId = document.currentScript.getAttribute('data-business-id');
  let rating = document.currentScript.getAttribute('data-rating');
  let fhis = document.currentScript.getAttribute('data-fhis');
  let isWelsh = document.currentScript.getAttribute('data-welsh') === 'true';
  let walesBusiness = false;

  const element = document.createElement('div');
  const img = document.createElement('img');

  if (businessId) {
    const details = await api.setLanguage(isWelsh === 'cy' ? 'cy-GB' : '').getBusinessDetails(businessId);
    rating = details.rating.replaceAll(' ', '');
    fhis = details.scheme !== 'FHRS' ? 'true' : 'false';

    const authorities = await api.setLanguage(isWelsh === 'cy' ? 'cy-GB' : '').setType('authorities').getResults();
    const authority = authorities.authorities.filter((la) => {
      return la.LocalAuthorityIdCode === details.localAuthority;
    });
    walesBusiness = authority[0].RegionName === 'Wales';
  }

  if (businessId) {
    const details = await api.setLanguage(isWelsh === 'cy' ? 'cy-GB' : '').getBusinessDetails(businessId);
    rating = details.rating.replaceAll(' ', '');
    rating = walesBusiness && rating === 'AwaitingInspection' ? 'Empty' : rating;
    fhis = details.scheme !== 'FHRS' ? 'true' : 'false';

    const authorities = await api.setLanguage(isWelsh === 'cy' ? 'cy-GB' : '').setType('authorities').getResults();
    const authority = authorities.authorities.filter((la) => {
      return la.LocalAuthorityIdCode === details.localAuthority;
    });
    walesBusiness = authority[0].RegionName === 'Wales';
  }

  isWelsh = isWelsh || walesBusiness;
  let isText = 'Food hygiene rating is ';
  const words = {
    welsh: {
      '0': "0: Angen gwella ar frys",
      '1': "1: Angen gwella yn sylweddol",
      '2': "2: Angen gewlla",
      '3': "3: Boddhaol ar y cyfan",
      '4': "4: Da",
      '5': "5: Da iawn",
      'AwaitingInspection': "aros am arolygiad",
      'AwaitingPublication': "i'w gyhoeddi'n fuan",
      'Exempt': "wedi'i eithrio",
      'Pass': "Cynllun Gwybodaeth Hylendid Bwyd: Canlyniad yr Arolygiad yw 'Pasio",
      'PassandEatSafe': "Cynllun Gwybodaeth Hylendid Bwyd Canlyniad Arolygiad yw 'Pasio' plus 'Bwyta'n Ddiogel' gwobr",
      'empty': "aros am sgôr"
    },
    english: {
      '0': "0: Urgent improvement necessary",
      '1': "1: Major improvement necessary",
      '2': "2: Improvement necessary",
      '3': "3: Generally satisfactory",
      '4': "4: Good",
      '5': "5: Very good",
      'AwaitingInspection': "awaiting inspection",
      'AwaitingPublication': "awaiting publication",
      'Exempt': "exempt",
      'Pass': "Food Hygiene Information Scheme: Inspection result is 'Pass'",
      'PassandEatSafe': "Food Hygiene Information Scheme ‘Pass’ inspection result plus ‘Eat Safe’ award",
      'empty': "rating awaited"
    }
  };

  let widths = {
    1: '26.75rem',
    2: '30rem',
    3: '16.188rem',
    4: '7.813rem',
    5: '11.813rem'
  };

  let folder = 'fhrs';
  let extension = 'svg';
  if (isWelsh) {
    folder = 'fhrs-bilingual';
    isText = 'Sgôr hylendid bwyd yn ';
  }
  if (fhis !== 'false') {
    folder = 'fhis';
    extension = 'jpg';
  } else {
    img.style = 'width:' + widths[style];
  }

  let ratingForImage = rating;
  if (rating === "Pass" || rating === "PassandEatSafe") {
    isText = '';
  }

  if (rating === "PassandEatSafe") {
    ratingForImage = "PassEatSafe"
  }

  img.src = url.origin + '/embed/badges/' + folder + '/' + style + '/' + folder + '-badge-' + ratingForImage + '.' + extension;
  img.alt = isText + words[isWelsh ? 'welsh' : 'english'][rating];

  element.appendChild(img);
  return element;
}

component().then(el => {
  parentNode.insertAdjacentHTML("beforebegin", el.outerHTML);
})

