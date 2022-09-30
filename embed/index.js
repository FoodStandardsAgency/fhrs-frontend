function component() {
  const element = document.createElement('div');
  element.innerHTML = "hello webpack - " + document.currentScript.getAttribute('data-rating-style');
  return element;
}

document.currentScript.parentNode.insertAdjacentHTML("beforebegin", component().outerHTML);
