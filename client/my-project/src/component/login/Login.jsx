import React from 'react'
import { useState } from 'react'
import { errors, success } from "../../../src/until/notication"

import axios from 'axios';
import { json, useNavigate } from 'react-router-dom';


export default function Login() {
    const [user,setUser] = useState({});
    const navigate = useNavigate()
    // lấy dữ liệu từ input
    const handleDataInput = (e) => {
      setUser({...user,[e.target.name] : e.target.value })
    }
    // console.log(user);
    
    // gửi dữ liệu lên server
    const handleLogin = async() => {
    try {
      const res = await axios.post(`http://localhost:6600/api/v1/user/login`,user)
      
      success(res.data.message);
      localStorage.setItem("token",res.data.token)
      localStorage.setItem("user",JSON.stringify(res.data.result))
     setTimeout(()=>{
      navigate("/todo")
     },3000)
    } catch (error) {
      errors(error.response.data.message);
    }
    }
    return (
        <div>
        <h1 className='text-4xl font-bold '> Đăng nhập</h1>
     <div className='mt-8'>
      <input 
        onChange={handleDataInput}
        name='email'
        type='email'
      className='w-96 h-8 mb-5 px-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50' placeholder='email ...'></input><br></br>
      <input 
      name='password'
      onChange={handleDataInput}
      type='password'
      className='w-96 h-8  mb-2 px-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50' placeholder='Mật khẩu ...'></input><br></br>
      <button 
      onClick={handleLogin}
      className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 '>Đăng nhập</button>
     </div>
    </div>
  )
}
