import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { userLogin } from '../apis/fetchapi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate=useNavigate()
const [logData,setLogData]=useState({
  username:"",password:""
})
const formSubmit=()=>{
  const {username,password}=logData
  if(!username  || !password){
    toast.warning("invalid input")
  }
  else{
userLogin(logData).then((res)=>{
  console.log(res.data);
  console.log(res.data.token);
  sessionStorage.setItem("token",res.data.token)

  toast.success(" Login successfull!")
  navigate('/home')
})




  }
}
  return (
    <div className='d-flex w-100 p-5 m-5 align-items-center justify-content-centetr'>
        <h1 className='text-danger'>Login Form</h1>
        <div className='w-50 p-5'>
          <FloatingLabel controlId="floatingInputGrid1" label="username" className='mt-3'>
          <Form.Control type="text" placeholder=""  onChange={(e)=>{setLogData({...logData,username:e.target.value})}}/>
        </FloatingLabel>
        <FloatingLabel controlId="floatingInputGrid2" label="password" className='mt-3'>
          <Form.Control type="password" placeholder="" onChange={(e)=>{setLogData({...logData,password:e.target.value})}} />
        </FloatingLabel>
        <div className='mt-5 d-flex justify-content-between'><button className='btn btn-success' onClick={(e)=>{formSubmit()}}>Login
            </button>
            <Link to={'/register'}>New User? SignUp here</Link></div></div>
    </div>
  )
}

export default Login

