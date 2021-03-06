var area = require('@mapbox/geojson-area').geometry;
import { geomReduce } from '@turf/meta';

/**
 * Takes one or more features and returns their area in square meters.
 *
 * @name area
 * @param {FeatureCollection|Feature<any>} geojson input GeoJSON feature(s)
 * @returns {number} area in square meters
 * @example
 * var polygon = turf.polygon([[[125, -15], [113, -22], [154, -27], [144, -15], [125, -15]]]);
 *
 * var area = turf.area(polygon);
 *
 * //addToMap
 * var addToMap = [polygon]
 * polygon.properties.area = area
 */
export default function (geojson) {
    return geomReduce(geojson, function (value, geometry) {
        return value + area(geometry);
    }, 0);
}
