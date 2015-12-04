import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import TimeUtilities, { timeValueToTwoDigitString } from '../utility/TimeUtilities';

import NumberInput from './NumberInput';

function isValidAMPM(str) {
  return !!str.match(/^([ap]m)$/ig);
}

class TimeInputText extends Component {

  static defaultProps = {
    hours:   0,
    minutes: 0,
    seconds: 0,
    ampm: 'am',
    useTwelveHourTime: false
  }

  static propTypes = {
    hours:   PropTypes.number.isRequired,
    minutes: PropTypes.number,
    seconds: PropTypes.number,
    ampm: PropTypes.string,
    useTwelveHourTime: PropTypes.bool
  }

  state = {
    hours:   this.props.hours,
    minutes: this.props.minutes,
    seconds: this.props.seconds,
    ampm: this.props.ampm,
    useTwelveHourTime: this.props.useTwelveHourTime
  }

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
  }

  onHoursChange = (hours) => {
    console.log('onHoursChange hours ', hours);
    this.setState({ hours });
  }

  onMinutesChange = (minutes) => {
    console.log('onMinutesChange minutes ', minutes);
    this.setState({ minutes });
  }

  onSecondsChange = (seconds) => {
    console.log('onSecondsChange seconds ', seconds);
    this.setState({ seconds });
  }

  onAMPMChange = (event) => {
    console.log('onAMPMChange ampm ', event.target.value);
    this.setState({ ampm: event.target.value });
  }

  render () {
    const { hours, minutes, seconds, ampm, useTwelveHourTime } = this.state;

    var ampmInput;
    if (useTwelveHourTime) {
      ampmInput = <input type={'text'} value={ampm} maxLength={'2'} onChange={this.onAMPMChange} />;
    }

    return (
      <div className={'time-input-text'}>
        <NumberInput enableZeroFill={true} value={hours} minValue={0} maxValue={23} maxLength={2} onChange={this.onHoursChange} />
        <span>:</span>
        <NumberInput enableZeroFill={true} value={minutes} minValue={0} maxValue={59} maxLength={2} onChange={this.onMinutesChange} />
        <span>:</span>
        <NumberInput enableZeroFill={true} value={seconds} minValue={0} maxValue={59} maxLength={2} onChange={this.onSecondsChange} />
        {ampmInput}
      </div>
    );
  }
}




export default TimeInputText;
