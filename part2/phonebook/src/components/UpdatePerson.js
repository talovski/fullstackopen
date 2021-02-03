import personService from "../services/persons";

const UpdatePerson = ({ newName, newNumber, persons, setPersons }) => {
    const message = `${newName} is already in the phonebook. Wanna change?`
    if (window.confirm(message)) {
        const personToChange = persons.find(person => person.name === newName);
        const { id } = personToChange;
        const personChanged = {...personToChange, number: newNumber};
        personService
            .update(id, personChanged)
            .then((response => {
                setPersons(persons.map(person => person.id !== id ? person : response))
            }));
    };
};

export default UpdatePerson;
