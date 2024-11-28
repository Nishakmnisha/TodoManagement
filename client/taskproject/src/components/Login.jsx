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
      Login 
    </h1>
    <FloatingLabel controlId="floatingInputGrid1" label="Username" className="mb-3" style={{fontFamily:"bold"}}>
      <Form.Control
        type="text"
        placeholder="Enter username"
        onChange={(e) => {
          setLogData({ ...logData, username: e.target.value });
        }}
        style={{ borderColor: "#cccccc" }}
      />
    </FloatingLabel>
    <FloatingLabel controlId="floatingInputGrid2" label="Password" className="mb-3" style={{fontFamily:"bold"}}>
      <Form.Control
        type="password"
        placeholder="Enter password"
        onChange={(e) => {
          setLogData({ ...logData, password: e.target.value });
        }}
        style={{ borderColor: "#cccccc" }}
      />
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
        onClick={(e) => {
          formSubmit()
        }}
      >
        Login
      </button>
      <Link
        to="/register"
        style={{
          color: "#007bff",
          textDecoration: "none",
          fontWeight: "bold",
          fontFamily:"bold"
        }}
      >
        New User? Sign Up here
      </Link>
    </div>
  </div>
</div>

  )
}

export default Login

