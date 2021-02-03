import React from "react";
import personService from "../services/persons";

const RemovePerson = ({ person, setPersons, persons }) => {
    const name = person.name;
    const id = person.id;
    const message = `Are you sure you want to delete ${name} from the phonebook?`;
    const remove = () => {
        if (window.confirm(message)) {
            personService.remove(id).then(setPersons(persons.filter(person => person.id !== id)))
        }}
    return (<button value={person.id} onClick={remove}>remove</button>);
};

export default RemovePerson;