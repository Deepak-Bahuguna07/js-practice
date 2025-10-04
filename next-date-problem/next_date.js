/**
 * Implement the `nextDate` function below. Given a date in the format dd-mm-yyyy, 
 * it should return the next date in the same format.
 * 
 * The input date will always follow the dd-mm-yyyy format. 
 * This means the first two characters will be digits for the day (e.g., 01, 23), 
 * followed by a hyphen (-), the next two characters will be digits for the month (e.g., 01, 12), 
 * followed by another hyphen, and the remaining four characters will be digits for the year 
 * (any year between 0000 and 9999).
 * 
 * In case of an invalid date (with correct format dd-mm-yyyy), for example, "32-02-2025", 
 * return "Invalid Date".
 */

function isDivisable(year, divisor) {
  return year % divisor === 0;
}

function isLeapYearFun(year) {
  let isLeapYear = false;

  if (isDivisable(year, 4) && year !== 0) {
    isLeapYear = true;

    if (isDivisable(year, 100) && !isDivisable(year, 400)) {
      isLeapYear = false;
    }
  }
  return isLeapYear;
}

function isValidDate(date) {
  const month = date.slice(3, 5);
  const day = parseInt(date.slice(0, 2));
  const monthWith31Days = "01 03 05 07 08 10 12";
  const monthWith30Days = "04 06 09 11";

  if (monthWith31Days.includes(month)) {
    return day >= 1 && day <= 31;
  }
  if (monthWith30Days.includes(month)) {
    return day >= 1 && day <= 30;
  }
  if (month === '02') {
    if (isLeapYearFun(parseInt(date.slice(6, date.length)))) {
      return day >= 1 && day <= 29;
    }
    return day >= 1 && day <= 28;
  }
  return false;
}

function padZero(candidate, digit) {
  candidate += '';
  return candidate.padStart(digit, '0');
}

function incrementMonth(date) {
  let nextMonth = "01-";
  nextMonth = nextMonth.concat(padZero(parseInt(date.slice(3, 5)) + 1, 2));
  nextMonth = nextMonth.concat(date.slice(5, date.length));
  return nextMonth;
}

function incrementYear(date) {
  let nextYear = "01-01-";
  if (date.slice(6, date.length) !== "9999") {
    nextYear += padZero(parseInt(date.slice(6, date.length)) + 1, 4);
    return nextYear;
  }

  return "Invalid Date";
}

function incrementDay(date) {
  let nextDate = "";
  nextDate = nextDate.concat(padZero(parseInt(date.slice(0, 2)) + 1, 2));
  nextDate = nextDate.concat(date.slice(2, date.length));
  return nextDate;
}

function nextDate(date) {
  if (isValidDate(date)) {
    if (date.slice(0, 5) === "31-12") { // for year
      return incrementYear(date);
    }

    const nextDay = incrementDay(date); // for day

    if (!isValidDate(nextDay)) { // for month
      return incrementMonth(date);
    }
    return nextDay;
  }
  return "Invalid Date";
}

function validateOutput(actual, expected) {
  return actual === expected;
}

function composeMessageForSuccess(testType) {
  return `✅ ${testType}`;
}

function composeMessageForFail(candidate, testType, actual, expected) {
  let message = `\n❌ ${testType} \n  | inputs - [${candidate}]|`;
  message += `\n  | expected output - [${expected}] |`;
  message += `\n  | actual output - [${actual}] |\n`;
  return message;
}

function composeMessage(candidate, actual, expected, testType) {
  let message = "";

  if (validateOutput(actual, expected)) {
    message = composeMessageForSuccess(testType);
  } else {
    message = composeMessageForFail(candidate, testType, actual, expected);
  }

  return message;
}

function testResult(testType, candidate, expected) {
  const actual = nextDate(candidate);
  const message = composeMessage(candidate, actual, expected, testType);
  console.log(message);
}

function testAll() {
  testResult("Simple increment of a normal day", "15-03-2021", "16-03-2021");
  testResult("Simple increment of a normal day", "01-03-2021", "02-03-2021");
  testResult("day which is not exist", "29-02-2021", "Invalid Date");
  testResult("day which is not exist", "30-02-2021", "Invalid Date");
  testResult("Simple increment of a month", "31-08-2021", "01-09-2021");
  testResult("simple increment of a month", "31-10-2021", "01-11-2021");
  testResult("month which is not exist", "31-14-2021", "Invalid Date");
  testResult("simple increment of a year", "31-12-2021", "01-01-2022");
  testResult("simple increment of year", "31-12-0001", "01-01-0002");
  testResult("simple increment of year", "31-12-0171", "01-01-0172");
  testResult("simple increment of a decade", "31-12-2019", "01-01-2020");
  testResult("simple increment of a century", "31-12-2099", "01-01-2100");
  testResult("simple increment of a century", "31-12-1999", "01-01-2000");
  testResult("non leapyear year's date", "28-02-2100", "01-03-2100");
  testResult("non leapyear year's date", "29-02-2100", "Invalid Date");
  testResult("a leapyear year's date", "28-02-2024", "29-02-2024");
  testResult("a leapyear year's date", "29-02-2024", "01-03-2024");
  testResult("date which contain only 0", "00-00-0000", "Invalid Date");
  testResult("date which contain only 0", "00-00-0000", "Invalid Date");
  testResult("date which contain only 0", "31-12-0000", "01-01-0001");
  testResult("date which contain only 0", "00-03-2034", "Invalid Date");
  testResult("date which contain 9999 as year", "31-12-9999", "Invalid Date");
}

testAll();
