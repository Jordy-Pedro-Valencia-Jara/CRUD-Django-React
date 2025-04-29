import axios from "axios";
const apiURL=axios.create({
    baseURL:'https://crud-django-react-1il6.onrender.com/tasks/api/v1/tasks/',
})
export const getAllTasks=(page:number=1)=>{
    return apiURL.get(`/?page=${page}`)
}
export const getTask=(id)=>apiURL.get(`/${id}/`);
export const addTask=(tasks)=>apiURL.post('/',tasks);
export const DeleteTask=(id)=>apiURL.delete(`/${id}/`);
export const updateTask=(id,task)=>apiURL.put(`/${id}/`,task);