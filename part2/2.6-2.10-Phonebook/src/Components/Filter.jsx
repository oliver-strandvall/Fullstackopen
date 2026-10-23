import { useState } from 'react'

const Filter = ({ persons, setPersons }) => {
    const [searchName, setSearchName] = useState('');

    function handleSearch(e) {
        setSearchName(e.target.value);
        console.log(searchName);
    }

    const filteredPersons = persons.filter(person =>
        person.name.toLowerCase().includes(searchName.toLowerCase())
    )

    return(
        <div>
            Filter By Name: <input value={searchName} onChange={handleSearch} name="search" id="search" />
            
        </div>
    )
}

export default Filter