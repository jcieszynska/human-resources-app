import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from './Logo'




const Nav = styled.nav.attrs({
    className: "ui top attached secondary menu"
})`
    margin-bottom: 20 px;

`

class NavBar extends Component {
    render() {
        return (

            <Nav>            
                <Logo />
                <div className="right menu">
                    <div className="ui search">
                        <div className="ui icon input">
                        <input className="prompt" type="text" placeholder="Search employees..." />
                        <i className="search icon"></i>
                        </div>
                        <div className="results"></div>
                    </div>
                </div>              
            </Nav>

        )
    }
}

export default NavBar