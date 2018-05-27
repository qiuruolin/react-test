import React from 'react';
import Footer from '../../components/footer/Footer';
import HeaderContainer from '../../components/header/HeaderContainer';
import NoAuthorize from '../../components/noAuthorize/noAuthorize';
import OrderContent from '../../components/order/orderContent';

class Order extends React.Component{
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
        let Content = this.state.isLogin ? <OrderContent/> : <NoAuthorize from="order" history={this.props.history}/>;
        return(
            <div>
                <HeaderContainer from="order" login={this.state.isLogin} title="订单" history={this.props.history}/>
                {Content}
                <Footer/>
            </div>
        );
    }
}

export default Order;
