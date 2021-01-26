import React from 'react'
import CountryInfoFull from './CountryInfoFull'
import CountriesList from './CountriesList'

const SearchResult = ({ countries, search }) => {
    if (search === '') {
        return('')
    }
    if (countries.length === 1) {
        return (
            <div>
                {countries.map((country) =>
                    <CountryInfoFull
                        key={country.numericCode}
                        country={country}
                    />)}
            </div>)
    } else if (countries.length > 1 && countries.length < 10) {
      return (
        <div>
            <CountriesList countries={countries}/>
        </div>
      )
    } else {
        return (<div>Too many results</div>)
    }
}

export default SearchResult