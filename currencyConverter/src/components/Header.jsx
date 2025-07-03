import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaChevronDown ,FaSearch, FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";


const Header = () => {
  const navigate = useNavigate()

  const [navItems, setNavItems] = useState([
    { name: 'Home', url: '/', active: false },
    { name: 'About Us', url: '/signup', active: false },
    { name: 'Projects', url: '/all-posts', active: false },
    { name: 'Services', url: './services.jsx', active: false }
  ])

  const service = [
    { name: 'Consulting', url: '/services/consulting' },
    { name: 'Development', url: '/services/development' },
    { name: 'Design', url: '/services/design' }
  ]

  const [servicesOpen, setServicesOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const dropdownRef = useRef(null)
  const searchRef = useRef(null)

  const handleNavClick = (index, url) => {
    const updated = navItems.map((item, i) => ({
      ...item,
      active: i === index
    }))
    setNavItems(updated)
    setServicesOpen(false)
    navigate(url)
  }

  const handleServiceClick = (url) => {
    setServicesOpen(false)
    navigate(url)
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        searchRef.current &&
        !searchRef.current.contains(e.target)
      ) {
        setServicesOpen(false)
        setSearchOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
  <header className="w-full shadow-sm">
  <div className="w-full flex flex-wrap items-center justify-between px-6 py-4 max-w-7xl mx-auto">
    
    {/* Left: Logo */}
    <figure className="w-auto h-auto mb-4 sm:mb-0">
      <img className="h-10 sm:h-12" src="../public/logo.png" alt="Logo" />
    </figure>

    {/* Center: Navigation */}
    <nav className="w-full sm:flex-1 sm:w-auto">
      <ul className="flex flex-col sm:flex-row justify-center items-start sm:items-center gap-4 sm:gap-6">
        {navItems.map((item, index) => (
          <li key={item.name}>
            <button
              onClick={() => handleNavClick(index, item.url)}
              className={`uppercase border-b-2 transition-all duration-500 text-sm sm:text-base ${
                item.active
                  ? 'text-orange-500 border-orange-500'
                  : 'text-gray-700 border-transparent cursor-pointer'
              }`}
            >
              {item.name}
            </button>
          </li>
        ))}
        <li className="relative" ref={dropdownRef}>
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="uppercase border-b-2 text-gray-700 border-transparent transition-all duration-500 flex items-center gap-1 text-sm sm:text-base"
          >
            More<FaChevronDown className="text-xs sm:text-sm" />
          </button>
          {servicesOpen && (
            <ul className="absolute mt-2 flex flex-col bg-white shadow-lg rounded p-2 min-w-[10rem] z-10">
              {services.map((service) => (
                <li key={service.name}>
                  <button
                    onClick={() => handleServiceClick(service.url)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-100"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </nav>

    {/* Right: Icons */}
    <div className="flex items-center gap-3 mt-4 sm:mt-0 sm:ml-4" ref={searchRef}>
      <button
        onClick={() => setSearchOpen(!searchOpen)}
        className="text-gray-700 text-lg"
      >
        <FaSearch />
      </button>
      {searchOpen && (
        <input
          type="text"
          placeholder="Search..."
          className="ml-2 px-2 py-1 border border-gray-300 rounded w-32 sm:w-40"
        />
      )}
      <div className="h-6 border-l border-gray-400 mx-2 hidden sm:block" />
      <FaFacebookSquare className="text-xl text-gray-700 hover:text-orange-500 cursor-pointer" />
      <FaInstagramSquare className="text-xl text-gray-700 hover:text-orange-500 cursor-pointer" />
      <FaLinkedin className="text-xl text-gray-700 hover:text-orange-500 cursor-pointer" />
    </div>

  </div>
</header>

  )
}

export default Header
