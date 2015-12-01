import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import TimeUtilities from '../utility/TimeUtilities';

class TimeInput extends Component {

  static defaultProps = {
    hours: 0
  }

  static propTypes = {
    hours:   PropTypes.number.isRequired,
    minutes: PropTypes.number,
    seconds: PropTypes.number
  }

  state = {
    hours:   this.props.hours,
    minutes: this.props.minutes,
    seconds: this.props.seconds,
    timeInputChangeTimeoutID: null,
    error: false,
    value: TimeUtilities.formatTimeTwelveHour({
      hours: this.props.hours,
      minutes: this.props.minutes,
      seconds: this.props.seconds
    })
  }

  constructor(props) {
    super(props);
  }

  componentWillUpdate(nextProps, nextState) {
    return true;
  }

  updateTimeInputValue = (timeString) => {
    console.log('updateTimeInputValue(): this.state: ', this.state);
    console.log('updateTimeInputValue(): timeString: ', timeString);
    var timeObject = TimeUtilities.parseTime(timeString);
    console.log('updateTimeInputValue(): timeObject: ', timeObject, ' !!timeObject ', !!timeObject);
    if (timeObject) {
      this.setState({
        error: false,
        timeInputChangeTimeoutID: null,
        hours: timeObject.hours,
        minutes: timeObject.minutes,
        seconds: timeObject.seconds,
        value: TimeUtilities.formatTimeTwelveHour({
          hours: timeObject.hours,
          minutes: timeObject.minutes,
          seconds: timeObject.seconds
        })
      });
    }
    else {
      console.log('updateTimeInputValue(): error: ', true);
      this.setState({
        error: true,
        timeInputChangeTimeoutID: null
      });
    }
  }

  onTimeInputChange = (event) => {
    if (this.state.timeInputChangeTimeoutID) {
      clearTimeout(this.state.timeInputChangeTimeoutID);
    }

    var timeInputChangeTimeoutID = setTimeout(this.updateTimeInputValue, 1500, event.target.value);

    this.setState({
      timeInputChangeTimeoutID,
      value: event.target.value
    });
  }

  render () {
    return (
      <input style={ { backgroundColor: (this.state.error) ? 'red' : ''} } type='text' onChange={this.onTimeInputChange} value={this.state.value}/>
    );
  }
}

export default TimeInput;
