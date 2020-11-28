import React, { useState, useEffect } from 'react';
import './Map.css';
import {MapContainer, TileLayer, Marker, Popup, CircleMarker, ZoomControl } from 'react-leaflet';
import '../../../node_modules/leaflet/dist/leaflet.css';
import icon from '../../../node_modules/leaflet/dist/images/marker-icon.png';
import iconShadow from '../../../node_modules/leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';

import { test } from '../../util';






const Map = ({center, zoom, casesInfo, countryName}) => {
    
    // const [position,setPosition] = useState([center[0],center[1]]);

    // useEffect(() => {
    //     setPosition([parseFloat(center[0]),parseFloat(center[1])]);
    // }, [center])
  
    // const redOption = { color: 'red', opacity: '0.1' }

    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
    });

    L.Marker.prototype.options.icon = DefaultIcon;

    return(
        <div className="map">
            <MapContainer center={center} zoom={zoom} scrollWheelZoom={true} >
                <TileLayer 
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {console.log('from JSX - ',center, zoom)}
                    {/* <CircleMarker center={center} radius={20} pathOptions={redOption} > */}
                        <Marker position={center} >
                                <Popup>

                                    <h6 className="countryName" >State in {countryName} </h6>
                                    <span className="infected" >Infected: {test(casesInfo.totalCases)}</span><br />
                                    <span className="recovered" >Recovered: {test(casesInfo.recovered)}</span><br />
                                    <span className="deaths" >Deaths: {test(casesInfo.deaths)}</span>
                                </Popup>
                        </Marker>
                    {/* </CircleMarker> */}
                    
            </MapContainer>
        </div>
    );
}

export default Map;