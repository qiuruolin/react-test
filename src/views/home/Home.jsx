import React from 'react';
import Header from '../../components/header/Header';
import {Tabs} from 'antd';
import './home.css'

const TabPane = Tabs.TabPane;

class Home extends React.Component{
    render(){
        return(
            <div className="home">
                <Header/>
                <Tabs className="tabs">
                    {
                        [1, 2, 3].forEach((item, index) => {
                            return <TabPane tab={"Tab " + (index + 1)} key="index">Something</TabPane>
                        })
                    }
                    <TabPane className="tabpane" tab="Tab 1" key="0">Content of Tab Pane 1</TabPane>
                    <TabPane className="tabpane" tab="Tab 2" key="1">Content of Tab Pane 2</TabPane>
                    <TabPane className="tabpane" tab="Tab 3" key="2">Content of Tab Pane 3</TabPane>
                </Tabs>
            </div>
        );
    }
}

export default Home;
