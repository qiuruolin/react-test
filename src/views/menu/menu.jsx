import React from 'react';
import TransitionGroup from 'react-addons-css-transition-group';
import './menu.css';
import MenuHeader from '../../components/menu/menuHeader';
import MenuContent from '../../components/menu/MenuContent';

class MenuSelf extends React.Component{
    render(){
        const dataComponents = [<MenuHeader type={this.props.match.params.type} history={this.props.history}/>, <MenuContent/>];
        return(
            <TransitionGroup 
            transitionName="slide-in"
            transitionAppear={true} 
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}
            transitionEnterTimeout={500} 
            transitionLeaveTimeout={500}>
                {dataComponents.map(item => (
                    <div key={dataComponents.indexOf(item)}>{item}</div>
                ))}
            </TransitionGroup>
        )
    }
}

export default MenuSelf;