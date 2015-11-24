import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import Day from './Day';

import DateUtilities from '../utility/DateUtilities';

class Week extends Component {

  static propTypes = {
    week: PropTypes.array.isRequired,
    displayDate: PropTypes.instanceOf(Date).isRequired,
    selectedDate: PropTypes.instanceOf(Date).isRequired
  }

  render() {
    const { week } = this.props;
    return (
      <div className={"week"} {...this.props}>
        {week.map((day, index) => {
          return <Day key={index} day={day} {...this.props} />;
        })}
      </div>
    );
  }

}

export default Week;
