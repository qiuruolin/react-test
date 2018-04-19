import React from 'react';
import {Menu, Icon} from 'antd';

const SubMenu = Menu.SubMenu;

class MenuContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            current: '1'
        }
    }
    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    }
    render(){
        return(
            <Menu
            theme="light"
            onClick={this.handleClick}
            style={{ width: "100%" }}
            defaultOpenKeys={['sub1']}
            selectedKeys={[this.state.current]}
            mode="inline"
            >
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>商城</span></span>}>
                    <Menu.Item key="1">电子商城</Menu.Item>
                    <Menu.Item key="2">家居</Menu.Item>
                    <Menu.Item key="3">美妆</Menu.Item>
                    <Menu.Item key="4">服饰</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>通知</span></span>}/>
                <SubMenu key="sub4" title={<span><Icon type="setting" /><span>关于我们</span></span>}/>
            </Menu>
        )
    }
}

export default MenuContent;