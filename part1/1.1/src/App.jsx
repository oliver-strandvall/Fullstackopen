import Header from './Components/Header'
import Content from './Components/Content'
import Total from './Components/Total'

const App = () => {
  const course = 'Half Stack application development'
  const courses = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  const exercises = courses[0].exercises + courses[1].exercises + courses[2].exercises

  return (
    <div>
      <Header course={course} />
      <Content courses={courses} />
      <Total exercises={exercises} />
    </div>
  )
}

export default App