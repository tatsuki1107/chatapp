import React from "react"

import Login from "./Login"
import SignUp from "./SignUp"
import Room from "./Room"

import { AuthProvider } from "./AuthService"
import LoggedInRoute from "./LoggedInRoute"

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <LoggedInRoute exact path='/' component={Room} />
                    <Route exact path='/Login' component={Login} />
                    <Route exact path='/SignUp' component={SignUp} />
                </Switch>
            </Router>
        </AuthProvider >

    )
}

export default App