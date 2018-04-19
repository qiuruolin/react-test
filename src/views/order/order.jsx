import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import NoAuthorize from '../../components/noAuthorize/noAuthorize';
import { PropTypes } from 'prop-types';
import OrderContent from '../../components/order/orderContent';

class Order extends React.Component{
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
        const Content = this.state.authorize ? <OrderContent/> : <NoAuthorize type="order" history={this.props.history}/>;
        return(
            <div className="info">
                <Header type="order" title="订单" history={this.props.history}/>
                {Content}
                <Footer/>
            </div>
        );
    }
}
Order.contextTypes = {
    store: PropTypes.object
};
export default Order;
