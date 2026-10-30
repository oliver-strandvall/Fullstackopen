import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Components/Filter';
import PersonForm from './Components/PersonForm';
import Persons from './Components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchName, setSearchName] = useState('');

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }

  useEffect(hook, [])

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchName.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter searchName={searchName} onSearchNameChange={setSearchName} />
      <h2>Add New</h2>
        <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
        <Persons persons={filteredPersons} />
    </div>
  )
}

export default App