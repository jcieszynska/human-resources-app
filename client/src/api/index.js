import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api'
})

export const addEmployee = payload => api.post(`/employee`, payload)
export const getAllEmployees = () => api.get(`/employees`)
export const updateEmployeeById = (id, payload) => api.put(`/employee/${id}`, payload)
export const deleteEmployeeById = id => api.delete(`/employee/${id}`)
export const getEmployeeById = id => api.get(`/employee/${id}`)

const apis = {
    addEmployee, 
    getAllEmployees, 
    updateEmployeeById, 
    deleteEmployeeById, 
    getEmployeeById,
}
 
export default apis
