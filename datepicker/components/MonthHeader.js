import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import DateUtilities from '../utility/DateUtilities';

class MonthHeader extends Component {

  static defaultProps = {}

  static propTypes = {
    displayDate: PropTypes.instanceOf(Date).isRequired
  }

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate() {

  }

  render () {
    const { displayDate } = this.props;
    return (
      <div className={"month-header"}>
        <button className={""} >{String.fromCharCode(9664)}</button>
        <h3>{DateUtilities.toMonthYearString(displayDate)}</h3>
        <button className={""} >{String.fromCharCode(9654)}</button>
      </div>
    );
  }
}

export default MonthHeader;
