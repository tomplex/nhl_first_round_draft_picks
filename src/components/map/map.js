import './map.scss';

import L from 'leaflet';
import {MarkerCluster, MarkerClusterGroup} from 'leaflet.markercluster';

import { Component} from "../component";

const template = '<div ref="mapContainer" class="map-container"></div>';


export class Map extends Component {
    constructor(placeholderId, props) {
        super(placeholderId, props, template);
        this.map = L.map(this.refs.mapContainer, {
            center: [40.0, -30.0],
            zoom: 3,
            minZoom: 2,
            maxZoom: 16,
        });

        this.map.zoomControl.setPosition('topleft');
        this.layers = {};
        this.selectedRegion = null;

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
    }

}