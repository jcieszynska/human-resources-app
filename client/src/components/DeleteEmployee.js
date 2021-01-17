import React, { Component }from 'react'
import styled from 'styled-components'
import api from '../api';


const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`


class DeleteEmployee extends Component{
    deleteUser = event => {
        event.preventDefault();

        if (
            window.confirm(`Are you sure you want to delete the employee ${this.props.id} permanently?`, 
            )
        ) {
            api.deleteEmployeeById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

export default DeleteEmployee