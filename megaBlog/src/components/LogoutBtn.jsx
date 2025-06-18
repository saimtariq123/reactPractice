import React from 'react'
import { useDispatch } from 'react-redux'
import {appwriteAuth} from '../appwrite/auth'
import { logout } from '../reduxStore/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const handleLogout = async () => {
        try {
            await appwriteAuth.logout().then(() =>
            dispatch(logout()))
        } catch (error) {
            console.error('Logout failed:', error)
        }
    }

  return (
    <button >Logout</button>
  )
}

export default LogoutBtn
