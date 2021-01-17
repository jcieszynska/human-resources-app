import React, { Component }from 'react'
import api from '../api';

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1'
})``

const Wrapper = styled.div.attrs({
    className: 'form-group'
})`
    margin: 0 30 px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`
class EmployeesAdd extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            department: '',
            salary: '',
            currency: '',
        }
    }

    handleChangeInputFirstName = async event => {
        const firstName = event.target.value
        this.setState({ firstName })
    }
    handleChangeInputLastName = async event => {
        const lastName = event.target.value
        this.setState({ lastName })
    }
    handleChangeInputDepartment = async event => {
        const department = event.target.value
        this.setState({ department })
    }
    handleChangeInputSalary = async event => {
        const salary = event.target.value
        this.setState({ salary })
    }
    handleChangeInputCurrency = async event => {
        const currency = event.target.value
        this.setState({ currency })
    }

    handleIncludeAnEmployee = async () => {
        const { firstName, lastName, department, salary, currency } = this.state
        const payload = { firstName, lastName, department, salary, currency }

        await api.addEmployee(payload).then(res => {
            window.alert(`Employee added successfully`)
            this.setState({ 
                firstName: '',
                lastName: '',
                department: '',
                salary: '',
                currency: ''
            })
        })
    }

    render() {
        const { firstName, lastName, department, salary, currency } = this.state 
        return (
            <Wrapper> 
                <Title>Add an employee</Title>

                <Label>First Name: </Label>
                <InputText 
                    type="text"
                    value={firstName}
                    onChange={this.handleChangeInputFirstName}
                />

                <Label>Last Name: </Label>
                <InputText 
                    type="text"
                    value={lastName}
                    onChange={this.handleChangeInputLastName}
                />

                <Label>Department: </Label>
                <InputText 
                    type="text"
                    value={department}
                    onChange={this.handleChangeInputDepartment}
                />

                <Label>Salary: </Label>
                <InputText 
                    type="number"
                    value={salary}
                    step="100"
                    min="2100"
                    onChange={this.handleChangeInputSalary}
                />

                <Label>Currency: </Label>
                <InputText 
                    type="text"
                    value={currency}
                    onChange={this.handleChangeInputCurrency}
                />

                <Button onClick={this.handleIncludeAnEmployee}>Add Employee</Button>
                <CancelButton href={'/employees/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default EmployeesAdd