import React, { Component }from 'react'
import api from '../api';


import TableContainer from '../pages/TableContainer'
import ActionEmployee from '../components/ActionEmployee'



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
            }, 
            {
                Header: 'Name',
                accessor: 'firstName',
            }, 
            {
                Header: 'Last Name',
                accessor: 'lastName',
            }, {
                Header: 'Department',
                accessor: 'department',
            }, {
                Header: 'Salary',
                accessor: 'salary',
                Footer: info => {
                    const total = React.useMemo(
                      () =>
                        info.rows.reduce((sum, row) => row.values.salary + sum, 0),
                      [info.rows]
                    )
      
                    return <>Total: {total}</>
                  },
            }, {
                Header: 'Currency',
                accessor: 'currency',
                Footer: 'PLN',
                
            }, {
                Header: 'Action',
                Cell: function(props) {
                    return (
                        <span>   
                            <ActionEmployee id={props.original}/>
                        </span>
                        
                    )
                }
            }
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