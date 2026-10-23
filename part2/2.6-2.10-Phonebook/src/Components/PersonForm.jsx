import { useState } from 'react'

const PersonForm = ({ persons, setPersons }) => {
const [newName, setNewName] = useState('');
const [newNumber, setNewNumber] = useState('');

function handleSubmit(e) {
    e.preventDefault();
    if(persons.some(person => person.name === newName)) {
        alert(`Name: ${newName} Already Exists`);
    } else {
        setPersons(persons.concat({
            id: persons.length + 1,
            name: newName,
            number: newNumber,
        }))
    }
    setNewName('');
    setNewNumber('');
    console.log(persons);
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
