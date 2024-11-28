import { useState } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes,Route } from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import Detail from './components/Detail';
import Homepage from './components/Homepage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
     <Route path="/" element={<Homepage/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/register" element={<Register/>}/>
     <Route path="/home" element={<Home/>}/>
     <Route path="/add" element={<Add/>}/>
     <Route path="/detail/:id" element={<Detail/>}/>
     <Route path="/edit/:id" element={<Edit/>}/>

     
      </Routes> 

      <ToastContainer/>
    </>
  )
}


export default App
