import React, { useEffect, useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
const Loading = () => {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    const [count,setCount] = useState(3)

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((currentCount)=> --currentCount)
        },1000)
        count===0 && navigate('/login',{
          state:location.pathname
        })
        //cleanup
        return ()=>clearInterval(interval)

    },[count])
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>Loading {count}</div>
  )
}

export default Loading