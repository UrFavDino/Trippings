import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './MapContainer.css';

const MapContainer = () => {
  const defaultCenter = {
    lat: 14.599512, 
    lng: 120.984222
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDc8MNz76QiAzRjy67qX9mk1xppNUjgqgc">
      <GoogleMap
        mapContainerClassName="map-container"
        zoom={13}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapContainer;
