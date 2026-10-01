import { useState, useEffect, useRef } from 'react';
import leaflet, { Map } from 'leaflet';
import { Location } from '../../../api/models';
import { MAP_ZOOM, TILE_LAYER, TILE_LAYER_ATTRIBUTION } from '../const';

const useMap = (mapRef: React.RefObject<HTMLElement>, center: Location) => {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance: Map = leaflet.map(mapRef.current, {
        center: {
          lat: center.coords[0],
          lng: center.coords[1],
        },
        zoom: MAP_ZOOM,
      });

      leaflet
        .tileLayer(TILE_LAYER, {
          attribution: TILE_LAYER_ATTRIBUTION,
        })
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, center]);

  useEffect(() => {
    if (map !== null) {
      map.setView({
        lat: center.coords[0],
        lng: center.coords[1],
      });
    }
  }, [center, map]);

  return map;
};

export default useMap;
