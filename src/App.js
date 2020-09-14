import React,{Component} from 'react';


import WeatherInfo from './components/Respuesta';
import WeatherForm from './components/Formulario';
import {WEATHER_KEY} from './keys';

class App extends Component {

  state = {
    temperature : '',
    description: '',
    humedity: '',
    wind_speed: '',
    city:'',
    country: '',
    error: null
  }

  getWeather = async e => {
      e.preventDefault();
      const {city, country}= e.target.elements;
      const cityvalue = city.value;
      const countryvalue = country.value;

      
      if(cityvalue && countryvalue) {
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityvalue},${countryvalue}&appid=${WEATHER_KEY}&units=metric`;
      const response = await fetch(API_URL);
      const data =  await response.json();
      console.log(data);

      this.setState({
        temperature: data.main.temp,
        description: data.weather[0].description,
        humedity: data.main.humidity,
        wind_speed: data.wind.speed,
        city:data.name,
        country: data.sys.country,
        error:null

      },);
      } else {
        this.setState({error:'Please enter a city and a country'})
      }
      
  }



  render(){
    return(
      <div className="container p-4">
        <div className="row">
          <div className="col-md-6 mx-auto">
              <WeatherForm getWeather={this.getWeather}></WeatherForm>
              <WeatherInfo {...this.state}></WeatherInfo>
          </div>
        </div>
      </div>
    ) 
  }
}

export default App;
