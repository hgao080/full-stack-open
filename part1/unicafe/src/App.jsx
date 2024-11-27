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

const Content = ({text, data}) => {
  return (
    <p>{text} {data} {text=="positive" ? '%' : ''}</p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad

  return (
    <div>
      <Title text="give feedback" />
      <Button text="good" onClick={() => {setGood(good + 1)}}></Button>
      <Button text="neutral" onClick={() => {setNeutral(neutral + 1)}}></Button>
      <Button text="bad" onClick={() => {setBad(bad + 1)}}></Button>
      <Title text="statistics" />
      <Content text="good" data={good}></Content>
      <Content text="neutral" data={neutral}></Content>
      <Content text="bad" data={bad}></Content>
      <Content text="all" data={all}></Content>
      <Content text="average" data={(good - bad) / all}></Content>
      <Content text="positive" data={good/all * 100}></Content>
    </div>
  )
}

export default App