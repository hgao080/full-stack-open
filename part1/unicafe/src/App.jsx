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

const Content = ({text, clicks}) => {
  return (
    <p>{text} {clicks}</p>
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
      <Title text="statistics" />
      <Content text="good" clicks={good}></Content>
      <Content text="neutral" clicks={neutral}></Content>
      <Content text="bad" clicks={bad}></Content>
    </div>
  )
}

export default App