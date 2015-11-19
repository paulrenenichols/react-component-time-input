import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import DateUtilities from '../utility/date';

class WeekHeader extends Component {
  render() {
    return (
      <div className={"week-header"}>
        <span>"Sun"</span>
        <span>"Mon"</span>
        <span>"Tue"</span>
        <span>"Wed"</span>
        <span>"Thu"</span>
        <span>"Fri"</span>
        <span>"Sat"</span>
      </div>
    );
  }
}

export default WeekHeader;
