import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { TimeInput } from '../timeinput/index';

function mapStateToProps(state) {
  return {
    hours: state.time.hours,
    minutes: state.time.minutes,
    seconds: state.time.seconds
  };
}

class App extends Component {

  render() {
    return (
      <div>
        <section id={'time-input'}>
          <span>Time Input</span>
          <TimeInput {...this.props}/>
        </section>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
