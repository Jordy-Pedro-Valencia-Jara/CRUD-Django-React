import axios from "axios";
const apiURL=axios.create({
    baseURL:'http://localhost:8000/tasks/api/v1/tasks/',
})
export const getAllTasks=()=>apiURL.get('/');
export const getTask=(id)=>apiURL.get(`/${id}/`);
export const addTask=(tasks)=>apiURL.post('/',tasks);
export const DeleteTask=(id)=>apiURL.delete(`/${id}/`);
export const updateTask=(id,task)=>apiURL.put(`/${id}/`,task);