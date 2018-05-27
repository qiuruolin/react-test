import React from 'react';
import HeaderContainer from '../../components/header/HeaderContainer';
import './home.css'
import Footer from '../../components/footer/Footer';
import Tab from '../../components/tabs/Tab';
import NoAuthorize from '../../components/noAuthorize/noAuthorize';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLogin: this.props.isLogin
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            isLogin: nextProps.isLogin
        });
    }
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.isLogin !== this.props.isLogin;
    }
    render(){
        let Content = this.state.isLogin ? <Tab/> : <NoAuthorize from="home" history={this.props.history}/>;
        return(
            <div>
                <HeaderContainer from="home" login={this.state.isLogin} title="首页" history={this.props.history}/>
                {Content}
                <Footer/>
            </div>
        );
    }
}
export default Home;
