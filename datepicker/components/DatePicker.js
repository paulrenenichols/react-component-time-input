import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import Calendar from './Calendar';

import DateUtilities from '../utility/DateUtilities';

import '../styles/style.less';

class DatePicker extends Component {

  static defaultProps = {
  }

  static propTypes = {
    displayDate: PropTypes.instanceOf(Date).isRequired,
    selectedDate: PropTypes.instanceOf(Date).isRequired,
    visible: PropTypes.bool.isRequired,
    minimumDate: PropTypes.instanceOf(Date),
    maximumDate: PropTypes.instanceOf(Date)
  }

  defaultDate = new Date();

  state = {
    displayDate: DateUtilities.quantizeDateToMonth(this.props.displayDate),
    selectedDate: DateUtilities.quantizeDateToDay(this.props.selectedDate),
    minimumDate: this.props.minimumDate ? DateUtilities.quantizeDateToDay(this.props.minimumDate) : null,
    maximumDate: this.props.maximumDate ? DateUtilities.quantizeDateToDay(this.props.maximumDate) : null,
    visible: this.props.visible
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {

  }

  render () {
    return (
      <div className={"ardp-date-picker"}>
        <Calendar {...this.state}/>
      </div>
    );
  }
}

export default DatePicker;
