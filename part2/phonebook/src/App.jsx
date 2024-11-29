import { useState } from 'react'

import Details from './components/Details'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (e) => {
    e.preventDefault()
    const nameObject = {
      name: newName
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <Details key={person.name} person={person}></Details>
      ))}
    </div>
  )
}

export default App