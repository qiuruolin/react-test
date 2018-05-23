import React from 'react';
import HeaderContainer from '../../components/header/HeaderContainer';
import './home.css'
import Footer from '../../components/footer/Footer';
import Tab from '../../components/tabs/Tab';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            authorize: false
        }
    }
    componentWillUnmount(){
    }
    render(){
        const Content = this.state.authorize ? <Tab/> : "";
        return(
            <div>
                <HeaderContainer type="home" title="首页" history={this.props.history}/>
                {Content}
                <Footer/>
            </div>
        );
    }
}
export default Home;
