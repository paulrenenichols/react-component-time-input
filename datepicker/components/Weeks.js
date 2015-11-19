import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import Week       from './Week';

import DateUtilities from '../utility/date';

class Weeks extends Component {

  state = {
    view: new Date(this.props.view.getTime()),
    other: new Date(this.props.view.getTime()),
    sliding: null
  }

  componentDidMount() {
    //ReactDOM.findDOMNode(this.refs.current).addEventListener("transitionend", this.onTransitionEnd);
  }

  onTransitionEnd() {
    this.setState({
      sliding: null,
      view: new Date(this.state.other.getTime())
    });

    this.props.onTransitionEnd();
  }

  getWeekStartDates(view) {
    view.setDate(1);
    view = DateUtilities.moveToDayOfWeek(new Date(view.getTime()), 0);

    var current = new Date(view.getTime());
    current.setDate(current.getDate()+7);

    var starts = [view],
        month = current.getMonth();

    while (current.getMonth() === month) {
      starts.push(new Date(current.getTime()));
      current.setDate(current.getDate()+7);
    }

    return starts;
  }

  moveTo(view, isForward) {
    this.setState({
        sliding: isForward ? "left" : "right",
        other: new Date(view.getTime())
    });
  }

  render() {
    return (
      <div className={"weeks"}>
        <div ref={"current"} className={"current" + (this.state.sliding ? (" sliding " + this.state.sliding) : "")}>
          {this.renderWeeks(this.state.view)}
        </div>

        <div ref={"other"} className={"other" + (this.state.sliding ? (" sliding " + this.state.sliding) : "")}>
          {this.renderWeeks(this.state.other)}
        </div>
      </div>
    );
  }

  renderWeeks(view) {
    var starts = this.getWeekStartDates(view),
        month = starts[1].getMonth();

    return (
      starts.map((start, index) => {
        return <Week key={index} start={start} month={month} selected={this.props.selected} onSelect={this.props.onSelect} minDate={this.props.minDate} maxDate={this.props.maxDate} />
      })
    );
  }
}

export default Weeks;
