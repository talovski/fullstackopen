import React from 'react'
import Languages from './Languages'
import Flag from './Flag'

const CountryInfoList = ({ country }) => {
    return (
        <div>
            <p>Capital: {country.capital}<br></br>
            Population: {country.population}</p>
            <Languages country={country}/>
            <Flag country={country}/>
        </div>
    )
}

export default CountryInfoList