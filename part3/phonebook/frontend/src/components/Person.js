import React from "react";
import RemovePerson from "./RemovePerson";

const Person = ({ person, setPersons, persons, setNotification }) => {
  return (
    <li>
      {" "}
      {person.name} {person.number}{" "}
      <RemovePerson
        person={person}
        persons={persons}
        setPersons={setPersons}
        setNotification={setNotification}
      />
    </li>
  );
};
export default Person;
