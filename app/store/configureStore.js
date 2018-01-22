import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootRrducer from '../reducers/rootReducer';

/**
 * middleware 提供一个位于action被发起后，到达reducer之前的扩展点
  你可以利用Redux middleware来进行日支记录，创建崩溃报告，调用一部接口或者路由。
 */

  let middlewares = [];

  middlewares.push(logger);
  moddlewares.push(thunk);
/**
 * applyMiddleware时Redux的原生方法，作用是将所有中间件组成一个数组，依此执行。
 */
  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)(logger);

  export default function configureStore(initialState){
    return createStoreWithMiddleware(RootReducer, initialState);
  }
　
