import React from 'react'
import Languages from './Languages'
import Flag from './Flag'
import Weather from './Weather'

const CountryInfoFull = ({ country }) => {
    console.log(country.name)
    return (
        <div>
            <h2>{country.name}</h2>
            <p>Capital: {country.capital}<br></br>
            Population: {country.population}</p>
            <Languages country={country}/>
            <Flag country={country}/>
            <Weather country={country} />
        </div>
    )
}

export default CountryInfoFull