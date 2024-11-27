import commonapi from "./commonapi";
 
export const userRegsiter=(data)=>{
    return commonapi("POST",data,"http://127.0.0.1:8000/usermodel/","")
}
export const userLogin=(data)=>{
    return commonapi("POST",data,"http://127.0.0.1:8000/token","")
}

export const listTodo=(header)=>{
    return commonapi("GET","",`http://127.0.0.1:8000/tomodel/`,header)
}
export const createTodo=(data,header)=>{
    return commonapi("POST",data,"http://127.0.0.1:8000/todomodel/",header)
}
export const todoDetail=(id,header)=>{
    return commonapi("GET","",`http://127.0.0.1:8000/todomodel/${id}/`,header)
}
export const todoDelete=(id,header)=>{
    return commonapi("DELETE","",`http://127.0.0.1:8000/todomodel/${id}/`,header)
}
export const todoUpdate=(id,data,header)=>{
    return commonapi("PUT",data,`http://127.0.0.1:8000/todomodel/${id}/`,header)
}

