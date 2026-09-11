import Part from './Part'

const Content = ({ parts }) => {
  return (
    <div>
        <Part part={parts[0]}></Part>
        <Part part={parts[1]}></Part>
        <Part part={parts[2]}></Part>
    </div>
  )
}

export default Content