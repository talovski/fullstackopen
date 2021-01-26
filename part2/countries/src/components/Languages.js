import React from 'react'

const Languages = ({ country }) => {
    return (
        <div>
            <h3>Languages</h3>
            <ul>
                {country.languages.map((language) => <li key={language.name}>{language.name}</li>)}
            </ul>
        </div>
    )
}

export default Languages