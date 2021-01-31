import React from 'react'
import personService from "../services/persons"

const PersonForm = (props) => {
    const { persons, setPersons, newName, newNumber, setNewName, setNewNumber, handleNameChange, handleNumberChange } = props
    const addName = (event) => {
        event.preventDefault()
        const nameObject = {
            name: newName,
            number: newNumber,
        }
        const dublicates = (person) => person.name === newName
    
        if (persons.some(dublicates)) {
          alert(`${newName} is already in the phonebook`)
          setNewName('')
          setNewNumber('')
          return
        }
        personService
          .create(nameObject)
          .then(response => {
            console.log(response)
            setPersons(persons.concat(response))
            setNewName('')
            setNewNumber('')
          })
    }
    return (
        <form onSubmit={addName}>
        <div>
            name: <input
                  value={newName}
                  onChange={handleNameChange}
                />
            number: <input
                value={newNumber}
                onChange={handleNumberChange}
                />
        </div>
        <div>
          <button type="submit">add</button>
      </div>
    </form>
  )
  
}
  export default PersonForm