import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { createTodo } from '../apis/fetchapi';
import {  toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Add() {
  const[todoAdd,addTodo]=useState({title:"",description:"",due_date:""})


  const navigate=useNavigate()

  const SubmitData=()=>{
    const header={
      "Authorization":`Token ${sessionStorage.getItem("token")}`,
      "Content-Type":'application/json'

    }
    const {title,description,due_date}=todoAdd
    if (!title  || !due_date ){
      toast.warning("invalid input")
    }
    else(
        createTodo(todoAdd,header).then((res)=>{
        // console.log(res.data);
      toast.success(" Todo created succesfully")
        navigate('/home/')
        
      })
    )
  }

  const CancelData=()=>{
    navigate('/home')
  }

  return (

<div
  className="d-flex align-items-center justify-content-center"
  style={{ backgroundColor: "#f0f0f0", minHeight: "100vh", width: "100vw" }}
>
  <div
    className="p-4 border shadow"
    style={{
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      width: "90%",
      maxWidth: "500px",
    }}
  >
    <h4
      className="text-center"
      style={{
        fontWeight: "bold",
        color: "#007bff",
        marginBottom: "20px",
        fontFamily:"bold"
      }}
    >
      Create Your Todo
    </h4>
    <FloatingLabel controlId="floatingName" label="Title" className="mb-3" style={{fontFamily:"bold"}} >
      <Form.Control
        type="text"
        placeholder="Title"
        required
        onChange={(e) => {
          addTodo({ ...todoAdd, title: e.target.value });
        }}
        style={{ borderColor: "#cccccc" }}
      />
    </FloatingLabel>
    <FloatingLabel controlId="floatingDescription" label="Description" className="mb-3" style={{fontFamily:"bold"}} >
      <Form.Control
        type="text"
        placeholder="Content"
        onChange={(e) => {
          addTodo({ ...todoAdd, description: e.target.value });
        }}
        style={{ borderColor: "#cccccc" }}
      />
    </FloatingLabel>
    <FloatingLabel controlId="floatingDueDate" label="Due Date" className="mb-3" style={{fontFamily:"bold"}}>
      <Form.Control
        type="date"
        placeholder="Due Date"
        required
        onChange={(e) => {
          addTodo({ ...todoAdd, due_date: e.target.value });
        }}
        style={{ borderColor: "#cccccc" }}
      />
    </FloatingLabel>
    <FloatingLabel controlId="floatingStatus" label="Status" className="mb-3" style={{fontFamily:"bold"}}>
      <Form.Select
        aria-label="Status"
        onChange={(e) => {
          addTodo({ ...todoAdd, status: e.target.value });
        }}
        style={{
          borderColor: "#cccccc",
          maxHeight: "100px",
          overflowY: "auto",
          fontFamily:"bold"
        }}
      >
        <option value="PENDING">PENDING</option>
        <option value="IN_PROGRESS">IN_PROGRESS</option>
        <option value="COMPLETED">COMPLETED</option>
      </Form.Select>
    </FloatingLabel>
    <div className="d-flex justify-content-around mt-4">
      <button
        className="btn btn-primary"
        style={{ padding: "10px 20px", fontWeight: "bold" ,fontFamily:"bold"}}
        onClick={(e) => SubmitData()}
      >
        Submit
      </button>
      <button
        className="btn btn-secondary"
        style={{ padding: "10px 20px", fontWeight: "bold", fontFamily:"bold"}}
        onClick={CancelData}
      >
        Cancel
      </button>
    </div>
  </div>
</div>

  )
}

export default Add