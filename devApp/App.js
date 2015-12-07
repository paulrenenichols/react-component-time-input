import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { TimeInputText, TimeInputListBox } from '../timeinput/index';

function mapStateToProps(state) {
  return {
    hours: state.time.hours,
    minutes: state.time.minutes,
    seconds: state.time.seconds
  };
}

class App extends Component {

  render() {
    console.log('App this.props: ', this.props);
    const { updateTime } = this.props;

    return (
      <div>
        <section id={'time-input-text'}>
          <span>Text Time Input</span>
          <TimeInputText {...this.props}/>
        </section>
        <section id={'time-input-list-box'}>
          <div>ListBox Time Input</div>
          <TimeInputListBox {...this.props} timeStep={5} onChange={updateTime} useTwelveHourTime/>
        </section>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
