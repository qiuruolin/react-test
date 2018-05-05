import React, { Component } from 'react';
// import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import './App.css';
import RouterIndex from './router/index';
import Store from './store/index'
import * as Actions from './action/action'
import Provider from './util/Provider';

class App extends Component {
  render() {
    return (
        <Provider store={Store} action={Actions}>
          <RouterIndex/>
        </Provider>
    );
  }
}

export default App;
