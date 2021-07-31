import React from "react";
import personService from "../services/persons";

const RemovePerson = ({ person, setPersons, persons, setNotification }) => {
  const name = person.name;
  const id = person.id
  console.log('Message from RemovePerson', person.id)
  const message = `Are you sure you want to delete ${name} from the phonebook?`;
  const remove = () => {
    if (window.confirm(message)) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
          setNotification(`${person.name} was removed from the phonebook`);
          setTimeout(() => {
            setNotification(null);
          }, 6000);
        })
        .catch((error) => {
          setNotification(
            `${person.name} was already removed from the phonebook`
          );
          setTimeout(() => {
            setNotification(null);
          }, 6000);
          setPersons(persons.filter((person) => person.id !== id));
        });
    }
  };
  return (
    <button value={person.id} onClick={remove}>
      remove
    </button>
  );
};

export default RemovePerson;
