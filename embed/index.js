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
  const link = document.createElement('a');
  const img = document.createElement('img');

  let businessLink = '';

  if (!['1', '2', '3'].includes(style)) {
    element.innerHTML = 'Invalid style. Ensure that the style parameter is 1, 2 or 3.';
    return element;
  }

  if (businessId) {
    const details = await api.setLanguage(isWelsh === 'cy' ? 'cy-GB' : '').getBusinessDetails(businessId);
    rating = details.rating.replaceAll(' ', '');
    rating = walesBusiness && rating === 'AwaitingInspection' ? 'Empty' : rating;
    fhis = details.scheme !== 'FHRS' ? 'true' : 'false';
    businessLink = details.url;

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

  let folder = 'fhrs';
  let extension = 'svg';
  if (isWelsh) {
    folder = 'fhrs-bilingual';
    isText = 'Sgôr hylendid bwyd yn ';
  }
  if (fhis !== 'false') {
    folder = 'fhis';
    extension = 'jpg';
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
  link.href = url.origin + businessLink;

  link.appendChild(img)
  element.appendChild(link);

  return element;
}

component().then(el => {
  parentNode.insertAdjacentHTML("afterbegin", el.innerHTML);
})

