'use client'
import { useMemo } from "react";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";

export default function HomeMap(){
    const {isLoaded} = useLoadScript({
        googleMapsApiKey :"AIzaSyB2mOYMxYHcQh2HwRYm-QPklrjFPVpDtTU",
    });
    if(!isLoaded) return <div>Loading....</div>
    return <Map />
}

function Map(){
    return <GoogleMap zoom={10} center={{lat:44, lng :-80}} mapContainerClassName="map-container">
        
        <Marker position={{lat:44, lng:-80}}/>
    </GoogleMap>
}