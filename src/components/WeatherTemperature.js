import React from 'react';
import WeatherIcons from 'react-weathericons';

const icons={

};
const getWeatherIcon = weatherState =>{
    return <WeatherIcons neme={} size="2x"/>;
}

const WeatherTemperature = ({temperature,weatherState}) => (

    <div>
        {
        getWeatherIcon(weatherState)
        }
        <span>{`${temperature} c°`}</span>
    </div>
);

export default WeatherTemperature;
