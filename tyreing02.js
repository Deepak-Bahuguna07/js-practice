// const squareRoot = function (array) {
//   const squareRootArray = [];

//   for (let index = 0; index < array.length; index++) {
//     squareRootArray.push(Math.sqrt(array[index]));
//   }

//   return squareRootArray;
// }

// const oddElements = function (array) {
//   const oddArray = [];

//   for (let index = 0; index < array.length; index++) {
//     if (array[index] % 2 !== 0) {
//       oddArray.push(array[index]);
//     }
//   }

//   return oddArray;
// }

// const halfValueArray = function (array) {
//   const halfValuedArray = [];

//   for (let index = 0; index < array.length; index++) {
//     halfValuedArray.push(array[index] / 2);
//   }

//   return halfValuedArray;
// }

// const selectString = function (array) {
//   const selectedElementArray = [];

//   for (let index = 0; index < array.length; index++) {
//     if (array[index].length > 5) {
//       selectedElementArray.push(array[index]);
//     }
//   }

//   return selectedElementArray;
// }

// const toUppercase = function (array) {
//   const upperCaseArray = [];

//   for (let index = 0; index < array.length; index++) {
//     upperCaseArray.push(array[index].toUpperCase());
//   }

//   return upperCaseArray;
// }

// const longestString = function (array) {
//   let currentLongestString = "";

//   for (let index = 0; index < array.length; index++) {
//     if (array[index].length > currentLongestString.length) {
//       currentLongestString = array[index];
//     }
//   }

//   return currentLongestString;
// }

// const combineString = function (array) {
//   let combinedString = "";

//   for (let index = 0; index < array.length; index++) {
//     combinedString += array[index];
//   }

//   return combinedString;
// }

// const productOfArray = function (array) {
//   let product = 1;

//   for (let index = 0; index < array.length; index++) {
//     product *= array[index]
//   }

//   return product;
// }

// const countOdds = function (array) {
//   let count = 0;

//   for (let index = 0; index < array.length; index++) {
//     if (array[index] % 2 !== 0) {
//       count++;
//     }
//   }

//   return count;
// }

// function tyreing(task, array) {
//   return task(array);
// }

// function areEqual(array1, array2) {
//   let index = 0;

//   if (array1.length !== array2.length) {
//     return false;
//   }

//   while (index < array1.length) {
//     if (array1[index] !== array2[index]) {
//       return false;
//     }
//     index++;
//   }
//   return true;
// }

// function validateOutput(actual, expected) {
//   return areEqual(actual, expected);
// }

// function composeMessageForSuccess(testType) {
//   return `✅ ${testType}`;
// }

// function composeMessageForFail(n1, testType, actual, expected) {
//   let message = `\n❌ ${testType} \n| inputs - [${n1}]|`;
//   message += `\n| expected output - [${expected}]|`;
//   message += ` \n| actual output - [${actual}] |\n `;
//   return message;
// }

// function composeMessage(n1, actual, expected, testType) {
//   let message = "";

//   if (validateOutput(actual, expected)) {
//     message = composeMessageForSuccess(testType);
//   } else {
//     message = composeMessageForFail(n1, testType, actual, expected);
//   }

//   return message;
// }

// function testResult(testType, task, array, expected) {
//   const actual = tyreing(task, array);
//   console.log(composeMessage(array, actual, expected, testType));
// }

// function testsquareRoot() {
//   console.log();
//   console.log("squareRoot array");
//   testResult("simple squareRoot array", squareRoot, [1, 4, 9], [1, 2, 3]);
//   testResult("simple squareRoot array", squareRoot, [16, 4, 144], [4, 2, 12]);
//   console.log();
// }

// function testOddElement() {
//   console.log("odd element array");
//   testResult("filtering odd elements", oddElements, [1, 3, 5], [1, 3, 5]);
//   testResult("only odds ", oddElements, [2, 4], []);
//   testResult("filtering odd elements", oddElements, [1, 3, 4, 9], [1, 3, 9]);
//   console.log();
// }

// function testHalfValuedArray() {
//   console.log("half valued array");
//   testResult("simple array", halfValueArray, [10, 30, 4], [5, 15, 2]);
//   testResult("elements with half in decimal", halfValueArray, [1, 3, 0], [0.5, 1.5, 0]);
//   console.log();
// }

// function testStringSelection() {
//   console.log("elements with more than length five");
//   testResult("simple array", selectString, ["element", "hey"], ["element"]);
//   testResult("array with less length than five", selectString, ["hello", "hey"], []);
//   testResult("empty array", selectString, [], []);
//   console.log();
// }

// function testToUpperCase() {
//   console.log("elements in uppercase");
//   testResult("simple array", toUppercase, ["element", "hey"], ["ELEMENT", "HEY"]);
//   testResult("first letter is already in uppercase", toUppercase, ["Hello", "Hey"], ["HELLO", "HEY"]);
//   testResult("empty array", toUppercase, [], []);
//   console.log();
// }

// function testFindLongestString() {
//   console.log("find longest string in array");
//   testResult("simple array", longestString, ["element", "hey"], "element");
//   testResult("array with equal length strings", longestString, ["not", "heyy"], "heyy");
//   testResult("empty array", longestString, [], "");
//   console.log();
// }

// function testcombineStrings() {
//   console.log("combine all elements of array");
//   testResult("simple array", combineString, ["element", "hey"], "elementhey");
//   testResult("simple array", combineString, ["not", "hey"], "nothey");
//   testResult("numbers included as elements", combineString, ["not", "hey", 3], "nothey3");
//   testResult("empty array", combineString, [], "");
//   console.log();
// }

// function testProductOfArrayElements() {
//   console.log("product all elements of array");
//   testResult("simple array", productOfArray, [1, 2, 3, 4], 24);
//   testResult("array with zero", productOfArray, [1, 2, 3, 0], 0);
//   console.log();
// }

// function testCountOdds() {
//   console.log("count Odds");
//   testResult("simple array", countOdds, [1, 2, 3, 4], 2);
//   testResult("array with less length than five", countOdds, [1, 2, 3, 0], 2);
//   testResult("empty array", countOdds, [], 0);
//   console.log();
// }

// function testAll() {
//   testsquareRoot();
//   testOddElement();
//   testHalfValuedArray();
//   testStringSelection();
//   testToUpperCase();
//   testFindLongestString();
//   testcombineStrings();
//   testProductOfArrayElements();
//   testCountOdds();
// }

// testAll();

// const squareRoot = function (candidate) {
//   return Math.sqrt(candidate);
// }

// const halfValueArray = function (candidate) {
//   return candidate / 2;
// }

// const toUppercase = function (candidate) {
//   return candidate.toUpperCase();
// }

// const oddElements = function (candidate) {
//   return candidate % 2 !== 0;
// }

// const selectString = function (candidate) {
//   return candidate.length > 5;
// }

// const longestString = function (currentLongestString, currentValue) {
//   if (currentValue.length > currentLongestString.length) {
//     return currentValue;
//   }

//   return currentLongestString;
// }

// function mul(a, b) {
//   return a * b;
// }

// function add(a, b) {
//   return a + b;
// }

// function countOdds(count, candidate) {
//   if (candidate % 2 !== 0) {
//     return count + 1;
//   }
//   return count;
// }

// const reduce = function (array, initial, task) {
//   let reducedValue = initial;

//   for (let index = 0; index < array.length; index++) {
//     reducedValue = task(reducedValue, array[index]);
//   }

//   return reducedValue;
// }

// function map(task, array) {
//   let resultArray = [];

//   for (let index = 0; index < array.length; index++) {
//     resultArray.push(task(array[index]));
//   }

//   return resultArray;
// }

// function filter(task, array) {
//   let resultArray = [];

//   for (let index = 0; index < array.length; index++) {
//     if (task(array[index])) {
//       resultArray.push(array[index]);
//     }
//   }

//   return resultArray;
// }

// function areEqual(array1, array2) {
//   let index = 0;

//   if (array1.length !== array2.length) {
//     return false;
//   }

//   while (index < array1.length) {
//     if (array1[index] !== array2[index]) {
//       return false;
//     }
//     index++;
//   }
//   return true;
// }

// function validateOutput(actual, expected) {
//   return areEqual(actual, expected);
// }

// function composeMessageForSuccess(testType) {
//   return `✅ ${testType}`;
// }

// function composeMessageForFail(n1, testType, actual, expected) {
//   let message = `\n❌ ${testType} \n| inputs - [${n1}]|`;
//   message += `\n| expected output - [${expected}]|`;
//   message += ` \n| actual output - [${actual}] |\n `;
//   return message;
// }

// function composeMessage(n1, actual, expected, testType) {
//   let message = "";

//   if (validateOutput(actual, expected)) {
//     message = composeMessageForSuccess(testType);
//   } else {
//     message = composeMessageForFail(n1, testType, actual, expected);
//   }

//   return message;
// }

// function testResultMap(testType, task, array, expected) {
//   const actual = map(task, array);
//   console.log(composeMessage(array, actual, expected, testType));
// }

// function testResultReduce(testType, task, array, initial, expected) {
//   const actual = reduce(array, initial, task);
//   console.log(composeMessage(array, actual, expected, testType));
// }

// function testResultfilter(testType, task, array, expected) {
//   const actual = filter(task, array);
//   console.log(composeMessage(array, actual, expected, testType));
// }

// function testsquareRoot() {
//   console.log();
//   console.log("squareRoot array");
//   testResultMap("simple squareRoot array", Math.sqrt, [1, 4, 9], [1, 2, 3]);
//   testResultMap("simple squareRoot array", Math.sqrt, [16, 4, 144], [4, 2, 12]);
//   console.log();
// }

// function testHalfValuedArray() {
//   console.log("half valued array");
//   testResultMap("simple array", halfValueArray, [10, 30, 4], [5, 15, 2]);
//   testResultMap("elements with half in decimal", halfValueArray, [1, 3, 0], [0.5, 1.5, 0]);
//   console.log();
// }

// function testToUpperCase() {
//   console.log("elements in uppercase");
//   testResultMap("simple array", toUppercase, ["element", "hey"], ["ELEMENT", "HEY"]);
//   testResultMap("first letter is already in uppercase", toUppercase, ["Hello", "Hey"], ["HELLO", "HEY"]);
//   testResultMap("empty array", toUppercase, [], []);
//   console.log();
// }

// function testOddElement() {
//   console.log("odd element array");
//   testResultfilter("filtering odd elements", oddElements, [1, 3, 5], [1, 3, 5]);
//   testResultfilter("only odds ", oddElements, [2, 4], []);
//   testResultfilter("filtering odd elements", oddElements, [1, 3, 4, 9], [1, 3, 9]);
//   console.log();
// }

// function testStringSelection() {
//   console.log("elements with more than length five");
//   testResultfilter("simple array", selectString, ["element", "hey"], ["element"]);
//   testResultfilter("array with less length than five", selectString, ["hello", "hey"], []);
//   testResultfilter("empty array", selectString, [], []);
//   console.log();
// }

// function testFindLongestString() {
//   console.log("find longest string in array");
//   testResultReduce("simple array", longestString, ["element", "hey"], "", "element");
//   testResultReduce("array with less length than five", longestString, ["not", "hey"], "", "not");
//   testResultReduce("empty array", longestString, [], "", "");
//   console.log();
// }

// function testcombineStrings() {
//   console.log("combine all elements of array");
//   testResultReduce("simple array", add, ["element", "hey"], "", "elementhey");
//   testResultReduce("simple array", add, ["not", "hey"], "", "nothey");
//   testResultReduce("numbers included as elements", add, ["not", "hey", 3], "", "nothey3");
//   testResultReduce("empty array", add, [], "", "");
//   console.log();
// }

// function testProductOfArrayElements() {
//   console.log("product all elements of array");
//   testResultReduce("simple array", mul, [1, 2, 3, 4], 1, 24);
//   testResultReduce("array with zero", mul, [1, 2, 3, 0], 1, 0);
//   console.log();
// }

// function testCountOdds() {
//   console.log("elements with more than length five");
//   testResultReduce("simple array", countOdds, [1, 2, 3, 4], 0, 2);
//   testResultReduce("array with less length than five", countOdds, [1, 2, 3, 5], 0, 3);
//   testResultReduce("empty array", countOdds, [], 0, 0);
//   console.log();
// }

// function testAll() {
//   testsquareRoot();
//   testHalfValuedArray();
//   testToUpperCase();
//   testOddElement();
//   testStringSelection();
//   testcombineStrings();
//   testFindLongestString();
//   testProductOfArrayElements();
//   testCountOdds()
// }

// testAll();

const squareRoot = function (candidate) {
  return Math.sqrt(candidate);
}

const halfValueArray = function (candidate) {
  return candidate / 2;
}

const toUppercase = function (candidate) {
  return candidate.toUpperCase();
}

const oddElements = function (candidate, g) {
  return candidate % g !== 0;
}

const selectString = function (candidate) {
  return candidate.length > 5;
}

const longestString = function (currentLongest, Value) {
  return Value.length > currentLongest.length ? Value : currentLongest;
}

function multiply(a, b) {
  return a * b;
}

function add(a, b) {
  return a + b;
}

function countOdds(count, candidate) {
  if (candidate % 2 !== 0) {
    return count + 1;
  }
  return count;
}

function isOddPresent(candidate) {
  return candidate % 2 !== 0;
}

function isLargePresent(candidate) {
  return candidate > 100;
}

function arePositiveElements(candidate) {
  return candidate > 0;
}

function isLengthMoreThanThree(candidate) {
  return candidate.length > 3;
}

const reduced = function (array, initial, task) {
  // let reducedValue = initial;

  // for (let index = 0; index < array.length; index++) {
  //   reducedValue = task(reducedValue, array[index]);
  // }

  // return reducedValue;
  return array.reduce(task, initial);
}

function map(task, array) {
  // let resultArray = [];

  // for (let index = 0; index < array.length; index++) {
  //   resultArray.push(task(array[index]));
  // }

  // return resultArray;
  return array.map(task);
}

function filter(task, array) {
  // let resultArray = [];

  // for (let index = 0; index < array.length; index++) {
  //   if (task(array[index])) {
  //     resultArray.push(array[index]);
  //   }
  // }

  // return resultArray;
  return array.filter(task);
}

function areEqual(array1, array2) {
  let index = 0;

  if (array1.length !== array2.length) {
    return false;
  }

  while (index < array1.length) {
    if (array1[index] !== array2[index]) {
      return false;
    }
    index++;
  }
  return true;
}

function validateOutput(actual, expected) {
  if (typeof expected !== "object") {
    return actual === expected;
  }
  return areEqual(actual, expected);
}

function composeMessageForSuccess(testType) {
  return `✅ ${testType}`;
}

function composeMessageForFail(n1, testType, actual, expected) {
  let message = `\n❌ ${testType} \n| inputs - [${n1}]|`;
  message += `\n| expected output - [${expected}]|`;
  message += ` \n| actual output - [${actual}] |\n `;
  return message;
}

function composeMessage(n1, actual, expected, testType) {
  let message = "";

  if (validateOutput(actual, expected)) {
    message = composeMessageForSuccess(testType);
  } else {
    message = composeMessageForFail(n1, testType, actual, expected);
  }

  return message;
}

function testResultMap(testType, task, array, expected) {
  const actual = map(task, array);
  console.log(composeMessage(array, actual, expected, testType));
}

function testResultReduce(testType, task, array, initial, expected) {
  const actual = reduce(array, initial, task);
  console.log(composeMessage(array, actual, expected, testType));
}

function testResultfilter(testType, task, array, expected) {
  const actual = filter(task, array);
  console.log(composeMessage(array, actual, expected, testType));
}

function testResultSome(testType, task, array, expected) {
  const actual = array.some(task);
  console.log(composeMessage(array, actual, expected, testType));
}

function testResultEvery(testType, task, array, expected) {
  const actual = array.every(task);
  console.log(composeMessage(array, actual, expected, testType));
}

function testsquareRoot() {
  console.log();
  console.log("squareRoot array");
  testResultMap("simple squareRoot array", squareRoot, [1, 4, 9], [1, 2, 3]);
  testResultMap("simple squareRoot array", squareRoot, [16, 4, 144], [4, 2, 12]);
  console.log();
}

function testHalfValuedArray() {
  console.log("half valued array");
  testResultMap("simple array", halfValueArray, [10, 30, 4], [5, 15, 2]);
  testResultMap("elements with half in decimal", halfValueArray, [1, 3, 0], [0.5, 1.5, 0]);
  console.log();
}

function testToUpperCase() {
  console.log("elements in uppercase");
  testResultMap("simple array", toUppercase, ["element", "hey"], ["ELEMENT", "HEY"]);
  testResultMap("first letter is already in uppercase", toUppercase, ["Hello", "Hey"], ["HELLO", "HEY"]);
  testResultMap("empty array", toUppercase, [], []);
  console.log();
}

function testOddElement() {
  console.log("odd element array");
  testResultfilter("filtering odd elements", oddElements, [1, 3, 5], [1, 3, 5]);
  testResultfilter("only odds ", oddElements, [2, 4], []);
  testResultfilter("filtering odd elements", oddElements, [1, 3, 4, 9], [1, 3, 9]);
  console.log();
}

function testStringSelection() {
  console.log("elements with more than length five");
  testResultfilter("simple array", selectString, ["element", "hey"], ["element"]);
  testResultfilter("array with less length than five", selectString, ["hello", "hey"], []);
  testResultfilter("array with more length than five", selectString, ["element", "select"], ["element", "select"]);
  testResultfilter("empty array", selectString, [], []);
  console.log();
}

function testFindLongestString() {
  console.log("find longest string in array");
  testResultReduce("simple array", longestString, ["element", "hey"], "", "element");
  testResultReduce("array with equal element", longestString, ["not", "hey"], "", "not");
  testResultReduce("empty array", longestString, [], "", "");
  console.log();
}

function testcombineStrings() {
  console.log("combine all elements of array");
  testResultReduce("simple array", add, ["element", "hey"], "", "elementhey");
  testResultReduce("simple array", add, ["not", "hey"], "", "nothey");
  testResultReduce("numbers included as elements", add, ["not", "hey", 3], "", "nothey3");
  testResultReduce("empty array", add, [], "", "");
  console.log();
}

function testProductOfArrayElements() {
  console.log("product all elements of array");
  testResultReduce("simple array", multiply, [1, 2, 3, 4], 1, 24);
  testResultReduce("array with zero", multiply, [1, 2, 3, 0], 1, 0);
  console.log();
}

function testCountOdds() {
  console.log("count odds");
  testResultReduce("simple array", countOdds, [1, 2, 3, 4], 0, 2);
  testResultReduce("simple array", countOdds, [1, 2, 3, 5], 0, 3);
  testResultReduce("empty array", countOdds, [], 0, 0);
  console.log();
}

// function testisOddElement() {
//   console.log("is odd present in array");
//   testResultReduce("simple array", isOddPresent, [1, 2, 3, 4], false, true);
//   testResultReduce("simple array", isOddPresent, [1, 2, 3, 5], false, true);
//   testResultReduce("no odds present", isOddPresent, [4, 2, 8, 6], false, false);
//   testResultReduce("empty array", isOddPresent, [], false, false);
//   console.log();
// }

function testisOddElement() {
  console.log("is odd present in array");
  testResultSome("simple array", isOddPresent, [1, 2, 3, 4], true);
  testResultSome("simple array", isOddPresent, [1, 2, 3, 5], true);
  testResultSome("no odds present", isOddPresent, [4, 2, 8, 6], false);
  testResultSome("empty array", isOddPresent, [], false);
  console.log();
}

// function testArePositiveNumber() {
//   console.log("are all positive elements in array");
//   testResultReduce("simple array", arePositiveElements, [1, 2, 3, 4], true, true);
//   testResultReduce("array with Infinte", arePositiveElements, [1, 23, 3, 5, Infinity], true, true);
//   testResultReduce("with negative number", arePositiveElements, [2, 2, 8, -6], true, false);
//   testResultReduce("with zero", arePositiveElements, [2, 2, 8, 0], true, false);
//   console.log();
// }

function testArePositiveNumber() {
  console.log("are all positive elements in array");
  testResultEvery("simple array", arePositiveElements, [1, 2, 3, 4], true);
  testResultEvery("array with Infinte", arePositiveElements, [1, 23, 3, 5, Infinity], true);
  testResultEvery("with negative number", arePositiveElements, [2, 2, 8, -6], false);
  testResultEvery("with zero", arePositiveElements, [2, 2, 8, 0], false);
  console.log();
}

// function testIsLargeValuePresent() {
//   console.log("is greater than 100 present");
//   testResultReduce("simple array", isLargePresent, [1, 2, 3, 400], false, true);
//   testResultReduce("no value greater than 100", isLargePresent, [1, 2, 3, 5], false, false);
//   testResultReduce("empty array", isLargePresent, [], false, false);
//   console.log();
// }

function testIsLargeValuePresent() {
  console.log("is greater than 100 present");
  testResultSome("simple array", isLargePresent, [1, 2, 3, 400], true);
  testResultSome("no value greater than 100", isLargePresent, [1, 2, 3, 5], false);
  testResultSome("empty array", isLargePresent, [], false);
  console.log();
}

// function testAreMoreThanThree() {
//   console.log("are all elements in array have length more than three ");
//   testResultReduce("simple array", isLengthMoreThanThree, ["hello", "deepak"], true, true);
//   testResultReduce("only one element ", isLengthMoreThanThree, ["hello"], true, true);
//   testResultReduce("element with less length", isLengthMoreThanThree, ["a", "b"], true, false);
//   testResultReduce("empty array", isLengthMoreThanThree, [], true, true);
//   console.log();
// }

function testAreMoreThanThree() {
  console.log("are all elements in array have length more than three ");
  testResultEvery("simple array", isLengthMoreThanThree, ["hello", "deepak"], true);
  testResultEvery("only one element ", isLengthMoreThanThree, ["hello"], true);
  testResultEvery("element with less length", isLengthMoreThanThree, ["a", "b"], false);
  testResultEvery("empty array", isLengthMoreThanThree, [], true);
  console.log();
}

function testAll() {
  testsquareRoot();
  testHalfValuedArray();
  testToUpperCase();
  testOddElement();
  testStringSelection();
  testcombineStrings();
  testFindLongestString();
  testProductOfArrayElements();
  testCountOdds();
  testisOddElement();
  testIsLargeValuePresent();
  testArePositiveNumber();
  testAreMoreThanThree();
}

testAll();