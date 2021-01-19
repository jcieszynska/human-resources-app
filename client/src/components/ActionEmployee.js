import React, { Component }from 'react'
import styled from 'styled-components'
import api from '../api';

const Update = styled.div.attrs({
    className: 'ui yellow button',
}
)`
    color: #ef9b0f;
    cursor: pointer;

`
const Delete = styled.div.attrs({
    className: 'ui negative button'
})`
    color: #ff0000;
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
        return (<div className="ui buttons">
        <Update onClick={this.updateUser}>Edit</Update>
        <div className="or"></div>
        <Delete onClick={this.deleteUser}>Delete</Delete>
        </div>)
    }
}

export default UpdateEmployee