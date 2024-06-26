import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const AnecdoteAndVotes = ({ anecdote, nroVotes }) => (
  <div>
    <div>{anecdote}</div>
    <div>has {nroVotes} votes</div>
  </div>
)

const MostVotes = ({ anecdotes, votes }) => {
  const nroVotes = Math.max(...Object.values(votes))
  const anecdoteWithMostVotes = anecdotes[Object.keys(votes).find(key => votes[key] === nroVotes)]
  return (
    <AnecdoteAndVotes anecdote={anecdoteWithMostVotes} nroVotes={nroVotes} />
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Object.fromEntries(
    Array.from({ length: anecdotes.length }, (_, index) => [index, 0])
  ))

  const nextAnecdote = () => {
    let randomAnecdote = Math.floor(Math.random() * (anecdotes.length))
    while (randomAnecdote=== selected) {
      randomAnecdote = Math.floor(Math.random() * (anecdotes.length))
    }
    setSelected(randomAnecdote)
  }

  const voteAnecdote = () => {
    const copy = { ...votes }
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <AnecdoteAndVotes anecdote={anecdotes[selected]} nroVotes={votes[selected]} />
      <Button handleClick={voteAnecdote} text='vote' />
      <Button handleClick={nextAnecdote} text='next anecdote' />
      <h1>Anecdote with most votes</h1>
      <MostVotes anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

export default App