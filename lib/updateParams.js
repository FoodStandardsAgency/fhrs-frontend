const updateParams = (name, value, reset = false) => {
  const currUrl = new URL(window.location.href);
  let params;
  if (reset) {
    params = new URLSearchParams();
  } else {
    params = new URLSearchParams(currUrl.search);
    params.delete(name);
  }
  params.append(name, value);
  const query = params.toString();
  let pathName = currUrl.pathname;
  const nextURL = window.location.origin + pathName + (query != '' ? '?' + query : '');
  if (reset) {
    window.location.href = nextURL;
  } else {
    window.history.pushState({}, '', nextURL);
  }
}

export default updateParams;