const updateMultiParams = (paramObj, reset = false, push = false) => {
  const currUrl = new URL(window.location.href);
  let params;
  if (reset) {
    params = new URLSearchParams();
  } else {
    params = new URLSearchParams(currUrl.search);
    paramObj.forEach((p) => {
      params.delete(p.name);
    });
  }
  paramObj.forEach((p) => {
    params.append(p.name, p.value);
  });
  const query = params.toString();
  let pathName = currUrl.pathname;
  const nextURL = window.location.origin + pathName + (query !== '' ? '?' + query : '');
  if (reset || !push) {
    window.location.href = nextURL;
  } else {
    push(nextURL, undefined, {scroll: false});
  }
}

export default updateMultiParams;
