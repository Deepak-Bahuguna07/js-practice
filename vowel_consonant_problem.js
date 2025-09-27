function isVowel(charecter) {
  return charecter === 'a' || charecter === 'e' || charecter === 'i' || charecter === 'o' || charecter === 'u';
}

function isConsonant(charecter) {
  return !isVowel(charecter);
}

function convert(text) {
  let convertedString = "";

  if (isVowel(text[0])) {
    convertedString += text[0];
  }

  if (isConsonant(text[1])) {
    convertedString += text[1];
  }

  if (isVowel(text[2])) {
    convertedString += text[2];
  }

  if (isConsonant(text[2])) {
    convertedString += "," + text[2];
  }

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
