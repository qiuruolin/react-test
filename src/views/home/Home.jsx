import React from 'react';
import Header from '../../components/header/Header';
import './home.css'
import Footer from '../../components/footer/Footer';
import Tab from '../../components/tabs/Tab';
import NoAuthorize from '../../components/noAuthorize/noAuthorize';
import { PropTypes } from 'prop-types';

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
            <div className="home">
                <Header title="首页" history={this.props.history}/>
                {Content}
                <Footer/>
            </div>
        );
    }
}
Home.contextTypes = {
    store: PropTypes.object
};

export default Home;
