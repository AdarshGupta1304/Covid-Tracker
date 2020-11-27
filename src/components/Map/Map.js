import React, { useState, useEffect } from 'react';
import './Map.css';
import {MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../../../node_modules/leaflet/dist/leaflet.css';
// import L from 'leaflet';

import { test } from '../../util';






const Map = ({center, zoom, casesInfo, countryName}) => {
    
    const [position,setPosition] = useState([center[0],center[1]]);

    useEffect(() => {
        setPosition([parseFloat(center[0]),parseFloat(center[1])]);
        // console.log('Maps => ',position[0], position[1] , zoom);
    }, [center])
    // const position = [26.449923,80.331871];

    // const LocationMarker = () => {
    //     const [position, setPosition] = useState(null);
    //     const map = useMapEvents({
    //       click() {
    //         map.locate()
    //       },
    //       locationfound(e) {
    //         setPosition(e.latlng)
    //         map.flyTo(e.latlng, map.getZoom())
    //       },
    //     })
      
    //     return position === null ? null : (
    //       <Marker position={position}>
    //         <Popup>You are here</Popup>
    //       </Marker>
    //     )
    //   }
    // const customMarker = new L.marker({
        // iconUrl: L.Icon.Default,
        // iconSize: [35, 45],
    // })



    return(
        <div className="map">
            <MapContainer center={position} zoom={1} scrollWheelZoom={true} >
                <TileLayer 
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {console.log('from JSX - ',position, zoom)}

                    <Marker position={position} >
                        {/* <BiMapPin /> */}
                        
                        <Popup>

                            <h6 className="countryName" >State in {countryName} </h6>
                            <span className="infected" >Infected: {test(casesInfo.totalCases)}</span><br />
                            <span className="recovered" >Recovered: {test(casesInfo.recovered)}</span><br />
                            <span className="deaths" >Deaths: {test(casesInfo.deaths)}</span>
                        </Popup>
                    </Marker>
                    
            </MapContainer>
        </div>
    );
}

export default Map;