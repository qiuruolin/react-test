import React from 'react';
import TransitionGroup from 'react-addons-css-transition-group';
import './menu.css';
import MenuHeader from '../../components/menu/menuHeader';
import MenuContent from '../../components/menu/MenuContent';


class MenuSelf extends React.Component{
    render(){
        return(
            <TransitionGroup transitionName="fade" transitionEnterTimeout={10000} transitionLeaveTimeout={200}>
                <MenuHeader history={this.props.history}/>
                <MenuContent/>
            </TransitionGroup>
        )
    }
}

export default MenuSelf;