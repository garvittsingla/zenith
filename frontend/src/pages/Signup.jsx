import React, { useState } from 'react'
import 'ldrs/ring'
import { bouncy } from 'ldrs'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

bouncy.register()



const Signup = () => {
    const navigate = useNavigate()
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)
    const handleLogin = async() =>{
        
        setLoading(true)
        const response =await axios.post("http://localhost:3000/api/user/signup",{
            username:username,
            password:password
        })
        setLoading(false)
        if (response.status ===200){
            setLoading(false)
            navigate("/signin")
        }else{
            setError(true)
        }
        

    }
return (
    <div className='bg-zinc-900 min-h-screen w-full flex items-center justify-center'>
        <input value={username} onChange={(e)=>setUsername(e.target.value)} type="email" className='bg-white' placeholder='username'/>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className='bg-white' placeholder='password'/>
        <button onClick={handleLogin} className='p-4 bg-green-500 text-white'>
            {loading? (<l-bouncy
  size="45"
  speed="1.75" 
  color="white" 
></l-bouncy>):(<p>Submit</p>)}

        </button>
        {error?(<p className='text-red-500'>Something went wrong</p>):null}
    </div>
)
}

export default Signup