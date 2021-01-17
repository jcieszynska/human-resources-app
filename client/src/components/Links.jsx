import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    Human Resources Application
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/employees/list" className="nav-link">
                                List of all employees
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/employees/add" className="nav-link">
                                Add a new employee
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links