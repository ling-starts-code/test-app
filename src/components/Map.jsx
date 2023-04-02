import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { NZ_BOUNDS } from '../constants';
import BookmarkMarkers from '../containers/BookmarkMarkers';
import MapClickListener from '../containers/MapClickListener';

// eslint-disable-next-line no-underscore-dangle
delete L.Icon.Default.prototype._getIconUrl;
/* eslint-disable global-require */
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
  iconUrl: require('leaflet/dist/images/marker-icon.png').default,
  shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
});
/* eslint-enable global-require */

const Map = () => (
  <MapContainer bounds={NZ_BOUNDS} style={{ height: '100%' }}>
    <MapClickListener />
    <TileLayer
      // eslint-disable-next-line max-len
      attribution='© <a href="//www.linz.govt.nz/linz-copyright">LINZ CC BY 4.0</a> © <a href="//www.linz.govt.nz/data/linz-data/linz-basemaps/data-attribution">Imagery Basemap contributors</a>'
      url="https://basemaps.linz.govt.nz/v1/tiles/aerial/EPSG:3857/{z}/{x}/{y}.webp?api=c01ew1anx1ycnesc8g6nxe11jxv"
    />
    <BookmarkMarkers />
  </MapContainer>
);
export default Map;
