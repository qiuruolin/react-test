import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import React from 'react';
import Home from '../views/home/Home';
import Info from '../views/info/Info';
import User from '../views/user/User';

class RouterIndex extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/info" component={Info}/>
                    <Route exact path="/user" component={User}/>
                    <Redirect exact from="/" to="/home" />
                </Switch>
            </Router>
        );
    }
} 

export default RouterIndex;