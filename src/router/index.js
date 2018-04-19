import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import React from 'react';
import Home from '../views/home/Home';
import Order from '../views/order/order';
import User from '../views/user/User';
import MenuSelf from '../views/menu/menu';

class RouterIndex extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route path="/order" component={Order}/>
                    <Route path="/user/:type" component={User}/>
                    <Route path="/menu/:type" component={MenuSelf}/>
                    <Redirect from="/*" to="/home" />
                </Switch>
            </Router>
        );
    }
} 

export default RouterIndex;