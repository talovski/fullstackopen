import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Weather = ( {country} ) => {
  const [ weather, setWeather ] = useState('')
  
  useEffect(() => {
    axios
      .get(`http://wttr.in/${country.capital}?format=1`)
      .then(response => setWeather(response.data))
    }, [])
    
    return (
      <p>Weather in {country.capital}, {country.name} is {weather}</p>
    )
}

export default Weather