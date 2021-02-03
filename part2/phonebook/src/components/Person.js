import React from 'react'
import RemovePerson from "./RemovePerson"

const Person = ({ person, setPersons, persons }) => {      
    return (
        <li> {person.name} {person.number} <RemovePerson person={person} persons={persons} setPersons={setPersons} /></li>
    )
}
export default Person;