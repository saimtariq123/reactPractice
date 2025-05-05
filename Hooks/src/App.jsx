import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(15)

  const addValue = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h1>saim</h1>
      <h3>values: {count}</h3>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button>Subtract Value</button>
    </>
  )
}

export default App
  