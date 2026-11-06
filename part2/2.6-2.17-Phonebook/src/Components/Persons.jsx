const Persons = ({ persons, onDelete }) => {
    return(
    <ul>
        {persons.map(person => (
        <li key={person.id}>
            {person.name} - {person.number}{' '}
            <button
            onClick={() => {
                if (window.confirm(`Delete ${person.name}?`)) {
                onDelete(person.id)
                }
            }}
            >
            Delete
            </button>
        </li>
        ))}
    </ul>
    )
}

export default Persons