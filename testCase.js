function validateOutput(actual, expected) {
  return actual === expected;
}

function composeMessageForSuccess(testType) {
  return `✅ ${testType}`;
}

function composeMessageForFail(inputs, actual, expected) {
  let message = inputs + `\n| expected output - [${expected}]|`;
  message += ` \n| actual output - [${actual}] |\n `;
  return message;
}

function composeMessage(inputs, testType, actual, expected) {
  let message = "";
  
  if (validateOutput(actual, expected)) {
    message = composeMessageForSuccess(testType);
  } else {
    message = composeMessageForFail(inputs, actual, expected);
  }
  
  return message;
}

function testResult(testType, firstTerm, diffrence, numberOfTerm, expected) {
  const actual = sumOfAP(firstTerm, diffrence, numberOfTerm);
  let inputs = `\n❌ ${testType} \n`;
  inputs += `| inputs - [${firstTerm}] [${diffrence}] [${numberOfTerm}]|`;
  console.log(composeMessage(inputs, testType, actual, expected));
}

function testAll() {
  testResult("when input is a simple Ap", 1, 1, 10, 55);
}

testAll();
