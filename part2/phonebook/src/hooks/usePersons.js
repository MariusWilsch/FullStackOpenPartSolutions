// hooks/usePersons.js

import { useState, useEffect } from "react";
import personsService from "../services/persons";

const usePersons = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    personsService
      .getAll()
      .then((fetchedArray) => setPersons(fetchedArray))
      .catch((err) => console.log("Error: ", err));
  }, []);

  const addPerson = (personObj) => {
    return personsService.create(personObj).then((returnedPerson) => {
      setPersons((prevPersons) => [...prevPersons, returnedPerson]);
    });
  };

  const updatePerson = (id, updatedPerson) => {
    return personsService.update(id, updatedPerson).then((response) => {
      setPersons((prevPersons) =>
        prevPersons.map((person) => (person.id !== id ? person : response))
      );
    });
  };

  const deletePerson = (id) => {
    return personsService.remove(id).then(() => {
      setPersons((prevPersons) =>
        prevPersons.filter((person) => person.id !== id)
      );
    });
  };

  return {
    persons,
    addPerson,
    updatePerson,
    deletePerson,
  };
};

export default usePersons;
