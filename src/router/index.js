import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import React from 'react';
import HomeContainer from '../views/home/HomeContainer';
import UserContainer from '../views/user/UserContainer';

class RouterIndex extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/home" component={HomeContainer}/>
                    <Route path='/user/:type' component={UserContainer}/>
                    <Redirect from="/*" to="/home" />
                </Switch>
            </Router>
        );
    }
} 

export default RouterIndex;