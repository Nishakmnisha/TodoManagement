import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { todoDetail, todoDelete } from "../apis/fetchapi";
import { toast } from "react-toastify";

function Detail() {
  const [todo, setTodo] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const header = {
    Authorization: `Token ${sessionStorage.getItem("token")}`,
    "Content-Type": "application/json",
  };

  useEffect(() => {
    todoDetail(id, header).then((res) => {
      setTodo(res.data);
    });
  }, [id]);

  const deleteTodo = () => {
    todoDelete(id, header).then(() => {
      toast.success("Task deleted successfully");
      navigate("/home");
    });
  };

  return (
    <div
      style={{
        background: "linear-gradient(to right, #f8f9fa, #e9ecef)",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "'Poppins', sans-serif",
        color: "#343a40",
      }}
    >
      <center>
        
        <div
          style={{
            width: "60rem",
            textAlign: "left",
            marginBottom: "20px",
            padding: "15px 20px",
            borderRadius: "10px",
            background: "linear-gradient(to right, #47CEEB, #B0E0E6)",
            color: "#ffffff",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1
            style={{
              fontSize: "1.75rem",
              fontWeight: "bold",
              marginBottom: "5px",
              letterSpacing: "0.5px",
            }}
          >
            {currentDate}
          </h1>
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: "500",
              opacity: 0.9,
            }}
          >
            Welcome, {todo.user || "User"}!
          </h2>
        </div>

       
        <div
          style={{
            width: "60rem",
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            boxShadow: "0 6px 10px rgba(0, 0, 0, 0.1)",
            padding: "30px",
          }}
        >
          <h2
            style={{
              fontSize: "1.75rem",
              color: "#343a40",
              fontWeight: "bold",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            {todo.title || "Task Details"}
          </h2>

         
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <TaskRow
              title="Assignee"
              value={todo.user || "Not Assigned"}
              icon="fa-user"
              iconColor="#007bff"
            />
            <TaskRow
              title="Due Date"
              value={todo.due_date || "Not Set"}
              icon="fa-calendar-alt"
              iconColor="#28a745"
            />
            <TaskRow
              title="Status"
              value={todo.status || "Pending"}
              icon="fa-flag"
              iconColor="#ffc107"
            />
            <TaskRow
              title="Description"
              value={todo.description || "No Description"}
              icon="fa-file-alt"
              iconColor="#6c757d"
            />
          </div>

         
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "30px",
              alignItems: "center",
            }}
          >
            <Link
              to={`/edit/${todo.id}`}
              className="btn"
              style={{
                padding: "10px 25px",
                fontSize: "1rem",
                color: "#ffffff",
                background: "linear-gradient(to right, #007bff, #0056b3)",

                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 4px 6px rgba(0, 123, 255, 0.2)",
              }}
            >
              <i className="fa-solid fa-file-pen" /> Edit
            </Link>
            <button
              className="btn"
              style={{
                padding: "10px 25px",
                fontSize: "1rem",
                color: "#ffffff",
                background: "linear-gradient(to right, #dc3545, #b71c1c)",
                borderRadius: "6px",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 4px 6px rgba(220, 53, 69, 0.2)",
                border: "none",
              }}
              onClick={deleteTodo}
            >
              <i className="fa-solid fa-trash-can" /> Delete
            </button>
          </div>
        </div>
      </center>
    </div>
  );
}


const TaskRow = ({ title, value, icon, iconColor }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#f8f9fa",
      borderRadius: "8px",
      padding: "15px 20px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    }}
  >
    <span
      style={{
        fontSize: "1rem",
        color: "#495057",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <i className={`fa-solid ${icon}`} style={{ color: iconColor }} /> {title}
    </span>
    <span
      style={{
        fontSize: "1rem",
        color: "#343a40",
      }}
    >
      {value}
    </span>
  </div>
);

export default Detail;



