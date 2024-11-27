import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { userRegsiter } from '../apis/fetchapi';
import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
function Register() {
  const navigate=useNavigate()
  const [regUser,setUserReg]=useState({
    username:"",email:"",password:""
  })

  const formSubmit=()=>{
    const {username,email,password}=regUser
    if(!username || !email || !password){
      toast.warning("invalid input")
    }
    else{
userRegsiter(regUser)
.then(()=>{
  toast.success("successfully registered!")
  navigate('/')
}
)

    }
  }
  return (
    <div className='d-flex w-100 p-5 m-5 align-items-center justify-content-centetr'>
        <div className='w-50 p-5'>
        <h1 className='text-danger'>Regsiter Form</h1>
            <FloatingLabel controlId="floatingInputGrid1" label="username" className='mt-3'>
          <Form.Control type="text" placeholder="username" onChange={(e)=>{setUserReg({...regUser,username:e.target.value})}} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInputGrid2" label="email" className='mt-3'>
          <Form.Control type="email" placeholder="abc@gmail.com" onChange={(e)=>{setUserReg({...regUser,email:e.target.value})}}/>
        </FloatingLabel>
        <FloatingLabel controlId="floatingInputGrid3" label="password" className='mt-3'>
          <Form.Control type="password" placeholder="password" onChange={(e)=>{setUserReg({...regUser,password:e.target.value})}}/>
        </FloatingLabel>
        <div className='mt-5 d-flex justify-content-between'><button className='btn btn-success' onClick={(e)=>{formSubmit()}}>Register
            </button>
            <Link to={'/'}>Already have an account? Login here</Link></div></div>
    </div>
  )
}

export default Register
