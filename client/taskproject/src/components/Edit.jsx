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
    <div className='container p-5 d-flex flex-column align-item-center justify-content-center '>
    <div  className='w-75  p-5 border shadow'>
      <h4 className='text-center'> EDIT TODO</h4>
    <FloatingLabel controlId="floatingName"  label=" Title"  className="mb-3">
      <Form.Control type="text" placeholder="title" onChange={(e)=>{getTodoDetail({...todo,title:e.target.value})}} value={todo.title} />
    </FloatingLabel>
    <FloatingLabel controlId="floatingAddress" label="Description" className="mb-3">
      <Form.Control type="text" placeholder="content"onChange={(e)=>{getTodoDetail({...todo,description:e.target.value})}} value={todo.description} />
    </FloatingLabel>
    <FloatingLabel controlId="floatingAddress" label="Duedate" className="mb-3">
      <Form.Control type="date" placeholder="content"onChange={(e)=>{getTodoDetail({...todo,due_date:e.target.value})}} value={todo.due_date} />
    </FloatingLabel>
    <FloatingLabel controlId="floatingAddress" label="Status" className="mb-3">
  <Form.Select
    aria-label="Status"
    onChange={(e) => {
      getTodoDetail({ ...todo, status: e.target.value });
    }}
    style={{ maxHeight: "100px", overflowY: "auto" }} 
  >
    <option value="PENDING">PENDING</option>
    <option value="IN_PROGRESS">IN_PROGRESS</option>
    <option value="COMPLETED">COMPLETED</option>
    
  </Form.Select>
</FloatingLabel>
    
    <div className='d-flex justify-content-around'>
    <button className='btn btn-info mt-3 btn-outline-dark bg-opacity-50'onClick={(e)=>{updateTodo(e)}}>Update</button>
    <button className='btn btn-danger mt-3 btn-outline-dark bg-opacity-50 'onClick={CancelData}>Cancel</button>
    </div>
    </div>


  </div>
  )
}

export default Edit