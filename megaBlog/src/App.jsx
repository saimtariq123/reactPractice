import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import appwriteAuth from './appwrite/auth'
import { login, logout } from './reduxStore/authSlice'
import Header from './components/header'
import Footer from './components/Footer'
import Login from './components/Login'



import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    appwriteAuth.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .catch((error) => {
        console.error('Error fetching current user:', error)
        dispatch(logout())
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (

    <div className="App text-center mt-5 block mx-auto w-1/2 ">
      <h1>Welcome to Mega Blog</h1>
      <Login/>
      <Header/>
      <main>
      todo
      </main>
      <Footer/>
       
     
    </div>
  ) : null
  
}

export default App
// Note: The above code assumes that you have set up Redux and the AuthService correctly.