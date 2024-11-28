import React, { useEffect, useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import { todoDetail } from '../apis/fetchapi';
import { todoUpdate } from '../apis/fetchapi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Edit() {

  const navigate=useNavigate()
  const header={
    "Authorization":`Token ${sessionStorage.getItem("token")}`,
    "Content-Type":'application/json'

  }
  const [todo,getTodoDetail]=useState({
    title:"",description:"",due_date:""
  })
  const{id}=useParams()
  useEffect(()=>{
  todoDetail(id,header).then((res)=>{
    getTodoDetail(res.data)
  })
},[id])

  const updateTodo=()=>{
  todoUpdate(id,todo,header).then((res)=>{
    toast.success("Todo updated")
    navigate('/home')
    console.log(res);
    
    console.log(todo);
    
  })
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
    className="w-75 p-5 border shadow"
    style={{
      backgroundColor: "#ffffff",
      borderRadius: "10px",
      maxWidth: "600px",
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
      EDIT TODO
    </h4>
    <FloatingLabel controlId="floatingName" label="Title" className="mb-3" style={{fontFamily:"bold"}}>
      <Form.Control
        type="text"
        placeholder="Title"
        onChange={(e) => {
          getTodoDetail({ ...todo, title: e.target.value });
        }}
        value={todo.title}
        style={{ borderColor: "#cccccc" }}
      />
    </FloatingLabel>
    <FloatingLabel controlId="floatingDescription" label="Description" className="mb-3" style={{fontFamily:"bold"}}>
      <Form.Control
        type="text"
        placeholder="Content"
        onChange={(e) => {
          getTodoDetail({ ...todo, description: e.target.value });
        }}
        value={todo.description}
        style={{ borderColor: "#cccccc" }}
      />
    </FloatingLabel>
    <FloatingLabel controlId="floatingDueDate" label="Due Date" className="mb-3" style={{fontFamily:"bold"}}>
      <Form.Control
        type="date"
        placeholder="Due Date"
        onChange={(e) => {
          getTodoDetail({ ...todo, due_date: e.target.value });
        }}
        value={todo.due_date}
        style={{ borderColor: "#cccccc" }}
      />
    </FloatingLabel>
    <FloatingLabel controlId="floatingStatus" label="Status" className="mb-3" style={{fontFamily:"bold"}}>
      <Form.Select
        aria-label="Status"
        onChange={(e) => {
          getTodoDetail({ ...todo, status: e.target.value });
        }}
        value={todo.status}
        style={{ borderColor: "#cccccc", maxHeight: "100px", overflowY: "auto",fontFamily:"bold" }}
      >
        <option value="PENDING">PENDING</option>
        <option value="IN_PROGRESS">IN_PROGRESS</option>
        <option value="COMPLETED">COMPLETED</option>
      </Form.Select>
    </FloatingLabel>
    <div className="d-flex justify-content-around mt-4">
      <button
        className="btn btn-primary"
        style={{ padding: "10px 20px", fontWeight: "bold",fontFamily:"bold" }}
        onClick={(e) => {
          updateTodo(e);
        }}
      >
        Update
      </button>
      <button
        className="btn btn-secondary"
        style={{ padding: "10px 20px", fontWeight: "bold",fontFamily:"bold" }}
        onClick={CancelData}
      >
        Cancel
      </button>
    </div>
  </div>
</div>

  )
}

export default Edit