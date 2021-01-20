import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import '../style/style.css'


class SideBar extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
        const { activeItem } = this.state
        return (
            <Menu  pointing secondary vertical>
            <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}>
                <Link to="/" className="item">
                    Home
                </Link>
            </Menu.Item>
            <Menu.Item
            name="list"
            active={activeItem === 'list'}
            onClick={this.handleItemClick}>
                <Link to="/employees/list" className="item" >
                    List of employees
                </Link>
            </Menu.Item>
            <Menu.Item
            name="add"
            active={activeItem === 'add'}
            onClick={this.handleItemClick}>
                <Link to="/employees/add" className="item">
                    Add an employee
                </Link>
            </Menu.Item>
            </Menu>
            
        )
    }
}

export default SideBar