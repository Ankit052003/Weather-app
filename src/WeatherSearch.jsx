import React, { useState } from 'react'
import useFetchWeather from './hook/useFetchWeather';

const WeatherSearch = ({addFavorite}) => {
   const[city,setCity]=useState('');
   const { weather , error , fetchWeather }  = useFetchWeather();

   const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(city);    
   }

  return (
    <div className='max-w-md mx-auto bg-white shadow rounded'>
        <form className='mb-4' onSubmit={handleSubmit}>
           <input type="text" placeholder='Enter city' value={city} onChange={(e) =>setCity(e.target.value)}
           className='border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition'/>
           <button type="submit" className='mt-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2 w-full rounded-lg shadow-md hover:scale-105 transform transition duration-300'>Search</button>
        </form>
        {error && <p className='text-red-500'>{error}</p>}
        {weather && (
          <div className='text-center'>
             <h2 className='text-xl font-bold'>{weather.name}</h2>
             <p>{weather.weather[0].description}</p>
             <p>{Math.round(weather.main.temp -273.15)}°C</p>
             <img 
             src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
             alt="weather icon"
             className='mx-auto w-20 h-20'
             />
             <button   onClick={()=>addFavorite(weather.name)}           
             className='mt-2 bg-green-500 text-white p-2 rounded'>Save City</button>
          </div>
        )}
      
    </div>
  )
}

export default WeatherSearch
