function component() {
  const rating = document.currentScript.getAttribute('data-rating');
  const style = document.currentScript.getAttribute('data-rating-style') ?? 1;
  const fhis = document.currentScript.getAttribute('data-fhis');
  const isWelsh = document.currentScript.getAttribute('data-welsh') === 'true';
  const url = new URL(document.currentScript.src);

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
      'empty': "rating awaited"
    }
  };


  const widths = {
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
  }

  if (rating === "Pass") {
    isText = '';
  }

  const element = document.createElement('div');
  element.innerHTML = rating + style + fhis;
  const img = document.createElement('img');
  img.src = url.origin + '/embed/badges/' + folder + '/' + style + '/' + folder + '-badge-' + rating + '.' + extension;
  img.alt = isText + words[isWelsh ? 'welsh' : 'english'][rating];
  img.style = 'width:' + widths[style];
  element.appendChild(img);
  return element;
}

document.currentScript.parentNode.insertAdjacentHTML("beforebegin", component().outerHTML);
