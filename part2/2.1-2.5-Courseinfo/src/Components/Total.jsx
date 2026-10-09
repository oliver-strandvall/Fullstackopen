const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
        <h3>Total exercises: {totalExercises}</h3>
    </div>
  )
}

export default Total