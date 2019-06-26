// import L from 'leaflet'
//
// import 'index.css'
//
// const API_BASE = new URL('https://2q7e6rt0r6.execute-api.us-east-1.amazonaws.com/dev/players');


// function log(value) {
//     console.log(value)
// }
//
//
// function urlWithParams(url, params) {
//     let newUrl = new URL(url);
//     Object.keys(params).forEach(key => newUrl.searchParams.append(key, params[key]));
//     return newUrl
// }
//
// let map = L.map("map", {
//     center: [40.0, -30.0],
//     zoom: 3,
//     minZoom: 2,
//     maxZoom: 16,
// });
//
// L.tileLayer("'https://{s}.tile.osm.org/{z}/{x}/{y}.png'", {
//     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);


import './main.scss'
import template from './main.html'
import { InfoPanel } from './components/info_panel/info-panel'
import {Map} from "./components/map/map";


/** Main UI Controller Class */
class ViewController {
    /** Initialize Application */
    constructor () {
        console.log("hello, world");
        document.getElementById('app').outerHTML = template;
        this.initializeComponents();

    }

    initializeComponents() {
        this.infoPanel = new InfoPanel('info-panel-placeholder');
        this.map = new Map('map-placeholder');
    }
}

window.ctrl = new ViewController();