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

function isDiv(year, divisor) {
  return year % divisor === 0;
}

function isLeapYear(year) {

  return isDiv(year, 400) || isDiv(year, 4) && !isDiv(year, 100);
}

function isYearEnd(date) {
  return date.slice(0, 5) === "31-12";
}

function monthEnd(date) {
  const month = parseInt(date.slice(3, 5));
  const year = parseInt(date.slice(6, date.length));

  if (month === 2) {
    return isLeapYear(year) && year !== 0 ? 29 : 28;
  }

  return month === 4 || month === 6 || month === 9 || month === 11 ? 30 : 31;
}

function isValidDate(date) {
  const month = parseInt(date.slice(3, 5));
  const day = parseInt(date.slice(0, 2));

  if (day === 0 || month === 0 || month > 12) {
    return false;
  }

  return day <= monthEnd(date);
}

function padZero(candidate, digit) {
  candidate += '';
  return candidate.padStart(digit, '0');
}

function incrementDay(date) {
  const day = parseInt(date.slice(0, 2));

  return `${padZero(day + 1, 2)}${date.slice(2, date.length)}`;
}

function incrementMonth(date) {
  const month = parseInt(date.slice(3, 5));

  return `01-${padZero(month + 1, 2)}${date.slice(5, date.length)}`;
}

function incrementYear(date) {
  const year = parseInt(date.slice(6, date.length));

  if (year !== 9999) {
    return `01-01-${padZero(year + 1, 4)}`;
  }

  return "Invalid Date";
}

function nextDate(date) {
  if (!isValidDate(date)) {
    return "Invalid Date";
  }

  if (isYearEnd(date)) {
    return incrementYear(date);
  }

  const day = parseInt(date.slice(0, 2));
  if (monthEnd(date) === day) {
    return incrementMonth(date);
  }
  return incrementDay(date);
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
  testResult("Simple increment of a month", "31-08-2021", "01-09-2021");
  testResult("simple increment of a month", "31-10-2021", "01-11-2021");
  testResult("month which is not exist", "31-14-2021", "Invalid Date");
  testResult("simple increment of a year", "31-12-2021", "01-01-2022");
  testResult("simple increment of a century", "31-12-1999", "01-01-2000");
  testResult("non leapyear year's date", "28-02-0000", "01-03-0000");
  testResult("non leapyear year's date", "29-02-2100", "Invalid Date");
  testResult("a leapyear year's date", "28-02-2024", "29-02-2024");
  testResult("a leapyear year's date", "29-02-2024", "01-03-2024");
  testResult("a leapyear year's date", "30-02-2024", "Invalid Date");
  testResult("date which contain only 0", "00-00-0000", "Invalid Date");
  testResult("date which contain 0 as year", "31-12-0000", "01-01-0001");
  testResult("date which contain 0 as month", "01-00-2034", "Invalid Date");
  testResult("date which contain 0 as day", "00-03-2034", "Invalid Date");
  testResult("date which contain 9999 as year", "31-12-9999", "Invalid Date");
}

testAll();