import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import styled from 'styled-components'


import Logo from './Logo'





const Nav = styled.nav.attrs({
    className: "ui top attached secondary menu"
})`
    margin: 20 px;

`

class NavBar extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
    const { activeItem } = this.state
        return (
        <Menu top attached secondary menu>                     
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
            
        </Menu>
        )
    }
}

export default NavBar