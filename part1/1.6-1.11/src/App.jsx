import { useState } from "react"
// import Statistics from "./Components/Statistics"

const App = () => {
  let [good, setGood] = useState(0);
  let [neutral, setNeutral] = useState(0);
  let [bad, setBad] = useState(0);

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
        <button onClick={setGoodFeedback}>Good</button>
        <button onClick={setNeutralFeedback}>Neutral</button>
        <button onClick={setBadFeedback}>Bad</button>
      </div>
      <h1>Statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {good + neutral + bad}</p>
      <p>Average: {good + neutral + bad === 0 ? 0 : (good - bad) / (good + neutral + bad)}</p>
      <p>Positive: {good + neutral + bad === 0 ? 0 : (good / (good + neutral + bad)) * 100}%</p>
    </div>
  )
}

export default App