import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0);
  const [mostVotes, setMostVotes] = useState(4);
  const [votes, setVotes] = useState([5, 4, 6, 8, 9, 3, 5, 2]);

  function nextAnecdote() {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  function voteAnecdote() {
    const copy = [...votes];
    copy[selected] += 1;
    let maxVotes = Math.max(...copy);
    let mostVotedIndex = copy.indexOf(maxVotes);
    setMostVotes(mostVotedIndex);
    setVotes(copy);
  }

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
      </div>
      {anecdotes[selected]}
      <div>
        {`Has ${votes[selected]} Votes`}
      </div>
      <div>
        <button onClick={voteAnecdote}>Vote</button>
        <button onClick={nextAnecdote}>Next Anecdote</button>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
      </div>
      {anecdotes[mostVotes]}
      <div>
        {`Has ${votes[mostVotes]} Votes`}
      </div>
    </div>
  )
}

export default App