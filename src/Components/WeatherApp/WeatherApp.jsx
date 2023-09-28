import React, { useState } from 'react'
import "./WeatherApp.css"
import search_icon from '../Assets/search.png';
import clear from '../Assets/clear.png';
import cloud from '../Assets/cloud.png';
import drizzle from '../Assets/drizzle.png';
import rain from '../Assets/rain.png';
import snow from '../Assets/snow.png';
import wind from '../Assets/wind.png';
import humidity from '../Assets/humidity.png';
const WeatherApp = () => {

  let api_key ="f1213f9083fcdb332b9234f0d9f4c0fa";
  const [wicon,setWicon]=useState(cloud);
  const search= async()=>{
    const element=document.getElementsByClassName("cityInput");
    if(element[0].value===""){
      return 0;
    }
    const url = `http://localhost:3001/weather?city=${element[0].value}`;

    
    let response= await fetch(url);
   
    let data= await response.json();
    
    const humidity=document.getElementsByClassName("humidity-percent");
    const wind=document.getElementsByClassName("wind-rate");
    const temp = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML=data.main.humidity+" %";
    wind[0].innerHTML=Math.floor(data.wind.speed)+" km/h";
    temp[0].innerHTML=Math.floor(data.main.temp)+" °C";
    location[0].innerHTML=data.name;

    if (data.weather[0].icon ==="01d" || data.weather[0].icon === "01n"){
      setWicon(clear)

  } // we are displaying our weather using icon key provided by the openweather
    else if (data.weather[0].icon ==="02d" || data.weather[0].icon ==="02n"){
      setWicon(cloud)

  }
    else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
      setWicon(drizzle)

    }
    else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
      setWicon(drizzle)

    }
    else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
      setWicon(rain)

    }
    else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
      setWicon(rain)

    }
    else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
      setWicon(snow)

    }
    else{
      setWicon(clear);
    }
}

  return (
    <div className='container'>
    <p className="paragraph">Enter a place to receive the weather.</p>
      <div className='top-bar'>
        
        <input type='text' className='cityInput' placeholder="Search"/>
        <div className="search-icon" onClick={()=>{search()}}>
          <img src={search_icon} alt="" className='icon'/>
        </div>
      </div>
      <div className="weather-image">
        <img src={wicon} alt="" />
      </div>
      <div className="weather-temp"></div>
      <div className="weather-location"></div>
      <div className="data-container">
        <div className="element">
          <img src={humidity} alt="" className='icon'/>
          <div className="data">
            <div className="humidity-percent"></div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind} alt="" className='icon'/>
          <div className="data">
            <div className="wind-rate"></div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default WeatherApp
