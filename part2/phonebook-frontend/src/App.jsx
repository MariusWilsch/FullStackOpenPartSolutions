import "./index.css";

import { useState, useMemo, useEffect } from "react";

import personsService from "./services/persons";
import Form from "./components/PhonebookForm";
import DisplayPhonebook from "./components/DisplayPhonebook";
import Input from "./components/Input";
// import { usePersons } from "./hooks/usePersons";

const Notification = ({ message }) => {
  if (message === "") return null;
  return <div className="notification">{message}</div>;
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [message, setMessage] = useState("");

  const filteredPersons = useMemo(() => {
    if (!Array.isArray(persons) || typeof searchValue !== "string") {
      console.log("Persons array has some kind of issue");
      return; // or handle the error appropriately based on your app's needs
    }

    const searchValueLower = searchValue.toLowerCase();
    return persons.filter((person) => {
      return (
        person.name.toLowerCase().includes(searchValueLower) ||
        person.number.toLowerCase().includes(searchValueLower)
      );
    });
  }, [persons, searchValue]);

  useEffect(() => {
    personsService
      .getAll()
      .then((fetchedArray) => setPersons(fetchedArray))
      .catch((err) => console.log("Error: ", err));
  }, []);

  function setStates(updatedArr) {
    setPersons(updatedArr);
    setNewName("");
    setNewNum("");
  }

  function messageTimer(message) {
    console.log(message);
    setMessage(message);
    setTimeout(() => setMessage(""), 5000);
  }

  const handleNewPerson = (event) => {
    event.preventDefault();

    const existingPerson = persons.find((person) => person.name === newName);

    if (!newName || !newNum) {
      alert("Please fill both fields before submitting the form");
      return [];
    }

    if (existingPerson && existingPerson.number === newNum) {
      alert(`${newName} already exists in the phonebook!`);
      return;
    }
    if (
      existingPerson &&
      window.confirm(`Do you want to change the phone number of ${newName}?`)
    ) {
      personsService
        .update(existingPerson.id, { ...existingPerson, number: newNum })
        .then((response) => {
          setStates(
            persons.map((person) =>
              person.id !== response.id ? person : { ...person, number: newNum }
            )
          );
        });
      return;
    }

    const personObj = {
      name: newName,
      id: newName,
      number: newNum,
    };
    personsService
      .create(personObj)
      .then((returnedPerson) => {
        messageTimer(`Added ${newName} to the phonebook`);
        setStates(persons.concat(returnedPerson));
      })
      .catch((err) => {
        console.log(err);
        messageTimer(`Error: ${err.response.data.error}`);
      });
  };

  const handleNewName = (event) => setNewName(event.target.value);

  const handleNewNum = (event) => setNewNum(event.target.value);

  const handleSearchChange = (event) => setSearchValue(event.target.value);

  const handleDelete = (id) => () => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      personsService
        .remove(id)
        .then(() => setPersons(persons.filter((person) => person.id !== id)))
        .catch(() =>
          messageTimer(
            `${
              persons.find((person) => person.id === id).name
            } is already deleted`
          )
        );
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={message} />
      <Input
        value={searchValue}
        handleEvent={handleSearchChange}
        placeholder="Search for contact here"
        text="filter shown with"
      />
      <h2>Add a new</h2>
      <Form
        {...{ newName, newNum, handleNewPerson, handleNewName, handleNewNum }}
      />
      <h2>Numbers</h2>
      <DisplayPhonebook persons={filteredPersons} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
