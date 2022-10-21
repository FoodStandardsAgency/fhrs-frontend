const updateMultiParams = (paramObj, reset = false) => {
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
  window.location.href = window.location.origin + pathName + (query !== '' ? '?' + query : '');
}

export default updateMultiParams;
