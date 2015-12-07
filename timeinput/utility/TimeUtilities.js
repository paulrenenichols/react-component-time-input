/*
 *
 *  TimeUtilities.js
 *
 *  2015 December 01
 *  Paul Nichols
 *  paul.rene.nichols@gmail.com
 *
 */

function twelveHourTimeString(time) {
  const { hours, minutes, seconds } = time;
  let adjustedHours = (hours < 13) ? hours : hours - 12;
  if (adjustedHours === 0) {
    adjustedHours = 12;
  }
  let ampm = (hours < 12) ? 'am' : 'pm';
  let hoursString = (adjustedHours < 10) ? ('0' + adjustedHours) : '' + adjustedHours;
  let minutesString = (minutes >= 0 && minutes < 10) ? ('0' + minutes) : '' + minutes;
  let secondsString = (seconds >= 0 && seconds < 10) ? ('0' + seconds) : '' + seconds;

  let timeString = hoursString;
  if (minutes >= 0) {
    timeString += ':' + minutesString;
  }
  if (seconds >= 0) {
    timeString += ':' + secondsString;
  }

  timeString += ' ' + ampm;

  return timeString;
}

function twentyFourHourTimeString(time) {
  const { hours, minutes, seconds } = time;
  let hoursString = (hours < 10) ? ('0' + hours) : '' + hours;
  let minutesString = (minutes >= 0 && minutes < 10) ? ('0' + minutes) : '' + minutes;
  let secondsString = (seconds >= 0 && seconds < 10) ? ('0' + seconds) : '' + seconds;

  let timeString = hoursString;
  if (minutes >= 0) {
    timeString += ':' + minutesString;
  }
  if (seconds >= 0) {
    timeString += ':' + secondsString;
  }

  return timeString;
}

const TimeUtilities = {
  twelveHourTimeString,
  twentyFourHourTimeString
}

window.TimeUtilities = TimeUtilities;

export default TimeUtilities;
