import React from 'react'
import CountryInfo from './CountryInfo'
import CountriesList from './CountriesList'

const SearchResult = ({ countries, search }) => {
  if (search === '') return('')
  if (countries.length === 1) {
    return (
      <div>
      {countries.map((country) =>
          <CountryInfo key={country.numericCode} country={country}/>
        )}
      </div>)
  }
  if (countries.length < 10) {
    return (
      <div>
        <CountriesList countries={countries}/>
      </div>
    )
  }
  if (countries.length > 10) return (<div>Too many results</div>)
}

export default SearchResult