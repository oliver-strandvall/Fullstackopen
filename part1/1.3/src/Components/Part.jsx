const Part = ({ courses }) => {
  return (
    <div>
        <p>{courses.name}, Exercises: {courses.exercises}</p>
    </div>
  )
}

export default Part