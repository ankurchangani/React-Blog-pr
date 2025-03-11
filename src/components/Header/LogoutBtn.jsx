import React from 'react'
import { useDispatch } from 'react-redux'
import authSerices from '../../appwrite/confing'
import { logout } from '../../store/authslice'

const LogoutBtn = () => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        authSerices.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={handleLogout}>Logout</button>
  )
}

export default LogoutBtn