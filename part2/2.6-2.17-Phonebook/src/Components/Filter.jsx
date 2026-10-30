const Filter = ({ searchName, onSearchNameChange }) => {
    return(
        <div>
            Filter By Name: 
            <input value={searchName} onChange={e => onSearchNameChange(e.target.value)} name="search" id="search"/>
        </div>
    )
}

export default Filter