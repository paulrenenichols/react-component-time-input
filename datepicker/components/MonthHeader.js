import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import DateUtilities from '../utility/DateUtilities';

class MonthHeader extends Component {

  static defaultProps = {}

  static propTypes = {
    displayDate: PropTypes.instanceOf(Date).isRequired,
    setDisplayDate: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
  }

  displayPreviousMonth = () => {
    const { setDisplayDate, displayDate } = this.props;
    setDisplayDate(DateUtilities.addMonthsToDate(displayDate, -1));
  }

  displayNextMonth = () => {
    const { setDisplayDate, displayDate } = this.props;
    setDisplayDate(DateUtilities.addMonthsToDate(displayDate, 1));
  }

  render () {
    const { displayDate } = this.props;
    return (
      <div className={"month-header"}>
        <button onClick={() => this.displayPreviousMonth()} className={""} >{String.fromCharCode(9664)}</button>
        <h3>{DateUtilities.toMonthYearString(displayDate)}</h3>
        <button onClick={() => this.displayNextMonth()} className={""} >{String.fromCharCode(9654)}</button>
      </div>
    );
  }
}

export default MonthHeader;
