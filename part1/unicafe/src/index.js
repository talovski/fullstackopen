import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Statistic = (props) => {
  return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
  )
}

const Statistics = (props) => {
  const good = props.good
  const bad = props.bad
  const neutral = props.neutral
  const avg = (props.good - props.bad) / (props.bad + props.good + props.neutral)
  const avgRound = +avg.toFixed(2)
  const positive = (props.good + props.neutral) / (props.bad + props.good + props.neutral)
  const positiveRound = +positive.toFixed(2)

    if (props.good || props.bad || props.neutral > 0 ) {
      return (
        <div>
          <h1>Statistics</h1>
          <table>
            <tbody>
              <Statistic text = "good" value = {good}/>
              <Statistic text = "neutral" value = {neutral}/>
              <Statistic text = "bad" value = {bad} />
              <Statistic text = "avg" value = {avgRound} />
              <Statistic text = "positive" value = {positiveRound} />
            </tbody>
          </table>
        </div>
      ) 
    } else {
      return (
        <p>No feedback given</p>
      )
    }

  }

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  return (
    <div>
      <h1>Feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Statistics good={good} bad={bad} neutral={neutral} />

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
