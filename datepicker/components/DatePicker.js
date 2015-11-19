import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import Calendar from './Calendar';

import DateUtilities from '../utility/date';

import '../styles/style.css';

class DatePicker extends Component {

  static defaultProps = {
  }

  static propTypes = {}

  defaultDate = new Date();

  state = {
    view: this.props.view || this.defaultDate,
    selected: this.props.selected || this.defaultDate,
    minDate: null,
    maxDate: null,
    visible: false
  }

  constructor(props) {
    super(props);
  }

  onClickOutsideHandler = (e) => {
    if (this.state.visible && e.target.className !== "date-picker-trigger" && !this.parentsHaveClassName(e.target, "date-picker")) {

      this.hide();
    }
  };

  onSelect = (day) => {
    this.setState({ selected: day });
    this.hide();
  }

  show = () => {
    console.log('DatePicker.show()');
    this.setState({ visible: true });
  }

  hide = () => {
    console.log('DatePicker.hide()');
    this.setState({ visible: false });
  }

  parentsHaveClassName(element, className) {
    var parent = element;
    while (parent) {
      if (parent.className && parent.className.indexOf(className) > -1) {
        return true;
      }

      parent = parent.parentNode;
    }
  }

  setMinDate = (date) => {
    this.setState({ minDate: date });
  }

  setMaxDate = (date) => {
    this.setState({ maxDate: date });
  }

  componentDidMount() {
    document.addEventListener("click", this.onClickOutsideHandler);
  }

  render () {
    return (
      <div className={"ardp-date-picker"}>
        <input type={"text"} className={"date-picker-trigger"} value={DateUtilities.toString(this.state.selected)} onClick={this.show} readOnly></input>
        <Calendar {...this.state}/>
      </div>
    );
  }
}

export default DatePicker;
