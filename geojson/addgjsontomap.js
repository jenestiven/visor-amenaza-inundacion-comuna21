import { amenazageojson } from './amenaza_inundacion';
import { construccionesgeojson } from './construcciones_ilegales';

L.geoJSON(amenazageojson).addTo(map);
L.geoJSON(construccionesgeojson).addTo(map);


