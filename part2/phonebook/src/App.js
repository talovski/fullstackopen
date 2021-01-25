import React, { useState } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const List = ({ persons }) => {
  return (
    <ul>
        {persons.map((person) => <Person key={person.name} person={person}/>)}
    </ul>
  )
}

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' },
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ filter, setFilter ] = useState('')
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }
  
  const peopleToShow = persons.filter((person) => 
  person.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))

  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        filter={filter}
        handleFilterChange={handleFilterChange}/>
      <h3>Add new</h3>
      <PersonForm 
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        newPhone={newPhone}
        setNewName={setNewName}
        setNewPhone={setNewPhone}
        handleNameChange={handleNameChange}
        handlePhoneChange={handlePhoneChange}
      />
      <h2>Numbers</h2>
       <Persons
        peopleToShow={peopleToShow}
      />
    </div>
  )
}

export default App
