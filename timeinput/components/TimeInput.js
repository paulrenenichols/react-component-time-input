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
  }

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <input type='text' value={TimeUtilities.formatTimeTwelveHour(this.state)}/>
    );
  }
}

export default TimeInput;
