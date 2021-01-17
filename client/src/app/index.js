import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
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
            </Switch>
        </Router>
    )
}

export default App