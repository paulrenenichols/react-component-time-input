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

  onMove = (view, isForward) => {
    this.refs.weeks.moveTo(view, isForward);
  }


  render () {
    return (
      <div className={"calendar" + (this.props.visible ? " calendar-show" : " calendar-hide")}>

      </div>
    );
  }
}

// <MonthHeader ref={"monthHeader"} view={this.props.view} onMove={this.onMove} />
// <WeekHeader />
// <Weeks ref={"weeks"} view={this.props.view} selected={this.props.selected} onSelect={this.props.onSelect} minDate={this.props.minDate} maxDate={this.props.maxDate} />

export default Calendar;
