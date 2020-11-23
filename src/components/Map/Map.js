import React from 'react';
import './Map.css';
import {MapContainer, TileLayer } from 'react-leaflet';
import '../../../node_modules/leaflet/dist/leaflet.css';

import Card from 'react-bootstrap/Card';

const Map = ({center, zoom}) => {
    

    return(
        <Card className="map">
            <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>
                <TileLayer 
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                >
                    
                </TileLayer>
            </MapContainer>
        </Card>
    );
}

export default Map;