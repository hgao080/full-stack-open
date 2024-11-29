import { useState, useEffect } from "react";

import personsService from './services/persons'
import Details from "./components/Details";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const personsToShow =
    filter.length === 0
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().startsWith(filter.toLowerCase())
        );

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, []);

  const addPerson = (e) => {
    e.preventDefault();

    if (persons.find((person) => person.name === newName)) {
      const oldPerson = persons.find((person) => person.name === newName)
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const updatedPerson = {...oldPerson, number: newNumber}
        personsService
          .updatePerson(updatedPerson.id, updatedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id === returnedPerson.id ? returnedPerson : person))
            setNewName('')
            setNewNumber('')
          })
      }
      return;
    }

    const nameObject = {
      name: newName,
      number: newNumber,
    };

    personsService
      .create(nameObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
      })
  };

  const onDelete = (personObject) => {
    if (window.confirm(`Delete ${personObject.name}?`)) {
      personsService
      .removePerson(personObject.id)
      .then(removedPerson => {
        setPersons(persons.filter(person => removedPerson.id !== person.id))
      })
    }
    console.log("User canceled delete");
    
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange}></Filter>
      <h3>add a new</h3>
      <PersonForm
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      ></PersonForm>
      <h2>Numbers</h2>
      {personsToShow.map((person) => (
        <Details key={person.id} person={person} onDelete={onDelete}></Details>
      ))}
    </div>
  );
};

export default App;
