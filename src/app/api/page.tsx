'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const getRandomCoordinates = () => {
  return {
    lat: Math.random() * (90 - -90) + -90,
    lng: Math.random() * (180 - -180) + -180
  };
};

const App: React.FC = () => {
  const [address, setAddress] = useState('');

  useEffect(() => {
    const { lat, lng } = getRandomCoordinates();

    const fetchAddress = async () => {
      const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyB2mOYMxYHcQh2HwRYm-QPklrjFPVpDtTU`);
      if (response.data.results[0]) {
        setAddress(response.data.results[0].formatted_address);
      } else {
        setAddress('地址未找到');
      }
    };

    fetchAddress();
  }, []);

  return (
    <div>
      <h1>随机生成的地址</h1>
      <p>{address}</p>
    </div>
  );
};

export default App;
