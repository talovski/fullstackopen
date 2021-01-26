import React, { useState } from 'react'
import CountryInfoList from './CountryInfoList'


const Toggle = ({ country }) => {
    const [toggle, setToggle] = useState(true)

    const infoToShow = toggle
        ? <div></div>
        : <CountryInfoList country={country}/>

    return (
        <>
            <button onClick={() =>
            setToggle(!toggle)}>show {toggle ? 'more' : 'less'}</button>
            {infoToShow}
        </>
    )
}

export default Toggle