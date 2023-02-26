import React from 'react'
import Jumbotron from '../components/cards/Jumbotron'
import { useAuth } from '../context/auth'
const Home = () => {
  const [auth,setAuth] = useAuth()
  return (
    <div>
      <Jumbotron title ="hello world" subTitle="Welcome to React Ecommerce"/>
      <pre>{JSON.stringify(auth,null,4)}</pre>
      Home</div>
  )
}

export default Home