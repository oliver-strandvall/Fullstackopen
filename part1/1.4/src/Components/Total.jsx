const Total = ({ parts }) => {
  const totalexercises = parts[0].exercises + parts[1].exercises + parts[2].exercises;

  return (
    <div>
        <p>Total exercises: {totalexercises}</p>
    </div>
  )
}

export default Total