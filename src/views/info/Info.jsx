import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import NoAuthorize from '../../components/noAuthorize/noAuthorize';
import { PropTypes } from 'prop-types';
import InfoContent from '../../components/info/infoContent';

class Info extends React.Component{
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
        // status.subscribe(this.onChange);
    }
    // onChange = (e) => {
    //     let obj = this.context.store.getState();
    //     if(obj.username){
    //         this.setState({authorize: true})
    //     }
    // }
    render(){
        const Content = this.state.authorize ? <InfoContent/> : <NoAuthorize history={this.props.history}/>;
        return(
            <div className="info">
                <Header title="通知" history={this.props.history}/>
                {Content}
                <Footer/>
            </div>
        );
    }
}
Info.contextTypes = {
    store: PropTypes.object
};
export default Info;
