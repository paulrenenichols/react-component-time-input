/*
 *
 *  TimeUtilities.js
 *
 *  2015 December 01
 *  Paul Nichols
 *  paul.rene.nichols@gmail.com
 *
 */


/*
 *  const timeParsingRegex:
 *
 *  This regular expression allows us to parse and reformat time strings.
 *
 *  '^' is the beggining of the string
 *  '$' is the end of the string
 *
 *  \s* is an unlimited amount of whitespace, so the string can begin and end width
 *      arbitrary amounts of whitespace
 *
 *  ([01]?\d|2[0-3]) first capturing group, Hours
 *    Captures one of two sets of characters ( '|' is an 'or' )
 *      [01]?\d - 1 or 2 characters, optional 0 or 1 ( '[01]?'' ) followed by any decimal ( '\d' )
 *      or
 *      2[0-3]  - 2 characters, a 2 followed by digits that can be 0, 1, 2, or 3
 *
 *  [:\.]? - Optional Separator, a '.' or a ':' can appear between groups of numbers
 *
 *  ([0-5]\d)? second capturing group, optional, Minutes
 *    captures 2 characters, one digit between 0 and 5, followed by any digit
 *
 *  [:\.]? - Optional Separator, a '.' or a ':' can appear between groups of numbers
 *
 *  ([0-5]\d)? third capturing group, optional, Seconds
 *    captures 2 characters, one digit between 0 and 5, followed by any digit
 *
 *  \s*? optional whitespace
 *
 *  ([aApP][mM])? fourth capturing group, case insensitive, AM/PM
 */
const timeParsingRegex = /^\s*([01]?\d|2[0-3])[:\.]?([0-5]\d)?[:\.]?([0-5]\d)?\s*?([aApP][mM])?\s*$/;

function parsetIntIfTruthy(string) {
  return string ? parseInt(string) : 0;
}

/*
 *
 *  This function assumes that it will get a 1 or 2 digit integer.
 *
 */
function timeValueToTwoDigitString(timeValue) {
  if (timeValue < 10) {
    return '0' + timeValue;
  }
  else {
    return ''  + timeValue;
  }
}

/*
 *  formatTimeTwelveHour(timeObject)
 *
 *  transforms a time object, like the one returned by parseTime(), in to
 *  a string in 12 hour time format
 *
 */
function formatTimeTwelveHour(timeObject) {
  var hoursString;
  var minutesString;
  var secondsString;
  var anteOrPostMeridiemString;

  // Process the hours part of the string
  if (timeObject.hours < 12) {
    anteOrPostMeridiemString = ' AM';
    if (timeObject.hours === 0) {
      hoursString = '12';
    }
    else {
      hoursString = timeValueToTwoDigitString(timeObject.hours);
    }
  }
  else if (timeObject.hours >= 12) {
    anteOrPostMeridiemString = ' PM';
    if (timeObject.hours === 12) {
      hoursString = timeValueToTwoDigitString(timeObject.hours);
    }
    else {
      hoursString = timeValueToTwoDigitString(timeObject.hours - 12);
    }
  }

  minutesString = (timeObject.minutes || (timeObject.minutes === 0)) ? (':' + timeValueToTwoDigitString( timeObject.minutes)) : ':00';
  secondsString = (timeObject.seconds || (timeObject.seconds === 0)) ? (':' + timeValueToTwoDigitString( timeObject.seconds)) : '';

  return hoursString + minutesString + secondsString + anteOrPostMeridiemString;
}


/*
 *  parseTime(timeString)
 *
 *  returns false if the timeString is not a valid time.
 *
 *  if the timeString is valid, returns an object with properties for
 *  hours, minutes, and seconds in 24 hour time format.
 */
function parseTime(timeString) {
  var matches = timeString.match(timeParsingRegex);
  if (matches) {
    var hours   = parsetIntIfTruthy(matches[1]);
    var minutes = parsetIntIfTruthy(matches[2]);
    var seconds = parsetIntIfTruthy(matches[3]);

    var anteOrPostMeridiem = matches[4] ? matches[4].toUpperCase() : matches[4];

    // Test to see if we have 'AM' or 'PM' in the string
    if (anteOrPostMeridiem) {
      if (hours > 12)  {
        return false;
      }
      else if ((anteOrPostMeridiem === 'AM') && (hours === 12)) {
        hours -= 12;
      }
      else if ((anteOrPostMeridiem === 'PM') && (hours < 12)) {
        hours += 12;
      }
    }

    return {
      hours,
      minutes,
      seconds
    }
  }
  else {
    return false;
  }
}

const TimeUtilities = {
  formatTimeTwelveHour,
  parseTime
}

window.TimeUtilities = TimeUtilities;

export default TimeUtilities;
