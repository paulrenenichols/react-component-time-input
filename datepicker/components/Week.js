import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import DateUtilities from '../utility/date';

class Week extends Component {

  state = {
  }

  buildDays(start) {
    var days = [new Date(start.getTime())],
        clone = new Date(start.getTime());

    for (var i = 1; i <= 6; i++) {
        clone.setDate(clone.getDate()+1);
        days.push(clone);
    }
    return days;
  }

  isOtherMonth(day) {
    return this.props.month !== day.month();
  }

  getDayClassName(day) {
    var className = "day";
    if (DateUtilities.isSameDay(day, new Date()))
        className += " today";
    if (this.props.month !== day.getMonth())
        className += " other-month";
    if (this.props.selected && DateUtilities.isSameDay(day, this.props.selected))
        className += " selected";
    if (this.isDisabled(day))
        className += " disabled";
    return className;
  }

  onSelect(day) {
    if (!this.isDisabled(day)) {
      this.props.onSelect(day);
    }
  }

  isDisabled(day) {
    var minDate = this.props.minDate,
        maxDate = this.props.maxDate;

    return (minDate && DateUtilities.isBefore(day, minDate)) || (maxDate && DateUtilities.isAfter(day, maxDate));
  }

  render() {
    var days = this.buildDays(this.props.start);
    return (
      <div className={"week"}>
        {days.map((day, index) => {
          return <div key={index} onClick={this.onSelect.bind(null, day)} className= {this.getDayClassName(day)}>{day.getDate()}</div>
        })}
      </div>
    );
  }

}

export default Week;
