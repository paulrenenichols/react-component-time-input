import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import DateUtilities from '../utility/DateUtilities';

class MonthHeader extends Component {

  static defaultProps = {
  }

  static propTypes = {}

  state = {
    view: new Date(this.props.view.getTime()),
    enabled: true
  }

  constructor(props) {
    super(props);
  }

  moveBackward = () => {
    var view = new Date(this.state.view.getTime());
    view.setMonth(view.getMonth()-1);
    this.move(view, false);
  }

  moveForward = () => {
    var view = new Date(this.state.view.getTime());;
    view.setMonth(view.getMonth()+1);
    this.move(view, true);
  }

  move = (view, isForward) => {
    if (!this.state.enabled) {
      return;
    }

    this.setState({
        view: view,
    });

    this.props.onMove(view, isForward);
  }

  enable = () => {
    this.setState({ enabled: true });
  }

  render () {
    const { enabled } = this.state;
    return (
      <div className={"month-header"}>
        <i className={enabled ? "" : " disabled"} onClick={this.moveBackward}>{String.fromCharCode(9664)}</i>
        <span>{DateUtilities.toMonthAndYearString(this.state.view)}</span>
        <i className={enabled ? "" : " disabled"} onClick={this.moveForward}>{String.fromCharCode(9654)}</i>
      </div>
    );
  }
}

export default MonthHeader;
