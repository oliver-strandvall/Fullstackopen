import { useState } from 'react'
import axios from 'axios'

const PersonForm = ({ persons, setPersons }) => {
const [newName, setNewName] = useState('');
const [newNumber, setNewNumber] = useState('');

function handleSubmit(e) {
    e.preventDefault();
    if(persons.some(person => person.name === newName)) {
        alert(`Name: ${newName} Already Exists`);
    } else {
        console.log(newName, newNumber);
        const personObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1
        }

        axios
            .post('http://localhost:3001/persons', personObject)
            .then(response => {
                console.log(response)
            })
    }
    setNewName('');
    setNewNumber('');
    }

    function handleNameChange(e) {
        setNewName(e.target.value);
    }

    function handleNumberChange(e) {
        setNewNumber(e.target.value);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    Name: <input value={newName} onChange={handleNameChange} name="name" id="name" />
                </div>
                <div>
                    Number: <input value={newNumber} onChange={handleNumberChange} name="number" id="number" />
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm
