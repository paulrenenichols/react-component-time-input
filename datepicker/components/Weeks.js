import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import Week from './Week';

import DateUtilities from '../utility/DateUtilities';

class Weeks extends Component {

  static propTypes = {
    displayDate: PropTypes.instanceOf(Date).isRequired,
    selectedDate: PropTypes.instanceOf(Date).isRequired,
    visible: PropTypes.bool.isRequired,
    minimumDate: PropTypes.instanceOf(Date),
    maximumDate: PropTypes.instanceOf(Date),
    calendarMonth: PropTypes.array.isRequired,
    setSelectedDate: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { calendarMonth } = this.props;
    return (
      <div className={"weeks"}>
        {calendarMonth.map((week, index) => {
          return <Week key={index} week={week} {...this.props} />;
        })}
      </div>
    );
  }

}

export default Weeks;
