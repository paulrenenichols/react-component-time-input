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
    seconds: this.props.seconds
  }

  constructor(props) {
    super(props);
  }

  componentWillUpdate(nextProps, nextState) {
    return true;
  }

  onHoursChange = (event) => {
    console.log('hours ', event.target.value);
    this.setState({ hours: event.target.value });
  }

  onMinutesChange = (event) => {
    console.log('minutes ', event.target.value);
    this.setState({ minutes: event.target.value });
  }

  onSecondsChange = (event) => {
    console.log('seconds ', event.target.value);
    this.setState({ seconds: event.target.value });
  }

  render () {
    const { hours, minutes, seconds } = this.state;
    return (
      <div className={'time-input'}>
        <input type={'text'} value={hours}   maxLength={'2'} onChange={this.onHoursChange} />
        <span>:</span>
        <input type={'text'} value={minutes} maxLength={'2'} onChange={this.onMinutesChange} />
        <span>:</span>
        <input type={'text'} value={seconds} maxLength={'2'} onChange={this.onSecondsChange} />
      </div>
    );
  }
}

export default TimeInput;
