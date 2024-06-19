import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  
)}

const Statistics = ({ good, neutral, bad }) => {
  const sum = good + bad + neutral
  const average = sum === 0 ? 0 : (good - bad)/sum
  const positive = sum === 0 ? 0 : good/sum *100 + '%'

  if (sum === 0) {
    return (
      <div>No feedback given</div>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine text={'good'} value={good} />
        <StatisticLine text={'neutral'} value={neutral} />
        <StatisticLine text={'bad'} value={bad} />
        <StatisticLine text={'all'} value={sum} />
        <StatisticLine text={'average'} value={average} />
        <StatisticLine text={'positive'} value={positive} />
      </tbody>
        
    </table>
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text={'give feedback'} />
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <Header text='statistics' />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App