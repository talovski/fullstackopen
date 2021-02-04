import React from "react";
import Person from "./Person";

const Persons = ({ peopleToShow, setPersons, persons, setNotification }) => {
  return (
    <ul>
      {peopleToShow.map((person) => (
        <Person
          key={person.id}
          person={person}
          setPersons={setPersons}
          persons={persons}
          setNotification={setNotification}
        />
      ))}
    </ul>
  );
};
export default Persons;
