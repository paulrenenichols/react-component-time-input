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

function countOfDaysInMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
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

function compareDatesByYearMonthDay(dateOne, dateTwo) {
  return compareDatesByFullTime(quantizeDateToYearMonthDay(dateOne), quantizeDateToYearMonthDay(dateTwo));
}

function compareDatesByYearMonth(dateOne, dateTwo) {
  return compareDatesByFullTime(quantizeDateToYearMonth(dateOne), quantizeDateToYearMonth(dateTwo));
}

function areSameYearMonthDay(dateOne, dateTwo) {
  return DateUtilities.compareDatesByYearMonthDay(dateOne, dateTwo) === 0;
}

function areSameYearMonth(dateOne, dateTwo) {
  return DateUtilities.compareDatesByYearMonth(dateOne, dateTwo) === 0;
}

function quantizeDateToYearMonthDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function quantizeDateToYearMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function cloneDate(date) {
  return new Date(date.getTime());
}

function addDaysToDate(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
}

function addMonthsToDate(date, months) {
  return new Date(date.getFullYear(), date.getMonth() + months, date.getDate());
}

function getFirstDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function getSundayBeforeOrOnFirstDayOfMonth(date) {
  const firstDayOfMonth = getFirstDayOfMonth(date);
  const dayOfWeekOfFirstDayOfMonth = firstDayOfMonth.getDay();
  return addDaysToDate(firstDayOfMonth, -dayOfWeekOfFirstDayOfMonth);
}

function getSundaysInMonth(date) {
  var sundays = [];
  var sunday = getSundayBeforeOrOnFirstDayOfMonth(date);
  const sundaysUpperLimit = new Date(date.getFullYear(), date.getMonth() + 1, 1);
  while (compareDatesByFullTime(sunday, sundaysUpperLimit) > 0) {
    sundays.push(sunday);
    sunday = addDaysToDate(sunday, 7);
  }
  return sundays;
}

function buildMonth(date) {
  var sundays = getSundaysInMonth(date);
  return sundays.map(function (currentSunday) {
    var week = [];
    var currentDay = cloneDate(currentSunday);
    var nextSunday = addDaysToDate(currentSunday, 7);
    while (compareDatesByFullTime(currentDay, nextSunday) > 0) {
      week.push(currentDay);
      currentDay = addDaysToDate(currentDay, 1);
    }
    return week;
  });
}

const DateUtilities = {
  WeekNumberToString,
  MonthNumberToString,
  countOfDaysInMonth,
  toYearMonthDateString,
  toMonthYearString,
  compareDatesByFullTime,
  compareDatesByYearMonthDay,
  compareDatesByYearMonth,
  areSameYearMonthDay,
  areSameYearMonth,
  quantizeDateToYearMonthDay,
  quantizeDateToYearMonth,
  cloneDate,
  addDaysToDate,
  addMonthsToDate,
  getFirstDayOfMonth,
  getSundayBeforeOrOnFirstDayOfMonth,
  getSundaysInMonth,
  buildMonth
}

window.DateUtilities = DateUtilities;

export default DateUtilities;
