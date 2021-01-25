import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
  <p><button onClick={props.handleClick}>{props.text}</button></p>
  )
}

const App = ( {anecdotes} ) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
    
  const handleNextClick = () => setSelected(Math.floor(Math.random() * Math.floor(anecdotes.length)))
  const handleVoteClick = () => {
      const copyVotes = [ ...votes ]
      copyVotes[selected]++
      setVotes(copyVotes)
  }
 
  const mostVotes = () => {
    const mostVotes = Math.max(...votes)
    const indexVotes = votes.indexOf(mostVotes)
    console.log(anecdotes[indexVotes])
    return (
      <p>{anecdotes[indexVotes]}</p>
    )
  }
  
  return (
    <div>
      <h2>Anecdote</h2>
      {anecdotes[selected]}
      <p>This anecdote has {votes[selected]} votes</p>
        <Button handleClick={handleNextClick} text="Next anecdote" />
        <Button handleClick={handleVoteClick} text="Vote for anecdote" />
      <h2>Anecdote with most votes</h2>
      {mostVotes()}
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

