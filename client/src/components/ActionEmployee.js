import React, { Component }from 'react'
import styled from 'styled-components'
import api from '../api';
import '../style/style.css'


const Update = styled.div.attrs({
    className: 'ui button',

}
)`
    color: #9382BD;
    cursor: pointer;

`
const Delete = styled.div.attrs({
    className: 'ui button'
})`
    cursor: pointer;
`


class UpdateEmployee extends Component {
    updateUser = event => {
        event.preventDefault();

        window.location.href = `/employees/edit/${this.props.id}`
    }

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
        return (
        <div className="ui buttons">
        <Update onClick={this.updateUser} >Edit</Update>
        <div className="or"></div>
        <Delete onClick={this.deleteUser}>Delete</Delete>
        </div>)
    }
}

export default UpdateEmployee