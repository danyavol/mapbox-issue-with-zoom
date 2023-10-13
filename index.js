// Import stylesheets
import './style.css';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'YOUR_ACCESS_TOKEN';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  zoom: 1, // Default zoom
  minZoom: 0, // This property is needed to disable zoom, when zoom level is 0
});

map.addControl(new mapboxgl.NavigationControl({ showCompass: false }));
