import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData'


const WeatherLocations = () => (
    <div>
        <Location city={"Rio de Janeiro"}/>
        <WeatherData />
    </div>
);
export default WeatherLocations;