import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import date from './dateReducer';
import { dateUpdate } from './dateActions';

import '../datepicker/styles/DatePicker.less';

export const rootReducer = combineReducers({
  date
});

const store = createStore(rootReducer);

store.dispatch(dateUpdate(new Date()));

var updateSelectedDate = (date) => { store.dispatch(dateUpdate(date)) };

window.store = store;

render(
  <Provider store={store}>
    <App selectedDateChange={updateSelectedDate}/>
  </Provider>,
  document.getElementById('root')
);
