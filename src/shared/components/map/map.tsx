import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Location, QuestBooking } from '../../api/models';
import useMap from './hooks/use-map';
import useMarkers from './hooks/use-markers';
import { ACTIVE_MARKER, DEFAULT_MARKER } from './const';

type MapProps = {
  center: Location;
  bookingInfoList?: QuestBooking[];
  contactsAddress?: Location;
  onPlaceChange?: (id: string) => void;
};

const Map = ({ center, bookingInfoList, contactsAddress, onPlaceChange }: MapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, center);
  const markersRef = useMarkers(map, bookingInfoList, contactsAddress, onPlaceChange);
  const activeMarkerRef = useRef<leaflet.Marker | null>(null);

  useEffect(() => {
    if (activeMarkerRef.current) {
      activeMarkerRef.current?.setIcon(DEFAULT_MARKER);
      activeMarkerRef.current = null;
    }

    if (bookingInfoList) {
      const marker = markersRef.current.get(bookingInfoList[0].id);

      marker?.setIcon(ACTIVE_MARKER);
      activeMarkerRef.current = marker ?? null;
    }
  }, [markersRef, bookingInfoList]);

  return (
    <div className="map">
      <div ref={mapRef} className="map__container"></div>
    </div>
  );
};

export default Map;
