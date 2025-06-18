import React from 'react'
import {Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const header = () => {
  const auth= useSelector((state) => state.auth.state)
  const navigate= useNavigate()

  const navItems = [{
    name: 'Home',
    url: '/',
    active: true,
  },{
    name: 'login',
    url: '/login',
    active: !auth,
  },
  {
    name: 'signup',
    url: '/signup',
    active: !auth,
  }
  ,{
    name:'all blogs',
    url: '/all-psots',
    active: auth,


  }
  ,{
    name: 'add posts',
    url: '/add-post',
    active: auth,
  }

]
  return (
    <div>
      <header className='bg-gray-800 text-white p-4'>
        <Container>
          <nav className='flex justify-between items-center'>
            <div className='mr-4'>
              <Link to= '/' className='text-2xl font-bold'>
              <Logo width="70px"/>
              </Link>
            </div>
            <ul className='flex space-x-4'>
              {navItems.map((item) => (
                item.active && (
                  <li key={item.name}>
                    <button onClick={()=> navigate(item.url)} className='text-white hover:text-gray-300'>
                      {item.name}
                    
                   
                    </button>
                  </li>
                )
              ))}

              {auth && ( 
                <li>
                  <LogoutBtn/>
                </li>
              )}
            </ul>
          </nav>
        </Container>

      </header>
    </div>
  )
}

export default header
