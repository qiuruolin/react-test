import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import RouterIndex from './router/index';
import { Provider } from 'react-redux';
import store from './store/store';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <RouterIndex/>
        </Provider>
    );
  }
}

export default App;
