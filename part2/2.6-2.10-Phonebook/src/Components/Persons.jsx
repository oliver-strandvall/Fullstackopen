import { useState } from 'react'

const Persons = ({ persons, setPersons }) => {
    
    return(
        <div>
            {/* <ul>
            {filteredPersons.map(person =>
                <li key={person.id}>{`${person.name} - ${person.number}`}</li>
            )}
            </ul> */}
            <ul>
                {persons.map(person =>
                    <li key={person.id}>{`${person.name} - ${person.number}`}</li>
                )}
            </ul>
        </div>
    )
}

export default Persons