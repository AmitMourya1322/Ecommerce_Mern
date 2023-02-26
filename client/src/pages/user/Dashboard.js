import React from 'react'
import { useAuth } from '../../context/auth'
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
  const navigate = useNavigate()
  const [auth,setAuth] = useAuth();

  return (
   <>
   {!auth?.user ? ( navigate('/')):(<div> ggg<h1>Dashboard</h1></div>)}
   </>
  )
}

export default Dashboard