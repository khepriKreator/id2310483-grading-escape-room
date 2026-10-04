import { useEffect, useRef, useState } from 'react';
import leaflet, { LayerGroup } from 'leaflet';
import { DEFAULT_MARKER, ACTIVE_MARKER } from '../const';
import { QuestBooking, Location } from '../../../api/models';

const useMarkers = (
  map: leaflet.Map | null,
  bookingInfo?: QuestBooking[],
  contactsAddress?: Location,
  onPlaceChange?: (id: string) => void,
) => {
  const [activeMarker, setActiveMarker] = useState<string | null>(null);
  const markersLayerRef = useRef<LayerGroup | null>(null);
  const markersRef = useRef<Map<string, leaflet.Marker>>(
    new globalThis.Map<string, leaflet.Marker>(),
  );

  useEffect(() => {
    if (!map) {
      return;
    }

    if (!markersLayerRef.current) {
      markersLayerRef.current = leaflet.layerGroup().addTo(map);
    }

    const markersLayer = markersLayerRef.current;

    markersLayer.clearLayers();

    const markersCoords: Array<[number, number]> = [];

    if (bookingInfo) {
      const handleActiveMarkerChange = (id: string) => {
        if (onPlaceChange) {
          onPlaceChange(id);
        }

        setActiveMarker(id);
      };

      bookingInfo.forEach(({ id, location }) => {
        markersCoords.push(location.coords);

        const marker = leaflet.marker(
          {
            lat: location.coords[0],
            lng: location.coords[1],
          },
          {
            icon: id === activeMarker ? ACTIVE_MARKER : DEFAULT_MARKER,
          },
        );
        marker.addEventListener('click', () => handleActiveMarkerChange(id));
        marker.addTo(markersLayer);

        markersRef.current.set(id, marker);
      });

      map.fitBounds(markersCoords, {
        padding: [50, 50],
      });
    } else if (contactsAddress) {
      const marker = leaflet.marker(
        {
          lat: contactsAddress.coords[0],
          lng: contactsAddress.coords[1],
        },
        {
          icon: DEFAULT_MARKER,
        },
      );
      marker.addTo(markersLayer);
      markersRef.current.set(contactsAddress.address, marker);
    }
  }, [map, bookingInfo, activeMarker, contactsAddress, onPlaceChange]);

  return markersRef;
};

export default useMarkers;
