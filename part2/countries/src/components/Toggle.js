import React, { useState } from 'react'
import CountryInfo from './CountryInfo'

const Toggle = ({ country }) => {
  const [toggle, setToggle] = useState(true)
  
  const infoToShow = toggle
    ? <div></div>
    : <CountryInfo country={country}/>

  return (
    <>
      <button onClick={() =>
      setToggle(!toggle)}>show {toggle ? 'more' : 'less'}</button>
      {infoToShow}
      </>
  )
}

export default Toggle