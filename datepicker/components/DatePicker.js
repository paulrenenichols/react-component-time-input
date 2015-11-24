import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import Calendar from './Calendar';

import DateUtilities from '../utility/DateUtilities';

class DatePicker extends Component {

  static defaultProps = {
  }

  static propTypes = {
    displayDate: PropTypes.instanceOf(Date).isRequired,
    selectedDate: PropTypes.instanceOf(Date).isRequired,
    visible: PropTypes.bool.isRequired,
    minimumDate: PropTypes.instanceOf(Date),
    maximumDate: PropTypes.instanceOf(Date),
    selectedDateChange: PropTypes.func
  }

  defaultDate = new Date();

  state = {
    displayDate: DateUtilities.quantizeDateToMonth(this.props.displayDate),
    selectedDate: DateUtilities.quantizeDateToDay(this.props.selectedDate),
    minimumDate: this.props.minimumDate ? DateUtilities.quantizeDateToDay(this.props.minimumDate) : null,
    maximumDate: this.props.maximumDate ? DateUtilities.quantizeDateToDay(this.props.maximumDate) : null,
    visible: this.props.visible,
    calendarMonth: DateUtilities.buildMonth(this.props.displayDate)
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      displayDate: DateUtilities.quantizeDateToMonth(nextProps.displayDate),
      selectedDate: DateUtilities.quantizeDateToDay(nextProps.selectedDate),
      minimumDate: nextProps.minimumDate ? DateUtilities.quantizeDateToDay(nextProps.minimumDate) : null,
      maximumDate: nextProps.maximumDate ? DateUtilities.quantizeDateToDay(nextProps.maximumDate) : null,
      visible: nextProps.visible,
      calendarMonth: DateUtilities.buildMonth(nextProps.displayDate)
    });
  }

  componentWillUpdate(nextProps, nextState) {
    return true;
  }

  setSelectedDate = (nextSelectedDate) => {
    const { selectedDateChange } = this.props;
    this.setState({
      selectedDate: DateUtilities.quantizeDateToDay(nextSelectedDate)
    });
    selectedDateChange(nextSelectedDate);
  }

  setDisplayDate = (nextDisplayDate) => {
    this.setState({
      displayDate: DateUtilities.quantizeDateToMonth(nextDisplayDate),
      calendarMonth: DateUtilities.buildMonth(nextDisplayDate)
    });
  }

  render () {
    return (
      <section className={"date-picker"}>
        <Calendar {...this.state} setDisplayDate={this.setDisplayDate} setSelectedDate={this.setSelectedDate}/>
      </section>
    );
  }
}

export default DatePicker;
