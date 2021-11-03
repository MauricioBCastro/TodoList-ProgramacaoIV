import { Router, Route, Switch } from "react-router";

import Login from '../pages/Login.js';
import App from 'App.js'
import { history } from '../history.js'

const Routes = () => {
    <Router history={history}>
        <Switch>
            <Route component={Login} exact path="/Login"/>
            <Route component={App} exact path="/"/>
        </Switch>
    </Router>
}

 export default Routes