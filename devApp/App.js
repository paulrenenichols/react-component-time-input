import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { TimeInput } from '../timeinput/index';

function mapStateToProps(state) {
  return {
    time: state.time
  };
}

class App extends Component {

  render() {
    const { date, selectedDateChange } = this.props;
    return (
      <div>
        <input type={"text"} value={''} readOnly></input>
        <TimeInput visible={true} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
