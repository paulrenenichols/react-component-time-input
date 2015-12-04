import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import time from './timeReducer';
import { timeUpdate } from './timeActions';

import './main.less';
import '../timeinput/styles/TimeInput.less';

export const rootReducer = combineReducers({
  time
});

const store = createStore(rootReducer);

store.dispatch(timeUpdate({
  hours: 22,
  minutes: 30,
  seconds: 0
}));

var updateTime = (time) => { store.dispatch(timeUpdate(time)) };

window.store = store;

render(
  <Provider store={store}>
    <App updateTime />
  </Provider>,
  document.getElementById('root')
);
