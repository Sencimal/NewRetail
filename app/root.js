import React, { Component } from 'react';
//import { Provider } from 'react-redux';
import App from './components/app';
//import configureStore from './store/configureStore';
//const store = configureStore();

export default class Root extends Component {
  /**
   * provider在根组件外包一层，这样所有的子组件都能拿到state
    原理是上下文对象context传值
   */
   render() {
     return (
        //<Provider store={store}>
        <App />
      //  </Provider>
    );
   }

}
