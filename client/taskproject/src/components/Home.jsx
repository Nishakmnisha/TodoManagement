import React, { useState } from "react";
import { Link } from "react-router-dom";
import { listTodo } from "../apis/fetchapi";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Calendar from "react-calendar"; 
import "react-calendar/dist/Calendar.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Home() {
  const [activeSection, setActiveSection] = useState("list-view");
  const {id}=useParams()
  const [selectedDate, setSelectedDate] = useState(new Date()); 
  const [tasksForSelectedDate, setTasksForSelectedDate] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("title");
  const [filterStatus, setFilterStatus] = useState("");
  const header={
    "Authorization":`Token ${sessionStorage.getItem("token")}`,
    "Content-Type":'application/json'

  }
  const [todos,createTodo]=useState([])
console.log(id);

  useEffect(()=>{
    listTodo(header)
    .then((res)=>{
      console.log(res.data);
      createTodo(res.data)
    } )
    .catch((err)=>{
      console.log(err);
    }
  )},[])
  const onDateChange = (date) => {
    setSelectedDate(date);


    const filteredTasks = todos.filter(
      (todo) => new Date(todo.due_date).toDateString() === date.toDateString()
    );
    setTasksForSelectedDate(filteredTasks);
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "IN_PROGRESS":
        return { backgroundColor: "#0288d1" };
      case "COMPLETED":
        return { backgroundColor: "#43a047" };
      case "PENDING":
        return { backgroundColor: "#f57c00"};
      default:
        return { backgroundColor: "" };
    }
  };



const filteredTodos = filterStatus
? todos.filter((todo) => todo.status === filterStatus)
: todos;


const sortedTodos = [...filteredTodos].sort((a, b) => {
if (sortCriteria === "title") {
  return a.title.localeCompare(b.title);
} else if (sortCriteria === "status") {
  return a.status.localeCompare(b.status);
} else if (sortCriteria === "due_date") {
  return new Date(a.due_date) - new Date(b.due_date);
}
return 0;
});









  const renderSection = () => {
    if (activeSection === "list-view") {
      return (
        
        <section style={sectionStyle}>
          <Row className="mt-4">
        <Col md={3} sm={6}>
        <Link to="/add"   className='btn bg-opacity-50 bg-info mt-6 w-50 h-28' style={{fontFamily:"bold"}}>Create To-Do</Link> <br /><br />
        </Col>
        <Col md={9} sm={6}>
        
            
          <h2  style={{fontFamily:"bold"}}>Task List</h2>



<div style={{ marginBottom: "15px" }}>
                <label style={{ marginRight: "10px",fontFamily:"bold" }}>
                  Sort By: 
                  <select
                    value={sortCriteria}
                    onChange={(e) => setSortCriteria(e.target.value)} className="bg-info"
                    style={{ marginLeft: "5px" ,fontFamily:"bold"}}
                  >
                    <option value="title">Title</option>
                    <option value="status">Status</option>
                    <option value="due_date">Due Date</option>
                  </select>
                </label>

                <label style={{ marginLeft: "15px" ,fontFamily:"bold"}}>
                  Filter By : 
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)} className="bg-info"
                    style={{ marginLeft: "5px",fontFamily:"bold"}}
                  >
                    <option value="">All</option>
                    <option value="PENDING">Pending</option>
                    <option value="IN_PROGRESS">In Progress</option>
                    <option value="COMPLETED">Completed</option>
                  </select>
                </label>
              </div>






          <div style={tasklist}>
          
            <div style={taskitem}>
            
          {sortedTodos.map((task) => (
            <div className="card " style={{ ...styles.card, marginBottom: "15px" }}>
              <article  style={articleStyle}>
              

              <h3 style={{color:"#0288d1",marginLeft:"4", ...styles.card, marginBottom: "15px",fontFamily:"bold" }}>Title:{task.title}</h3>
              <p>
                Status: <strong style={{ ...styles.status, ...getStatusStyle(task.status) }}>{task.status}</strong>
              </p>
              <p>Due Date: {task.due_date}</p>
              
              <Link to={`/detail/${task.id}`} className='btn  bg-opacity-50 bg-info' style={{fontFamily:"bold"}}>view</Link>
              
              
            </article>
            </div>
            
            
          ))}
            </div>
            
            </div>
          
          </Col>
          </Row>
        </section>
        
      );
    } else if (activeSection === "calendar-view") {
      return (
<section style={sectionStyle}>
          <div className="card">
          <h2 >Task Calendar</h2>
          <Calendar 
            onChange={onDateChange}  
            value={selectedDate}
            tileContent={({ date }) => {
              const hasTasks = todos.some(
                (todo) => new Date(todo.due_date).toDateString() === date.toDateString()
              );
              return hasTasks ? <span style={{ color: "blue" }}>•</span> : null;
            }}
          />
          <div style={{ marginTop: "20px" }}>
            <h3>Tasks for {selectedDate.toDateString()}</h3>
            {tasksForSelectedDate.length > 0 ? (
              tasksForSelectedDate.map((task, index) => (
                <article key={index} style={articleStyle}>
                  <h3>{task.title}</h3>
                  <p>Status: {task.status}</p>
                  <p>Due Date: {task.due_date}</p>
                </article>
              ))
            ) : (
              <p>No tasks for this date.</p>
            )}
          </div>
          </div>
        </section>
      );
    }
  };

  
  return (
    <div>
      <header style={headerStyle}>
        <h1>To-Do List Management</h1>
      </header>
      <nav style={navStyle}>
        <a
          href="#"
          style={navLinkStyle}
          onClick={(e) => {
            e.preventDefault();
            setActiveSection("list-view");
          }}
        >
          List View
        </a>
        <a
          href="#"
          style={navLinkStyle}
          onClick={(e) => {
            e.preventDefault();
            setActiveSection("calendar-view");
          }}
        >
          Calendar View
        </a>
      </nav>

      
      <main>{renderSection()}</main>

      
      <footer style={footerStyle}>
        <p>&copy; 2024 To-Do List Management</p>
      </footer>
    </div>
  );
}



const headerStyle = {
  textAlign: "center",
  backgroundColor: "#1976d2",
  color: "white",
  padding: "15px 0",
};

const navStyle = {
  textAlign: "center",
  backgroundColor: "#004ba0",
  padding: "10px 0",
};

const navLinkStyle = {
  color: "white",
  textDecoration: "none",
  margin: "0 15px",
  fontWeight: "bold",
  cursor: "pointer",
};

const sectionStyle = {
  margin: "20px",
  padding: "20px",
  backgroundColor: "white",
  border: "1px solid #ddd",
  borderRadius: "5px",
};

const articleStyle = {
  marginBottom: "20px",
};

const centerText = {
  textAlign: "center",
};



const iframeStyle = {
  width: "100%",
  border: "0",
};

const footerStyle = {
  textAlign: "center",
  backgroundColor: "#004ba0",
  color: "white",
  padding: "10px 0",
};


const tasklist= {
  display: "flex",
  flexwrap: "wrap",
  gap: "20px",
  justifycontent: "center",
};

const taskitem = {
  backgroundcolor: "white",
  border: "1px solid #ddd",
  borderradius: "8px",
  padding: "15px",
  width: "400px",
  boxshadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};



const styles = {
  container: {
    // fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f4",
    padding: "20px",
  },
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "15px",
    margin: "10px 0",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  status: {
    fontFamily:"bold",
    padding: "5px 10px",
    borderRadius: "5px",
    color:"white",
    fontsize: "0.8em",
  },
};


export default Home;

    