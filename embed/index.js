import TwigTemplate from "../lib/parse";
import badge from '@components/components/fhrs/Badge/badge.html.twig';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import './embed.scss';

function component() {
  const rating = document.currentScript.getAttribute('data-rating');
  const style = document.currentScript.getAttribute('data-rating-style');
  const fhis = document.currentScript.getAttribute('data-fhis');
  const url = new URL(document.currentScript.src);

  const badgeDetails = {
    class_name: 'badge-download',
    rating: rating,
    version: style,
    fhis: fhis,
  }

  const element = document.createElement('div');
  element.innerHTML = ReactDOMServer.renderToString(<TwigTemplate template={badge} values={badgeDetails} attribs={[]}/>);
  document.head.innerHTML += `<link rel="stylesheet" href=${url.origin + '/main.css'}  type="text/css"/>`;
  return element;
}

document.currentScript.parentNode.insertAdjacentHTML("beforebegin", component().outerHTML);
