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
    <div className='container p-4 d-flex flex-column align-item-center justify-content-center'>
      <div  className='w-50  p-5 border shadow'>
        <h4 className='text-center'> Create your Todo</h4>
      <FloatingLabel controlId="floatingName"  label=" Title"  className="mb-3">
        <Form.Control type="text" placeholder="Title" onChange={(e)=>{addTodo({...todoAdd,title:e.target.value})}}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingAddress" label="Description" className="mb-3">
        <Form.Control type="text" placeholder="Content" onChange={(e)=>{addTodo({...todoAdd,description:e.target.value})}}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingAddress" label="Duedate" className="mb-3">
        <Form.Control type="date" placeholder="Content" onChange={(e)=>{addTodo({...todoAdd,due_date:e.target.value})}}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingAddress" label="Status" className="mb-3">
  <Form.Select
    aria-label="Description"
    onChange={(e) => {
      addTodo({ ...todoAdd, status: e.target.value });
    }}
    style={{ maxHeight: "100px", overflowY: "auto" }} 
  >
    <option value="PENDING">PENDING</option>
    <option value="IN_PROGRESS">IN_PROGRESS</option>
    <option value="COMPLETED">COMPLETED</option>
    
  </Form.Select>
</FloatingLabel>

      <div className='d-flex justify-content-around'>
      <button className='btn btn-info mt-3 btn-outline-dark bg-opacity-50' onClick={(e)=>SubmitData()}>Submit</button>
      <button className='btn btn-danger mt-3 btn-outline-dark bg-opacity-50'onClick={CancelData}>Cancel</button>
      </div>
      </div>


    </div>
  )
}

export default Add