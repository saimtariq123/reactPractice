import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="relative z-0 flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow relative z-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
