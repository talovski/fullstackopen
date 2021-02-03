import React from 'react'
import Person from './Person'

const Persons = ({ peopleToShow, setPersons, persons }) => {
    return (
        <ul>
            {peopleToShow.map((person) => <Person key={person.id} person={person} setPersons={setPersons} persons={persons}/>)} 
        </ul>
    )
}
export default Persons
