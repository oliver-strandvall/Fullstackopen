const Part = ({ part }) => {
  return (
    <div>
        <p>{part.name}, Exercises: {part.exercises}</p>
    </div>
  )
}

export default Part