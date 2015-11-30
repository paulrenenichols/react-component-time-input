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
    displayDate: PropTypes.instanceOf(Date).isRequired,
    selectedDate: PropTypes.instanceOf(Date).isRequired,
    visible: PropTypes.bool.isRequired,
    minimumDate: PropTypes.instanceOf(Date),
    maximumDate: PropTypes.instanceOf(Date),
    calendarMonth: PropTypes.array.isRequired,
    setSelectedDate: PropTypes.func.isRequired,
    setDisplayDate: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
  }

  render () {
    const { displayDate, visible } = this.props;
    return (
      <div className={"calendar" + (visible ? " calendar-show" : " calendar-hide")}>
        <header>
          <MonthHeader ref={"monthHeader"} {...this.props} />
          <WeekHeader />
        </header>
        <Weeks {...this.props} />
      </div>
    );
  }
}


export default Calendar;
