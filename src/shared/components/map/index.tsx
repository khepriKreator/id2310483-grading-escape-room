import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Location, QuestBooking } from '../../api/models';
import useMap from './hooks/use-map';
import useMarkers from './hooks/use-markers';
import { ACTIVE_MARKER, DEFAULT_MARKER } from './const';

type MapProps = {
  center: Location;
  bookingInfo?: QuestBooking[];
  contactsAddress?: Location;
  onPlaceChange?: (id: string) => void;
};

const Map = ({ center, bookingInfo, contactsAddress, onPlaceChange }: MapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, center);
  const markersRef = useMarkers(map, bookingInfo, contactsAddress, onPlaceChange);
  const activeMarkerRef = useRef<leaflet.Marker | null>(null);

  useEffect(() => {
    let isMounted = true;
    if (activeMarkerRef.current && isMounted) {
      activeMarkerRef.current?.setIcon(DEFAULT_MARKER);
      activeMarkerRef.current = null;
    }

    if (bookingInfo) {
      const marker = markersRef.current.get(bookingInfo[0].id);

      marker?.setIcon(ACTIVE_MARKER);
      activeMarkerRef.current = marker ?? null;
    }

    return () => {
      isMounted = false;
    };
  }, [markersRef, bookingInfo]);

  return (
    <div className="map">
      <div ref={mapRef} className="map__container"></div>
    </div>
  );
};

export default Map;
