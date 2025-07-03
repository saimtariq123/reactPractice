import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Services from './components/Services.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ContactUs from './components/ContactUs.jsx'
import Home from './components/HomePage.jsx'
import HomeServices from './components/HomeServices.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Header/>
      <Home/>
      
      <Footer/>
     
    </BrowserRouter>
  </StrictMode>,
)
