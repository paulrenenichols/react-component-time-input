import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import DateUtilities from '../utility/date';

class Calendar extends Component {

  static defaultProps = {
  }

  static propTypes = {}

  constructor(props) {
    super(props);
  }

  onMove = (view, isForward) => {
    this.refs.weeks.moveTo(view, isForward);
  }

  onTransitionEnd = () => {
    this.refs.monthHeader.enable();
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
// <Weeks ref={"weeks"} view={this.props.view} selected={this.props.selected} onTransitionEnd={this.onTransitionEnd} onSelect={this.props.onSelect} minDate={this.props.minDate} maxDate{this.props.maxDate} />

export default Calendar;
