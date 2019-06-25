import React from 'react';
import L from 'leaflet'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import MarkerClusterGroup from './markercluster'

import 'leaflet/dist/leaflet.css'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
// import layers from 'leaflet/dist/images/layers.png'
import 'react-leaflet-markercluster/dist/styles.min.css';



let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25,41],
    iconAnchor: [12,39],
    popupAnchor: [1, -28]
});

L.Marker.prototype.options.icon = DefaultIcon;

const API_BASE = new URL('https://2q7e6rt0r6.execute-api.us-east-1.amazonaws.com/dev/players');


function urlWithParams(url, params) {
    let newUrl = new URL(url);
    Object.keys(params).forEach(key => newUrl.searchParams.append(key, params[key]))
    return newUrl
}


class BasicMap extends React.Component {
    constructor() {
        super();
        this.state = {
            lat: 42.0,
            lng: -73.0,
            zoom: 10,
            features: []
        };

        this.getPlayerData = this.getPlayerData.bind(this);
    }

    getPlayerData() {
        const params = {
            draft_round: 1
        };
        fetch(urlWithParams(API_BASE, params))
            .then((responseText) => responseText.json())
            .then((response) => this.setState({features: response.result}));
    }

    componentDidMount() {
        this.getPlayerData();
    }

    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <Map center={position} maxZoom={20} zoom={this.state.zoom} style={{height: "100%"}}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                <MarkerClusterGroup>
                    {this.state.features.map(function (player) {
                        return <Marker key={player.properties.id}
                                       position={[player.geometry.coordinates[1], player.geometry.coordinates[0]]}>
                            <Popup>
                                <PlayerInfo player={player.properties} />
                            </Popup>
                        </Marker>

                    })}
                </MarkerClusterGroup>
            </Map>
        );
    }
}


class PlayerInfo extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <h3>{this.props.player.name}</h3>
        )
    }

}

export default BasicMap;