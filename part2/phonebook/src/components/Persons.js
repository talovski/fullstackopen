import React from 'react'
import Person from './Person'

const Persons = (props) => {
    const {peopleToShow} = props
    return (
        <ul>
            {peopleToShow.map((person) => <Person key={person.name} person={person} />)}
        </ul>
    )
}

export default Persons