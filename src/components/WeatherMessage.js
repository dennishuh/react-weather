import React from 'react';

const WeatherMessage = ({location, temp}) => {
  return (
    <h3>It is {temp}&deg;F in {location}</h3>
  )
}

export default WeatherMessage;
