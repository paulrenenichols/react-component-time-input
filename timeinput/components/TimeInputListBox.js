import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import TimeUtilities from '../utility/TimeUtilities';


function isValidAMPM(str) {
  return !!str.match(/^([ap]m)$/ig);
}

class ListBoxItem extends Component{
  static defaultProps = {
    hours:   0,
    minutes: 0,
    selected: false,
    useTwelveHourTime: false,
  }

  static propTypes = {
    hours:   PropTypes.number.isRequired,
    minutes: PropTypes.number.isRequired
  }

  onClick = (event) => {
    const { hours, minutes, onClick } = this.props;
    onClick(event.target, { hours, minutes });
  }

  render24HourTime() {
    const { hours, minutes } = this.props;
    return TimeUtilities.twentyFourHourTimeString({ hours, minutes });
  }

  render12HourTime() {
    const { hours, minutes } = this.props;
    return TimeUtilities.twelveHourTimeString({ hours, minutes });
  }

  render() {
    const { selected, hours, minutes, useTwelveHourTime } = this.props;

    let timeString = (useTwelveHourTime) ? this.render12HourTime() : this.render24HourTime();
    return <li
            role={'option'}
            className={ selected ? 'selected' : '' }
            onClick={this.onClick}
            >
           {timeString}
           </li>;
  }
}

class TimeInputListBox extends Component {

  static defaultProps = {
    hours:   0,
    minutes: 0,
    useTwelveHourTime: false,
    timeStep: 15
  }

  static propTypes = {
    hours:   PropTypes.number.isRequired,
    minutes: PropTypes.number,
    useTwelveHourTime: PropTypes.bool,
    timeStep: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
  }

  state = {
    hours:   this.props.hours,
    minutes: this.props.minutes
  }

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ hours: nextProps.hours, minutes: nextProps.minutes });
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.selected).scrollIntoView();
  }

  componentDidUpdate() {
    //ReactDOM.findDOMNode(this.refs.selected).scrollIntoView();
  }

  onTimeClick = (target, time) => {
    console.log(`clicked time: ${time.hours}:${time.minutes}`);
    this.setState(time);
    this.props.onChange(time);
  }

  renderTimeListBoxItems() {
    const { timeStep, useTwelveHourTime, hours, minutes } = this.props;
    var timeValues = [];
    for (let loopHours = 0; loopHours < 24; loopHours++) {
      for (let loopMinutes = 0; loopMinutes < 60; loopMinutes += timeStep) {
        let selected = false;
        if((hours === loopHours) && (minutes === loopMinutes)) {
          selected = true;
        }
        timeValues.push({hours: loopHours, minutes: loopMinutes, selected, useTwelveHourTime});
      }
    }

    return  timeValues.map((time) => <ListBoxItem ref={time.selected ? 'selected' : ''} key={`${time.hours}:${time.minutes}`} {...time} onClick={this.onTimeClick}/> );
  }

  render () {

    return (
      <section className={'time-input-list-box'}>
        <header>
          <h3>Time Picker</h3>
        </header>
        <ol role={'listbox'}>
          {this.renderTimeListBoxItems()}
        </ol>
      </section>
    );
  }
}




export default TimeInputListBox;
