import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../style/style.css'


class SideBar extends Component {
    render() {
        return (
            <div className="ui secondary vertical menu">
 
                <Link to="/" className="active item">
                    Home
                </Link>
                <Link to="/employees/list" className="item" >
                    List of employees
                </Link>
                <Link to="/employees/add" className="item">
                    Add an employee
                </Link>
            
            </div>

            
        )
    }
}

export default SideBar