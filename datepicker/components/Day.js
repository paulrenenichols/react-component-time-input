import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import DateUtilities from '../utility/DateUtilities';

class Day extends Component {

  static propTypes = {
    day: PropTypes.instanceOf(Date).isRequired,
    displayDate: PropTypes.instanceOf(Date).isRequired,
    selectedDate: PropTypes.instanceOf(Date).isRequired,
    minimumDate: PropTypes.instanceOf(Date),
    maximumDate: PropTypes.instanceOf(Date)
  }

  isDisabled(day) {
    const { minimumDate, maximumDate } = this.props;

    return (minimumDate && (DateUtilities.compareDatesByDay(day, minimumDate)) < 0) || (maximumDate && DateUtilities.compareDatesByDay(day, maximumDate) > 0);
  }

  getDayClassName(day) {
    const { displayDate, selectedDate } = this.props;
    var className = "day";
    if (DateUtilities.areSameDay(day, new Date())) {
      className += " today";
    }
    if (displayDate.getMonth() !== day.getMonth()) {
      className += " other-month";
    }
    if (this.props.selectedDate && DateUtilities.areSameDay(day, selectedDate)) {
      className += " selected";
    }
    if (this.isDisabled(day)) {
      className += " disabled";
    }
    return className;
  }

  render() {
    const { day } = this.props;
    return (
      <div className={this.getDayClassName(day)}>{day.getDate()}</div>
    );
  }

}

export default Day;
