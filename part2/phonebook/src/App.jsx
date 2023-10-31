import { useState, useMemo } from "react";
import Form from "./components/PhonebookForm";
import DisplayPhonebook from "./components/DisplayPhonebook";
import Input from "./components/Input";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const filteredPersons = useMemo(() => {
    const searchValueLower = searchValue.toLowerCase();
    return persons.filter((person) => {
      return (
        person.name.toLowerCase().includes(searchValueLower) ||
        person.number.toLowerCase().includes(searchValueLower)
      );
    });
  }, [persons, searchValue]);

  const handleNewPerson = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} already exists in the phonebook!`);
      return;
    }

    if (!newName || !newNum) {
      alert("Please fill both fields before submitting the form");
      return;
    }

    const personObj = {
      name: newName,
      id: newName,
      number: newNum,
    };
    setPersons(persons.concat(personObj));
    setNewName("");
    setNewNum("");
  };

  const handleNewName = (event) => setNewName(event.target.value);

  const handleNewNum = (event) => setNewNum(event.target.value);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
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
      <DisplayPhonebook persons={filteredPersons} />
    </div>
  );
};

export default App;
