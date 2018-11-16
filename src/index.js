import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import AppRouter from './routers/AppRouter';
import reducers from './reducers';
import Promise from 'redux-promise';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <AppRouter />
  </Provider>
  , document.querySelector('.container'));
