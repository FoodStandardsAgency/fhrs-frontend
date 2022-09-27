// DEPENDENCIES
import React, { useEffect, useRef, useCallback } from "react";

export default function BingMapsReact({
  bingMapsKey,
  height,
  mapOptions,
  onMapReady,
  pushPins,
  pushPinsWithInfoboxes,
  viewOptions,
  width,
  mapClassName,
  mapWrapper
}) {
  // refs
  const mapContainer = useRef(null);
  const map = useRef(null);

  // removes pushpins
  function removePushpins(map, Maps) {
    for (var i = map.entities.getLength() - 1; i >= 0; i--) {
      var pushpin = map.entities.get(i);
      if (pushpin instanceof Maps.Pushpin) {
        map.entities.removeAt(i);
      }
    }
  }

  // add pushpins with infoboxes
  const addPushpinsWithInfoboxes = useCallback(
    (pushPinsToAdd, infobox, map, Maps) => {
      removePushpins(map, Maps);
      pushPinsToAdd.forEach((pushPin) => {
        if (pushPin === null) {
          return;
        }
        const newPin = new Maps.Pushpin(pushPin.center, pushPin.options);
        newPin.metadata = {
          ...pushPin.options,
        };
        Maps.Events.addHandler(newPin, "click", (e) => {
          infobox.setOptions({
            title: e.target.metadata.title,
            description: e.target.metadata.description,
            htmlContent: pushPin.infobox?.infoboxHtml || pushPin.infoboxHtml,
            location: newPin.getLocation(),
            visible: !infobox.getOptions().visible,
            offset: new Microsoft.Maps.Point(20, 0),
            ...pushPin.infobox,
          });
          const buffer = 18;

          // See https://blogs.bing.com/maps/2011/09/16/dev-tip-repositioning-an-infobox/
          const infoboxAnchor = infobox.getAnchor();
          const infoboxLocation = map.tryLocationToPixel(e.target.getLocation(), Microsoft.Maps.PixelReference.control);

          let dx;
          let dy = infoboxLocation.y - buffer - infoboxAnchor.y;

          if (dy < buffer) {
            dy *= -1;
            dy +=buffer;
          }
          else {
            dy = 0;
          }

          dx = map.getWidth() - infoboxLocation.x + infoboxAnchor.x - infobox.getWidth();
          if (dx > buffer) {
            dx = 0;
          } else {
            dx -= buffer;
          }

          if (dx !== 0 || dy !== 0) {
            map.setView({centerOffset: new Microsoft.Maps.Point(dx, dy), center: map.getCenter()});
          }
        });
        map.entities.push(newPin);
      });
      Maps.Events.addHandler(map, "click", (e) => {
        infobox.setOptions({
          visible: false,
        });
      });
    },
    []
  );

  // add pushpins
  const addPushpins = useCallback((pushPinsToAdd, map, Maps) => {
    removePushpins(map, Maps);
    pushPinsToAdd.forEach((pushPin) => {
      if (pushPin === null) {
        return;
      }
      const newPin = new Maps.Pushpin(pushPin.center, pushPin.options);
      map.entities.push(newPin);
    });
  }, []);

  // set view options
  function setMapViewOptions(map, viewOptions, Maps) {
    const options = { ...viewOptions };
    if (viewOptions.mapTypeId) {
      options.mapTypeId = Maps.MapTypeId[viewOptions.mapTypeId];
    }
    if (viewOptions.hideRoadLabels) {
      options.labelOverlay = Maps.LabelOverlay.hidden;
    }
    map.setView(options);
  }

  // set map options
  function setMapOptions(map, mapOptions, Maps) {
    const options = { ...mapOptions };

    // some map options require values from the Maps class
    // these conditional statements handle those cases
    if (mapOptions.navigationBarMode) {
      options.navigationBarMode =
        Maps.NavigationBarMode[mapOptions.navigationBarMode];
    }
    if (mapOptions.navigationBarOrientation) {
      options.navigationBarOrientation =
        Maps.NavigationBarOrientation[mapOptions.navigationBarOrientation];
    }
    if (mapOptions.supportedMapTypes) {
      options.supportedMapTypes = mapOptions.supportedMapTypes.map(
        (type) => Maps.MapTypeId[type]
      );
    }
    map.setOptions(options);
  }

  // make map, set options, add pins
  const makeMap = useCallback(() => {
    const { Maps } = window.Microsoft;

    // only make a new map if one doesn't already exist
    if (!map.current) {
      map.current = new Maps.Map(mapWrapper.querySelector("div"), {
        credentials: bingMapsKey,
      });
    }
    // set viewOptions, if any
    if (viewOptions) {
      setMapViewOptions(map.current, viewOptions, Maps);
    }

    // set mapOptions, if any
    if (mapOptions) {
      setMapOptions(map.current, mapOptions, Maps);
    }

    // add push pins, if any
    if (pushPins) {
      addPushpins(pushPins, map.current, Maps);
    }

    // add infoboxes, if any
    if (pushPinsWithInfoboxes) {
      const infobox = new Maps.Infobox(map.current.getCenter(), {
        visible: false,
      });
      infobox.setMap(map.current);
      addPushpinsWithInfoboxes(
        pushPinsWithInfoboxes,
        infobox,
        map.current,
        Maps
      );
    }
    onMapReady && onMapReady({ map });
  }, [
    addPushpinsWithInfoboxes,
    addPushpins,
    bingMapsKey,
    mapOptions,
    onMapReady,
    pushPins,
    pushPinsWithInfoboxes,
    viewOptions,
  ]);

  useEffect(() => {
    if (window.Microsoft && window.Microsoft.Maps) {
      makeMap();
    } else {
      const scriptTag = document.createElement("script");
      scriptTag.setAttribute("type", "text/javascript");
      scriptTag.setAttribute(
        "src",
        `https://www.bing.com/api/maps/mapcontrol?callback=makeMap`
      );
      scriptTag.async = true;
      scriptTag.defer = true;
      document.body.appendChild(scriptTag);
      window.makeMap = makeMap;
    }
  }, [makeMap]);

  return (
    <div className={ mapClassName } ref={mapContainer} style={{ height: height, width: width }}></div>
  );
}
BingMapsReact.defaultProps = {
  bingMapsKey: null,
  mapOptions: null,
  height: "100%",
  onMapReady: null,
  pushPins: null,
  pushPinsWithInfoboxes: null,
  viewOptions: null,
  width: "100%",
};
