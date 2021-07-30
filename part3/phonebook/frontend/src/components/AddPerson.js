import React from "react";
import personService from "../services/persons";

const AddPerson = (props) => {
  const {
    persons,
    setPersons,
    newName,
    newNumber,
    setNewName,
    setNewNumber,
    handleNameChange,
    handleNumberChange,
    setNotification,
  } = props;

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
    };
    const dublicates = (person) => person.name === newName;
    if (persons.some(dublicates)) {
      const confirmationMessage = `${newName} is already in the phonebook. Wanna change?`;
      if (window.confirm(confirmationMessage)) {
        const personToChange = persons.find(
          (person) => person.name === newName
        );
        const id = personToChange.id;
        const personChanged = { ...personToChange, number: newNumber };
        personService.update(id, personChanged).then((response) => {
          setPersons(
            persons.map((person) => (person.id !== id ? person : response))
          );
          setNotification(`Updated phone for ${personChanged.name}`);
          setTimeout(() => {
            setNotification(null);
          }, 6000);
        });
      }
      setNewName("");
      setNewNumber("");
    } else {
      personService
        .create(nameObject)
        .then((response) => {
          setPersons(persons.concat(response));
          setNotification(
            `Added ${newName} with ${newNumber} to the phonebook`
          );
          setTimeout(() => {
            setNotification(null);
          }, 6000);

          setNewName("");
          setNewNumber("");
        })
        .catch((error) => {
          setNotification(`${newName} was added to the phonebook`);
          setTimeout(() => {
            setNotification(null);
          }, 6000);
        });
    }
  };

  return (
    <form onSubmit={addName}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
export default AddPerson;
