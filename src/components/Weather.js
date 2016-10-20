import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import openWeatherMap from '../api/openWeatherMap';

export default class Weather extends Component {
  constructor(props) {
    super(props)
    this.handleSearch = this.handleSearch.bind(this);

    this.state = {
      isLoading: false
    }
  }
  handleSearch(location) {
    this.setState({
      isLoading: true
    });

    openWeatherMap.getTemp(location)
      .then((temp) => {
        this.setState({
          location,
          temp,
          isLoading: false
        });
      }, (errorMessage) => {
        alert(errorMessage);
        this.setState({
          isLoading: false
        })
      })
  }
  render() {
    let {isLoading, temp, location} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>
      }
    }

    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
}
