import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import TimeUtilities, { timeValueToTwoDigitString } from '../utility/TimeUtilities';


function isValidAMPM(str) {
  return !!str.match(/^([ap]m)$/ig);
}

class ListBoxItem extends Component{
  static defaultProps = {
    hours:   0,
    minutes: 0,
    ampm: 'am',
    selected: false
  }

  static propTypes = {
    hours:   PropTypes.number.isRequired,
    minutes: PropTypes.number.isRequired,
    ampm: PropTypes.string,
    selected: PropTypes.bool,
    onClick: PropTypes.func.isRequired
  }

  onClick = (event) => {
    const { hours, minutes, onClick } = this.props;
    onClick(event.target, { hours, minutes });
  }

  render() {
    const { selected, hours, minutes, onChange } = this.props;
    return <li
            role={'option'}
            className={ selected ? 'selected' : '' }
            onClick={this.onClick}
            >
           {(hours < 10) ? ('0' + hours) : hours}:{(minutes < 10) ? ('0' + minutes) : minutes}
           </li>;
  }
}

class TimeInputListBox extends Component {

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

  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.selected).scrollIntoView();
  }

  componentDidUpdate() {
    //ReactDOM.findDOMNode(this.refs.selected).scrollIntoView();
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

  onTimeClick = (target, time) => {
    console.log(`clicked time: ${time.hours}:${time.minutes}`);
    this.setState(time);
  }

  render () {
    const { hours, minutes, seconds, ampm, useTwelveHourTime } = this.state;

    // var ampmInput;
    // if (useTwelveHourTime) {
    //   ampmInput = <input type={'text'} value={ampm} maxLength={'2'} onChange={this.onAMPMChange} />;
    // }

    var timeSlots = [];
    for (let loopHours = 0; loopHours < 24; loopHours++) {
      for (let loopMinutes = 0; loopMinutes < 60; loopMinutes += 15) {
        let selected = false;
        if((hours === loopHours) && (minutes === loopMinutes)) {
          selected = true;
        }
        timeSlots.push({hours: loopHours, minutes: loopMinutes, selected});
      }
    }

    return (
      <div className={'time-input-list-box'}>
        <header>
          <h3>Time Picker</h3>
        </header>
        <ol role={'listbox'}>
          {timeSlots.map((time) => <ListBoxItem ref={time.selected ? 'selected' : ''} key={`${time.hours}:${time.minutes}`} {...time} onClick={this.onTimeClick}/> )}
        </ol>
      </div>
    );
  }
}




export default TimeInputListBox;
