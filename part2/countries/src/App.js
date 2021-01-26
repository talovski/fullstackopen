import React, { useEffect, useState} from 'react'
import axios from 'axios'
import SearchResult from './components/SearchResult'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }
  useEffect(hook, [])
  
  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
  }

  const countriesToShow = countries.filter(country =>
    country.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <input onChange={handleSearchChange} value={search}></input>
      
      <SearchResult countries={countriesToShow} search={search}/>
    </div>
  )

}
export default App
