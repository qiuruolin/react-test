import React from 'react';
import {Tabs} from 'antd';

const TabPane = Tabs.TabPane;

class Tab extends React.Component{
    render(){
        return(
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
        );
    }
}

export default Tab;
