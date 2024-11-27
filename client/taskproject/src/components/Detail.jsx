import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { todoDetail } from '../apis/fetchapi';
import { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { todoDelete } from '../apis/fetchapi';
import { Link } from 'react-router-dom';



function Detail(){
  
  const [todo,setTodo]=useState({})

  const navigate=useNavigate()
    const {id}=useParams()
console.log(id);



    const header={
      "Authorization":`Token ${sessionStorage.getItem("token")}`,
      "Content-Type":'application/json'
  
    }


    useEffect(()=>{
        todoDetail(id,header).then((res)=>{
            setTodo(res.data)
            console.log(res.data);

    
  
        })
    },[id])

    const deleteTodo=()=>{
      todoDelete(id,header).then((res)=>{
  toast.success("todo deleted")
  navigate('/home')
      })
    }

  return (
    <div><center>
      <Card style={{ width: '40rem' }} className='mt-5'>
    <Card.Header className='bg-dark text-light'>TODO DATA</Card.Header>
    <ListGroup variant="flush">
    <ListGroup.Item className='fontsize-xxl'>TITLE :{todo.title}</ListGroup.Item>
      <ListGroup.Item> DESCRIPTION :{todo.description}</ListGroup.Item>
      <ListGroup.Item> STATUS :{todo.status}</ListGroup.Item>
      <ListGroup.Item> DUE DATE :{todo.due_date}</ListGroup.Item>

      
    </ListGroup>
    
    <Link to={`/edit/${todo.id}`} className='btn btn-success btn-outline-dark bg-opacity-50' >EDIT</Link>

    <button className='btn btn-danger btn-outline-dark bg-opacity-50' onClick={(e)=>{deleteTodo(id)}}>DELETE</button>
  </Card></center></div>
  )
}

export default Detail