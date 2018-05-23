import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import React from 'react';
import Home from '../views/home/Home';
import User from '../views/user/User';

class RouterIndex extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route path='/user' component={User}/>
                    <Redirect from="/*" to="/home" />
                </Switch>
            </Router>
        );
    }
} 

export default RouterIndex;