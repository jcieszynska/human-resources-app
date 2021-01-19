import React, { Component }from 'react'
import styled from 'styled-components'
import apis from '../api';
import '../style/style.css'

import EmployeeUpdateModal from '../pages/modals/EmployeeUpdateModal.js'


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
    constructor(props) {
        super(props);
    
        this.state = {
          modalOpen: false
        }
      }


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
            apis.deleteEmployeeById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return (
        <div>        
        <div className="ui buttons">
        <Update 
        onClick={this.updateUser} 
        onClick={
            () => {
              this.setState({ modalOpen: true })
            }
        }
        >Edit</Update>
        
        <EmployeeUpdateModal 
        modalOpen={this.state.modalOpen}
        handleClose={
            () => {
                this.setState({ modalOpen: false })
          }
        }
        />
        <div className="or"></div>
        <Delete onClick={this.deleteUser}>Delete</Delete>
        </div>
        </div>)
    }
}

export default UpdateEmployee