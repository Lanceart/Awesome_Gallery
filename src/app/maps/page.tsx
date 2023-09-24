'use client'
import { useMemo } from "react";
import {GoogleMap, useLoadScript, OverlayView,Marker} from "@react-google-maps/api";

export default function HomeMap(){
    const {isLoaded} = useLoadScript({
        googleMapsApiKey :"AIzaSyB2mOYMxYHcQh2HwRYm-QPklrjFPVpDtTU",
    });
    if(!isLoaded) return <div>Loading....</div>
    return <Map />
}

function Map(){
    const renderCustomMarker = () => {
        return (
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid black', // Optional, in case you want an actual border
            
          }}>
            <img src="https://res.cloudinary.com/dnqh8wkdj/image/upload/v1694219409/b4kkfcf419twijtc1yqq.jpg" width="100%" height="100%" />
          </div>
        );
      };
    const icon = {
        url: "https://res.cloudinary.com/dnqh8wkdj/image/upload/v1694219409/b4kkfcf419twijtc1yqq.jpg",
    // The size of the icon image in pixels.
    size: new window.google.maps.Size(40, 40),
    // The size of the scaled icon image.
    scaledSize: new window.google.maps.Size(40, 40),
    // The position at which to anchor an image in correspondence to the location of the marker on the map. By default, the anchor is located along the center point of the bottom of the image.
    anchor: new window.google.maps.Point(20, 20),
    }
    return <GoogleMap zoom={10} center={{lat:44, lng :-80}} mapContainerClassName="map-container">
        
        <Marker position={{lat:45, lng:-80}} icon={icon}/>
        <OverlayView
        position={{ lat: 44, lng: -80 }}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      >
        {renderCustomMarker()}
      </OverlayView>
    </GoogleMap>
}