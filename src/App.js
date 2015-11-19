import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import DatePicker from '../datepicker/index';


export class App extends Component {
  render() {
    return (
      <DatePicker visible={true} selectedDate={new Date(1129, 11, 0)}/>
    );
  }
}
