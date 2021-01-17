import React, { Component }from 'react'
import api from '../api';

import TableContainer from '../pages/TableContainer'
import UpdateEmployee from '../components/UpdateEmployee'
import DeleteEmployee from '../components/DeleteEmployee'

class EmployeesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllEmployees().then(employees => {
        this.setState({
            employees: employees.data.data,
            isLoading: false,
            })
        })
    }

    render() {
        const { employees, isLoading } = this.state
        console.log('TCL: Employee list -> render -> employees', employees);

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            }, 
            {
                Header: 'Name',
                accessor: 'firstName',
                filterable: true,
            }, 
            {
                Header: 'Last Name',
                accessor: 'lastName',
                filterable: true,
            }, {
                Header: 'Department',
                accessor: 'department',
                filterable: true,
            }, {
                Header: 'Salary',
                accessor: 'salary',
                filterable: true,
            }, {
                Header: 'Currency',
                accessor: 'currency',
                filterable: true,
                
            }, 
        ]

        return  (
                    <TableContainer
                        data={employees}
                        columns={columns}
                        loading={isLoading}
                    />
        )
    }
}

export default EmployeesList