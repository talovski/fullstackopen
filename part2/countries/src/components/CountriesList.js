import React from 'react'
import Toggle from './Toggle'

const CountriesList = ({ countries }) => {
  return (
    <div>
      <ul>
        {countries.map((country) =>
          <li key={country.numericCode}>{country.name} <Toggle country={country}/></li>)}
        </ul>
      </div>
    )
} 

export default CountriesList