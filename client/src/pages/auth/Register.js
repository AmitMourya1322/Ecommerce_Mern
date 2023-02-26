import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import toast  from 'react-hot-toast'
import { useAuth } from '../../context/auth'
import { useNavigate} from 'react-router-dom'
import Jumbotron from '../../components/cards/Jumbotron'
const Register = () => {
  const navigate = useNavigate()
  const [name,setName]= useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('');
  //hook
  const[auth,setAuth] = useAuth()
  const handleSubmit= async(e)=>{
    e.preventDefault()
    try {
     const {data} = await axios.post(`/register`,{
      name,email,password
     })
     console.log(data)
     if(data?.error){
      toast.error(data.error)
     }
     else{
      console.log(data)
      localStorage.setItem('auth',JSON.stringify(data))
      toast.success('Registration Sucess')
      setAuth({...auth,token:data.token,user:data.user})
      navigate('/dashboard')
     }
      
    } catch (error) {
      console.log(error)
      toast.error('Registration Failed')
      
    }
  }
  return (
    <>
    {!auth?.user ? (<div>
      <Jumbotron title="Register" subTitle="Welcome to React E-Commerce"/>

      <div className="container mt-5">
       <div className="row">
         <div className="col-md-6 offset-md-3">
           <form onSubmit={handleSubmit}>
             <input
               type="text"
               className="form-control mb-4 p-2"
               placeholder="Enter your name"
               value={name}
               onChange={(e) => setName(e.target.value)}
               autoFocus
             />

             <input
               type="email"
               className="form-control mb-4 p-2"
               placeholder="Enter your email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
             />

             <input
               type="password"
               className="form-control mb-4 p-2"
               placeholder="Enter your password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
             />

             <button className="btn btn-primary" type="submit">
               Submit
             </button>
           </form>
         </div>
       </div>
     </div>
   </div>):(navigate('/'))}
   </>
  )
}


export default Register