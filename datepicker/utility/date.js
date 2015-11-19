const MonthNumberToString = {
  0: {
    short: 'Jan',
    long: 'January'
  },
  1: {
    short: 'Feb',
    long: 'February'
  },
  2: {
    short: 'Mar',
    long: 'March'
  },
  3: {
    short: 'Apr',
    long: 'April'
  },
  4: {
    short: 'May',
    long: 'May'
  },
  5: {
    short: 'Jun',
    long: 'June'
  },
  6: {
    short: 'Jul',
    long: 'July'
  },
  7: {
    short: 'Aug',
    long: 'August'
  },
  8: {
    short: 'Sep',
    long: 'September'
  },
  9: {
    short: 'Oct',
    long: 'October'
  },
  10: {
    short: 'Nov',
    long: 'November'
  },
  11: {
    short: 'Dec',
    long: 'December'
  }
}

const WeekNumberToString = {
  0: {
    short: 'Sun',
    long: 'Sunday'
  },
  1: {
    short: 'Mon',
    long: 'Monday'
  },
  2: {
    short: 'Tue',
    long: 'Tuesday'
  },
  3: {
    short: 'Wed',
    long: 'Wednesday'
  },
  4: {
    short: 'Thu',
    long: 'Thursday'
  },
  5: {
    short: 'Fri',
    long: 'Friday'
  },
  6: {
    short: 'Sat',
    long: 'Saturday'
  },
}

function numberOfDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function toString(date) {
  return date.getFullYear() + '-' + MonthNumberToString[date.getMonth()].short + '-' + date.getDate();
}

const DateUtilities = {
  WeekNumberToString,
  MonthNumberToString,
  numberOfDaysInMonth,
  toString
}

export default DateUtilities;
