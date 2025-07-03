import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import HomePage from './components/HomePage'
import ServicesPage from './components/Services'
import ContactUs from './components/ContactUs'
import ProjectsPage from './components/Project'
import NewsAndBlogsPage from './components/NewsAndBlog'

import AboutUsPage from './components/AboutUsSection'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="about" element={<AboutUsPage/>}/>
        <Route path="blogs" element={<NewsAndBlogsPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
