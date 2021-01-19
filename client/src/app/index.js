import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import { NavBar, SideBar } from '../components'
import { EmployeesList, EmployeesAdd, EmployeesUpdate} from '../pages'



function App() {
    return (
        <Router>
            <NavBar />
            <div className="ui bottom attached grid">       
            <div className="ui three wide column">
            <SideBar />
            </div>
            <div className="ui thirteen wide column">
            <Switch>
                <Route path="/employees/list" exact component={EmployeesList} />
                <Route path="/employees/add" exact component={EmployeesAdd} />
                <Route
                    path="/employees/edit/:id"
                    exact
                    component={EmployeesUpdate}
                />
            <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
                <div className="ui vertical divider">Or</div>
                <div className="middle aligned row">
                <div className="column">
                    <div className="ui icon header">
                    <i className="search icon"></i>
                    Find Employee
                    </div>
                    <Link to="/employees/list" className="ui black button">
                    Go to the list
                    </Link>
                </div>
                <div className="column">
                    <div className="ui icon header">
                    <i className="user circle outline icon"></i>
                    Add New Employee
                    </div>
                    <Link to="/employees/add" className="ui black button">
                    Create
                    </Link>
                </div>
                </div>
            </div>
            </div>
            </Switch>
            </div>
            </div>
        </Router>
    )
}

export default App