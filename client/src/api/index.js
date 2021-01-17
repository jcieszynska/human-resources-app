import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api'
})

export const addEmployee = payload => api.post(`/employee`, payload)
export const getAllEmployees = () => api.get(`/employees`)
export const updateEmployee = (id, payload) => api.put(`/employee/${id}`, payload)
export const deleteEmployee = id => api.delete(`/employee/${id}`)
export const getEmployeeById = id => api.get(`/employee/${id}`)

const apis = {
    addEmployee, 
    getAllEmployees, 
    updateEmployee, 
    deleteEmployee, 
    getEmployeeById,
}

export default apis
