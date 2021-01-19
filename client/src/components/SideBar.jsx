import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


class SideBar extends Component {
    render() {
        return (

            <div className="ui left fixed vertical menu">
                <div className="left menu">
                <Link to="/" className="item">
                    Home
                </Link>
                <Link to="/employees/list" className="item">
                    List of employees
                </Link>
                <Link to="/employees/add" className="item">
                    Add an employee
                </Link>
                </div>
            </div>
            
        )
    }
}

export default SideBar