import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

function padValue(value, width, padCharacter = '0') {
  value = value + '';
  return value.length >= width ? value : new Array(width - value.length + 1).join(padCharacter) + value;
}

function isIntegerString(str) {
  str = '' + str;
  return !!str && !!str.match(/^\d*$/g);
}

function sanitizeIntegerInput(str, fallBackValue = null) {
  return isIntegerString(str) ? parseInt(str) : fallBackValue;
}

class NumberInput extends Component {

  static defaultProps = {
    value: 0,
    minValue: null,
    maxValue: null,
    maxLength: null,
    enableZeroFill: false,
  }

  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    onChange: PropTypes.func.isRequired,
    minValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    maxValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    maxLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    enableZeroFill: PropTypes.bool
  }

  state = this.mapPropsToComponentState(this.props);

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.mapPropsToComponentState(nextProps));
  }

  mapPropsToComponentState(props) {
    return {
      numericalValue: sanitizeIntegerInput(props.value),
      stringValue: this.addZeroFill(props.value),
      minValue: sanitizeIntegerInput(props.minValue),
      maxValue: sanitizeIntegerInput(props.maxValue),
      maxLength: sanitizeIntegerInput(props.maxLength),
      enableZeroFill: props.enableZeroFill,
      inputIsValid: this.isValid(props.value),
    }
  }

  addZeroFill(value) {
    const { maxLength, enableZeroFill } = this.props;
    return (enableZeroFill && sanitizeIntegerInput(maxLength)) ? padValue(value, maxLength) : '' + value;
  }

  isValid(str) {
    var minValue = sanitizeIntegerInput(this.props.minValue);
    var maxValue = sanitizeIntegerInput(this.props.maxValue);
    var number = sanitizeIntegerInput(str);

    if (number === null) {
      return false;
    }
    else if ((minValue !== null) && (number < minValue)) {
      return false;
    }
    else if ((maxValue !== null) && (number > maxValue)) {
      return false;
    }
    else {
      return true;
    }
  }

  onChange = (event) => {
    const stringValue = event.target.value;
    const inputIsValid = this.isValid(stringValue);
    const numericalValue = sanitizeIntegerInput(stringValue);

    this.setState({
      inputIsValid,
      stringValue,
      numericalValue
    });

    if (!inputIsValid) {
      event.target.select();
    }
  }

  onFocus = (event) => {
    event.target.select();
  }

  onBlur = (event) => {
    const { inputIsValid, numericalValue, stringValue, enableZeroFill, maxLength } = this.state;
    if (inputIsValid) {
      this.props.onChange(numericalValue);
      this.setState({
        value: (this.props.enableZeroFill && this.props.maxLength) ? padValue(numericalValue, maxLength) : '' + this.state.stringValue
      });
    }
  }

  render () {
    const { inputIsValid, stringValue, maxLength } = this.state;

    return (
      <input
        className={inputIsValid ? 'number-input' : 'number-input invalid'}
        type={'text'}
        value={stringValue}
        maxLength={maxLength}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onChange={this.onChange} />
    );
  }
}

export default NumberInput;
