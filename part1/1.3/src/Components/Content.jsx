import Part from './Part'

const Content = ({ part1, part2, part3 }) => {
  return (
    <div>
        <Part courses={part1}></Part>
        <Part courses={part2}></Part>
        <Part courses={part3}></Part>
    </div>
  )
}

export default Content