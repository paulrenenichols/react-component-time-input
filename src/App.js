import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { DatePicker, DateUtilities } from '../datepicker/index';

function mapStateToProps(state) {
  return {
    date: state.date
  };
}

class App extends Component {

  render() {
    const { date } = this.props;
    return (
      <div>
        <input type={"text"} className={"date-picker-trigger"} value={DateUtilities.toYearMonthDateString(date)} readOnly></input>
        <DatePicker visible={true} displayDate={date} selectedDate={date} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
