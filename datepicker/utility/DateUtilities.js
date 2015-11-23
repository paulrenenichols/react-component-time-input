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

function countOfDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function toYearMonthDateString(date) {
  return date.getFullYear() + '-' + MonthNumberToString[date.getMonth()].short + '-' + date.getDate();
}

function toMonthYearString(date) {
  return MonthNumberToString[date.getMonth()].long + '-' + date.getFullYear();
}

function compareDatesByFullTime(dateOne, dateTwo) {
  return dateTwo.getTime() - dateOne.getTime();
}

function quantizeDateToDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function quantizeDateToMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function compareDatesByDay(dateOne, dateTwo) {
  return compareDatesByDay(quantizeDateToDay(dateOne), quantizeDateToDay(dateTwo));
}

const DateUtilities = {
  WeekNumberToString,
  MonthNumberToString,
  countOfDaysInMonth,
  toYearMonthDateString,
  toMonthYearString,
  compareDatesByFullTime,
  compareDatesByDay,
  quantizeDateToDay,
  quantizeDateToMonth
}

export default DateUtilities;
