import leaflet from 'leaflet';
import pinActive from '../../../../public/img/svg/pin-active.svg';
import pinDefault from '../../../../public/img/svg/pin-default.svg';

export const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

export const TILE_LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export const DEFAULT_MARKER = leaflet.icon({
  iconUrl: pinDefault,
  iconAnchor: [20, 20],
});

export const ACTIVE_MARKER = leaflet.icon({
  iconUrl: pinActive,
  iconAnchor: [20, 20],
});

export const MAP_ZOOM = 13;
