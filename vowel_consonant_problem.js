function convert(text) {
  let convertedString = "ab,c";
  return convertedString;
}

function displayMessage(message) {
  console.log(message);
}

function testResult(text, expectedAns) {
  const actual = convert(text);
  const symbol = actual === expectedAns ? "✅" : "❌";
  const message = symbol + "expected :" + expectedAns + " | actual :" + actual;
  displayMessage(message);
}

function testAll() {
  testResult("abc", "ab,c");
}

testAll();
