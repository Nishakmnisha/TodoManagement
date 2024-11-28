import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { userRegsiter } from '../apis/fetchapi';
import { toast } from 'react-toastify';
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
    
    <div
  className="d-flex align-items-center justify-content-center"
  style={{
    backgroundColor: "#f0f0f0",
    minHeight: "100vh",
    width: "100vw",
    padding: "20px",
  }}
  
>
  <div
    className="w-50 p-5 border shadow"
    style={{
      backgroundColor: "#ffffff",
      borderRadius: "10px",
      maxWidth: "500px",
    }}
  >
    <h1
      className="text-center"
      style={{
        // fontFamily: "Arial, sans-serif",
        fontWeight: "bold",
        color: "#007bff",
        marginBottom: "30px",fontFamily:"bold"
      }}
    >
      Register 
    </h1>
    <p style={{ fontStyle: 'italic', color: '#555', marginBottom: '20px' }}>
    "Please fill out the fields below to create your account. Avoid spaces in your username."
      </p>
    <FloatingLabel controlId="floatingInputGrid1" label="username" className='mb-3'style={{fontFamily:"bold"}}>
        <Form.Control type="text" placeholder="username"  style={{ borderColor: "#cccccc" }}onChange={(e)=>{setUserReg({...regUser,username:e.target.value})}} />
        </FloatingLabel>
        
        <FloatingLabel controlId="floatingInputGrid2" label="email" className='mb-3' style={{fontFamily:"bold"}}>
         <Form.Control type="email" placeholder="abc@gmail.com" style={{ borderColor: "#cccccc" }} onChange={(e)=>{setUserReg({...regUser,email:e.target.value})}}/>
         </FloatingLabel>
         <FloatingLabel controlId="floatingInputGrid3" label="password" className='mb-3' style={{fontFamily:"bold"}}>
           <Form.Control type="password" placeholder="password" style={{ borderColor: "#cccccc" }} onChange={(e)=>{setUserReg({...regUser,password:e.target.value})}}/>
         </FloatingLabel>
    
    <div className="mt-5 d-flex justify-content-between align-items-center">
      <button
        className="btn btn-primary"
        style={{
          padding: "10px 20px",
          fontWeight: "bold",
          fontSize: "1rem",
          fontFamily:"bold"
        }}
        

        onClick={(e)=>{formSubmit()}}
      >
        Register
      </button>
      <Link
        to="/login"
        style={{
          color: "#007bff",
          textDecoration: "none",
          fontWeight: "bold",
          fontFamily:"bold"
        }}
      >
        Already have an account? Login here
      </Link>
    </div>
  </div>
</div>

  )
}

export default Register
