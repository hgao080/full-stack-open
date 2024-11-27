import { useState } from 'react'

const Title = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({text, onClick}) => {
  return (
      <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = ({text, data}) => {
  return (
    <tr> 
      <td>{text}</td>
      <td>{data} {text=="positive" ? '%' : ''}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const {good, neutral, bad} = props
  const all = good + neutral + bad

  if (all == 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="good" data={good}></StatisticLine>
        <StatisticLine text="neutral" data={neutral}></StatisticLine>
        <StatisticLine text="bad" data={bad}></StatisticLine>
        <StatisticLine text="all" data={all}></StatisticLine>
        <StatisticLine text="average" data={(good - bad) / all}></StatisticLine>
        <StatisticLine text="positive" data={good/all * 100}></StatisticLine>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Title text="give feedback" />
      <Button text="good" onClick={() => {setGood(good + 1)}}></Button>
      <Button text="neutral" onClick={() => {setNeutral(neutral + 1)}}></Button>
      <Button text="bad" onClick={() => {setBad(bad + 1)}}></Button>
      <Title text="Statistics"></Title>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

export default App