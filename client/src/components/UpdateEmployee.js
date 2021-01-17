import React, { Component }from 'react'
import styled from 'styled-components'

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`




class UpdateEmployee extends Component {
    updateUser = event => {
        event.preventDefault();

        window.location.href = `/employees/edit/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Edit</Update>
    }
}

export default UpdateEmployee