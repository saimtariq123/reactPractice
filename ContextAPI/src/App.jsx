import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './assets/context/UserContextProvider'
import Profile from './components/Profile'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <UserContextProvider>
       <Login/>
       <Profile/>
        </UserContextProvider>
    </>
  )
}

export default App
