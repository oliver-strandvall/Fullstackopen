import { useState } from "react"
import Statistics from "./Components/Statistics"
import Button from "./Components/Button"

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  function setGoodFeedback() {
      setGood((good) => good + 1);
  }

  function setNeutralFeedback() {
      setNeutral((neutral) => neutral + 1);
  }

  function setBadFeedback() {
      setBad((bad) => bad + 1);
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button text="Good" onClick={setGoodFeedback}></Button>
        <Button text="Neutral" onClick={setNeutralFeedback}></Button>
        <Button text="Bad" onClick={setBadFeedback}></Button>
      </div>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App