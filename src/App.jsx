
import { useState , useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import authSerices from './appwrite/auth'
import { login , logout } from './store/authslice'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading , setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    authSerices.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  } , [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App
