import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import AddPerson from "./components/AddPerson";
import Persons from "./components/Persons";
import personService from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [notification, setNotification] = useState("");

  // get persons from db
  useEffect(() => {
    personService.getAll().then((response) => {
      setPersons(response);
    });
  }, []);

  const handleNameChange = e => setNewName(e.target.value)
  const handleNumberChange = e => setNewNumber(e.target.value)
  const handleFilterChange = e => setFilter(e.target.value)

  const peopleToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h3>Add new</h3>
      <AddPerson
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        notification={notification}
        setNotification={setNotification}
      />
      <h2>Numbers</h2>
      <Persons
        peopleToShow={peopleToShow}
        setPersons={setPersons}
        persons={persons}
        setNotification={setNotification}
      />
    </div>
  );
};

export default App;
