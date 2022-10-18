import React from 'react';
import {renderToString} from "react-dom/server";
import TwigTemplate from "./parse";
import mapInfoBox from '@components/components/fhrs/MapInfobox/mapInfobox.html.twig';
import * as ReactDOM from "react-dom";
import BingMapsReact from "./bing-maps";

function formatAddress(establishment) {
  let formattedAddress = '';
  for (let i = 1; i <= 4; i++) {
    formattedAddress += establishment[`AddressLine${i}`] ? establishment[`AddressLine${i}`] + '<br>' : '';
  }
  formattedAddress += establishment.PostCode;
  formattedAddress = formattedAddress.replace(/<br>$/, '');
  return formattedAddress;
}

function getPushPin(establishment, mapPinNumber, locale) {
  const {latitude, longitude} = establishment.geocode;
  const infoBoxValues = {
    title: establishment.BusinessName ? establishment.BusinessName : 'Unknown',
    address: formatAddress(establishment),
    rating: establishment.RatingValue === 'Pass and Eat Safe' ? 'PassEatSafe' : establishment.RatingValue.toString().replace(' ', ''),
    welsh: locale === 'cy' || establishment.inWales,
    fhis: establishment.SchemeType === 'FHIS',
  }
  return {
    center: {
      latitude: latitude,
      longitude: longitude,
    },
    options: {
      icon: `../images/map-icons/pin--${mapPinNumber}.svg`,
      hoverIcon: `../images/map-icons/pin--${mapPinNumber}--hover.svg`,
    },
    infoboxHtml: renderToString(<TwigTemplate template={mapInfoBox} values={infoBoxValues} attribs={[]}/>),
  };
}

function renderMap(mapWrapper, pushPins, locations, center, bingKey) {
  const map = Microsoft.Maps;
  let bounds = null;
  if (locations.length > 1) {
    bounds = map.LocationRect.fromLocations(locations);
  }
  if (!bounds && !center) {
    center = locations[0];
  }
  ReactDOM.render(<BingMapsReact
    bingMapsKey={bingKey}
    mapOptions={{
      navigationBarMode: 'default',
      allowInfoboxOverflow: true,
      backgroundColor: '#ff0000',
    }}
    onMapReady={() => {mapWrapper.querySelector('.MicrosoftMap div:last-of-type').style.removeProperty('overflow');}}
    pushPinsWithInfoboxes={pushPins}
    viewOptions={{
      mapTypeId: 'road',
      bounds:  center ? null : bounds,
      padding: 15,
      center: center,
      zoom: center ? 15 : null,
    }}
    mapClassName="search"
    mapWrapper={mapWrapper}
  />, mapWrapper)
}

function initMapPins(mapWrapper, setCenter) {
  const pins = document.querySelectorAll('.fhrs-search-card__map-pin');
  pins.forEach((pin) => {
    pin.addEventListener('click', (e) => {
      e.preventDefault();
      const latitude = pin.getAttribute('data-latitude');
      const longitude = pin.getAttribute('data-longitude');
      setCenter({latitude: latitude, longitude: longitude});
      mapWrapper.scrollIntoView();
    });
  })
}

export {formatAddress, getPushPin, renderMap, initMapPins};
