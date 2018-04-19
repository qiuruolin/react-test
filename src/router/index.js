import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import React from 'react';
import Home from '../views/home/Home';
import Info from '../views/info/Info';
import User from '../views/user/User';
import MenuSelf from '../views/menu/menu';

class RouterIndex extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route path="/info" component={Info}/>
                    <Route path="/user/:type" component={User}/>
                    <Route path="/menu" component={MenuSelf}/>
                    <Redirect from="/*" to="/home" />
                </Switch>
            </Router>
        );
    }
} 

export default RouterIndex;