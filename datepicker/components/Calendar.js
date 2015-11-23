import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import MonthHeader from './MonthHeader';
import WeekHeader  from './WeekHeader';
import Weeks       from './Weeks';

import DateUtilities from '../utility/DateUtilities';

class Calendar extends Component {

  static defaultProps = {
  }

  static propTypes = {
  }

  constructor(props) {
    super(props);
  }

  render () {
    const { displayDate, visible } = this.props;
    return (
      <div className={"calendar" + (visible ? " calendar-show" : " calendar-hide")}>
        <header>
          <MonthHeader ref={"monthHeader"} displayDate={displayDate} />
          <WeekHeader />
        </header>
      </div>
    );
  }
}

// <Weeks ref={"weeks"} view={this.props.view} selected={this.props.selected} onSelect={this.props.onSelect} minDate={this.props.minDate} maxDate={this.props.maxDate} />

export default Calendar;
