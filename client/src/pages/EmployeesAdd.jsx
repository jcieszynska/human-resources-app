import React, { Component }from 'react'
import api from '../api';

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h3',
})``

const Wrapper = styled.div.attrs({
    className: 'ui form',
})`
    margin: 0 350px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'ui transparent',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `ui primary button`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `ui negative button`,
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
                <div class="ui divider"></div>
                <Label>Name:  </Label>
                <InputText 
                    placeholder="First Name"
                    type="text"
                    value={firstName}
                    onChange={this.handleChangeInputFirstName}
                />
                <InputText 
                    placeholder="Last Name"
                    type="text"
                    value={lastName}
                    onChange={this.handleChangeInputLastName}
                />
                

                <Label>Department: </Label>
                <InputText 
                    placeholder="e.g. Marketing"
                    type="text"
                    value={department}
                    onChange={this.handleChangeInputDepartment}
                />

                <Label>Salary: </Label>
                <InputText 
                    placeholder="Min. 2100"
                    type="number"
                    value={salary}
                    step="100"
                    min="2100"
                    onChange={this.handleChangeInputSalary}
                />

                <Label>Currency: </Label>
                <InputText 
                    placeholder="PLN preffered"
                    type="text"
                    value={currency}
                    onChange={this.handleChangeInputCurrency}
                />
                <div className="ui buttons">
                <Button onClick={this.handleIncludeAnEmployee}>Add an employee</Button>
                <div className="or"></div>
                <CancelButton href={'/employees/list'}>Cancel</CancelButton>
                </div>
            </Wrapper>
        )
    }
}

export default EmployeesAdd