import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class TimeInput extends Component {

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
    displayDate: DateUtilities.quantizeDateToYearMonth(this.props.displayDate),
    selectedDate: DateUtilities.quantizeDateToYearMonthDay(this.props.selectedDate),
    minimumDate: this.props.minimumDate ? DateUtilities.quantizeDateToYearMonthDay(this.props.minimumDate) : null,
    maximumDate: this.props.maximumDate ? DateUtilities.quantizeDateToYearMonthDay(this.props.maximumDate) : null,
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
      selectedDate: DateUtilities.quantizeDateToYearMonthDay(nextProps.selectedDate),
      minimumDate: nextProps.minimumDate ? DateUtilities.quantizeDateToYearMonthDay(nextProps.minimumDate) : null,
      maximumDate: nextProps.maximumDate ? DateUtilities.quantizeDateToYearMonthDay(nextProps.maximumDate) : null,
      visible: nextProps.visible,
      calendarMonth: DateUtilities.buildMonth(this.state.displayDate)
    });
    if (!DateUtilities.areSameYearMonth(this.props.displayDate, nextProps.displayDate)) {
      this.setState({
        displayDate: nextProps.displayDate
      });
    }

  }

  componentWillUpdate(nextProps, nextState) {
    return true;
  }

  setSelectedDate = (nextSelectedDate) => {
    const { selectedDateChange } = this.props;
    this.setState({
      selectedDate: DateUtilities.quantizeDateToYearMonthDay(nextSelectedDate)
    });
    selectedDateChange(nextSelectedDate);
  }

  setDisplayDate = (nextDisplayDate) => {
    this.setState({
      displayDate: DateUtilities.quantizeDateToYearMonth(nextDisplayDate),
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

export default TimeInput;
