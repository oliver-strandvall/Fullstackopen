const Content = ({ courses }) => {
  return (
    <div>
        <p>{courses[0].name}, Exercises: {courses[0].exercises}</p>
        <p>{courses[1].name}, Exercises: {courses[1].exercises}</p>
        <p>{courses[2].name}, Exercises: {courses[2].exercises}</p>
    </div>
  )
}

export default Content