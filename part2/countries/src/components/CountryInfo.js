import React from 'react'
import Languages from './Languages'
import Flag from './Flag'
import Weather from './Weather'

const CountryInfo = ({ country }) => (
  <div>
    <h2>{country.name}</h2>
    <p>Capital: {country.capital}<br></br>
    Population: {country.population}</p>
    <Languages country={country}/>
    <Flag country={country}/>
    <Weather country={country} />
  </div>
)

export default CountryInfo