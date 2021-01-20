import React from 'react'
import { Modal, Header, Button, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types'


import api from '../../api'
import styled from 'styled-components'

const Wrapper = styled.div.attrs({
    className: 'ui form',
})`
` 


const CancelButton = styled.a.attrs({
    className: `ui button`,
})`
    margin: 15px 15px 15px 5px;
`
const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'ui transparent',
})`
    margin: 5px;
`

class EmployeeUpdateModal extends React.Component {

    constructor(props) {
        super(props)
 
        this.state = {
            id: this.props.id,
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
    handleUpdateEmployee = async () => {
        const { id, firstName, lastName, department, salary, currency } = this.state
        const payload = { firstName, lastName, department, salary, currency }

        await api.updateEmployeeById(id, payload).then(res => {
            window.alert(`Employee updated successfully`)
            this.setState({ 
                firstName: '',
                lastName: '',
                department: '',
                salary: '',
                currency: ''
            })
        })

    }

    componentDidMount = async () => {
        const { id } = this.state
        const employee = api.getEmployeeById(id)

        this.setState({ 
            firstName: employee.firstName,
            lastName: employee.lastName,
            department: employee.department,
            salary: employee.salary,
            currency: employee.currency
        })
    }

  confirmClick = (event, data) => {

    this.props.handleClose();
  }
  
  render() {
    const { firstName, lastName, department, salary, currency } = this.state
    return (
      <Modal 
        open={this.props.modalOpen}
        size='small'
        closeOnEscape={true}
        centered={true}
      >
         <Wrapper className="ui raised centered segment">
                <Header icon="browser" content="Update an employee" />
                <div class="ui divider"></div>
                <Modal.Content>

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

                </Modal.Content>
                <Modal.Actions>
                    <div className="ui buttons">
                        <Button onClick={this.handleUpdateEmployee}>Update employee</Button>
                    <div className="or"></div>
                        <CancelButton href={'/employees/list'}>Exit</CancelButton>
                    </div>
                </Modal.Actions>
            </Wrapper>
    </Modal>
    )
  }
}

EmployeeUpdateModal.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  valueIntoModal: PropTypes.string.isRequired
}

export default EmployeeUpdateModal
