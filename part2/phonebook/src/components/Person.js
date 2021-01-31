import React from 'react'
import personService from "../services/persons"

const Person = ({ person, setPersons, persons }) => {
    const removePerson = () => {
        const name = person.name
        const id = person.id
        const message = `Are you sure you want to delete ${name} from the phonebook?`
        if (window.confirm(message)) {
            personService
            .remove(id)
            .then(response => {
                setPersons(persons.filter(person => person.id !== id))
            })
        }
        }
      
    return (
        <li>{person.name} {person.number} <button onClick={removePerson}>delete person</button></li>
    )
}
export default Person