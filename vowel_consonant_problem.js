function isVowel(charecter) {
  return charecter === 'a' || charecter === 'e' || charecter === 'i' || charecter === 'o' || charecter === 'u';
}

function isConsonant(charecter) {
  return !isVowel(charecter);
}

function convert(text) {
  let convertedString = text[0];
  let convertedSubstring = "";
  // console.log(convertedString);

  if (isConsonant(text[0])) {
    if (isVowel(text[1])) {
      convertedString += text[1];
    } else {
      convertedSubstring += "," + text[1];
    }

    if (isConsonant(text[2])) {
      convertedString += text[2];
    } else {
      convertedSubstring += "," + text[2];
    }

    if (isVowel(text[3])) {
      convertedString += text[3];
    } else {
      convertedSubstring += "," + text[3];
    }

    if (isConsonant(text[4])) {
      convertedString += "," + text[4];
    } else {
      convertedSubstring += "," + text[4];
    }
  }
  
  else {
    if (isConsonant(text[1])) {
      convertedString += text[1];
    } else {
      convertedSubstring += "," + text[1];
    }

    if (isVowel(text[2])) {
      convertedString += text[2];
    } else {
      convertedSubstring += "," + text[2];
    }
  }

  return convertedString + convertedSubstring;
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
  testResult("hello", "helo,l");
}

testAll();
