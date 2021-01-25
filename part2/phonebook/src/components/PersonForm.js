import React from 'react'

const PersonForm = (props) => {
    const { persons, setPersons, newName, newPhone, setNewName, setNewPhone, handleNameChange, handlePhoneChange } = props
    const addName = (event) => {
        event.preventDefault()
        const nameObject = [
        { 
            name: newName,
            phone: newPhone,
        }
        ]
        const dublicates = (person) => person.name === newName
    
        if (persons.some(dublicates)) {
        alert(`${newName} is already added to phonebook`)
        setNewName('')
        setNewPhone('')
        return
        }
        setPersons(persons.concat(nameObject))
        setNewName('')
        setNewPhone('')
    }
    return (
        <form onSubmit={addName}>
        <div>
            name: <input
                  value={newName}
                  onChange={handleNameChange}
                />
            phone: <input
                value={newPhone}
                onChange={handlePhoneChange}
                />
        </div>
        <div>
          <button type="submit">add</button>
      </div>
    </form>
  )
  
}
  export default PersonForm