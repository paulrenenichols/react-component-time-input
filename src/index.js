import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import date from './dateReducer';

const store = createStore(date);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
