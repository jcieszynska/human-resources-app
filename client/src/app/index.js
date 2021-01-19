import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import { NavBar, SideBar } from '../components'
import { EmployeesList, EmployeesAdd, EmployeesUpdate} from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
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
                    {/* <div className="field">
                    <div className="ui search">
                        <div className="ui icon input">
                        <input className="prompt" type="text" placeholder="Search employees..." />
                        <i className="search icon"></i>
                        </div>
                        <div className="results"></div>
                    </div>
                    </div> */}
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
        </Router>
    )
}

export default App