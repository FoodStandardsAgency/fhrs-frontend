import Router from "next/router"

/**
 * Update multiple url query string parameters and push or refresh.
 *
 * paramsObj in the form [{name: page, value: 10} will append ?page=10 to the url]
 * reset 
 * @param Object[]   paramObj       [{name: page, value: 10}] will append ?page=10 to the url.
 * @param bool       reset=false    Remove existing query and start again.
 * @param bool       push=false     Whether or not to do a full reload.
 *
 * @return undefined
 */
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
    Router.push(nextURL, undefined, {scroll: false});
  }
}

export default updateMultiParams;
