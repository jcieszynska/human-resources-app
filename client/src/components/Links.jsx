import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



class Links extends Component {
    render() {
        return (

            <div className="ui secondary menu">
                <Link to="/" className="item">
                    Home
                </Link>
                <Link to="/employees/list" className="item">
                    List of employees
                </Link>
                <Link to="/employees/add" className="item">
                    Add an employee
                </Link>
                <div className="right menu">
                    <div className="item">
                        <div className="ui icon input">
                            <input type="text" placeholder="Search..."/>
                            <i className="search link icon"></i>
                        </div>
                    </div>
                    <Link to="/" className="ui item">
                        Logout
                    </Link>
                </div>
            </div>
            
        )
    }
}

export default Links