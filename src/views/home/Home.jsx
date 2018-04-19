import React from 'react';
import Header from '../../components/header/Header';
import './home.css'
import Footer from '../../components/footer/Footer';
import Tab from '../../components/tabs/Tab';
import NoAuthorize from '../../components/noAuthorize/noAuthorize';
import { PropTypes } from 'prop-types';
import TransitionGroup from 'react-addons-css-transition-group';

class Home extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            authorize: false
        }
    }
    componentDidMount(){
        const status = this.context.store;
        if(status.getState().username){
            this.setState({authorize: true});
        }
        this.subscribe = status.subscribe(this.onChange);
    }
    onChange = (e) => {
        let obj = this.context.store.getState();
        if(obj.username){
            this.setState({authorize: true})
        }
        else{
            this.setState({authorize: false})
        }
    }
    componentWillUnmount(){
        this.subscribe();
    }
    render(){
        const Content = this.state.authorize ? <Tab/> : <NoAuthorize type="home" history={this.props.history}/>;
        return(
            <TransitionGroup 
            transitionName="fade"
            className="home"
            transitionAppear={true} 
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}
            transitionEnterTimeout={10000} 
            transitionLeaveTimeout={200}>
                <Header type="home" title="首页" history={this.props.history}/>
                {Content}
                <Footer/>
            </TransitionGroup>
        );
    }
}
Home.contextTypes = {
    store: PropTypes.object
};

export default Home;
