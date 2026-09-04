import Part from './Part'

const Content = ({ courses }) => {
  return (
    <div>
        <Part courses={courses[0]}></Part>
        <Part courses={courses[1]}></Part>
        <Part courses={courses[2]}></Part>
    </div>
  )
}

export default Content