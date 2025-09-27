function isVowel(charecter) {
  return charecter === 'a' || charecter === 'e' || charecter === 'i' || charecter === 'o' || charecter === 'u';
}

function isConsonant(charecter) {
  return !isVowel(charecter);
}

function convert(text) {
  let currentIndex = 0;
  let convertedString = text[0];
  let convertedSubstring = "";

  if (isConsonant(text[currentIndex])) {
    currentIndex++;
    if (isVowel(text[currentIndex])) {
      convertedString += text[currentIndex];
    } else {
      convertedSubstring += "," + text[currentIndex];
    }
    currentIndex++;

    if (isConsonant(text[currentIndex])) {
      convertedString += text[currentIndex];
    } else {
      convertedSubstring += "," + text[currentIndex];
    }
    currentIndex++;

    if (isVowel(text[currentIndex])) {
      convertedString += text[currentIndex];
    } else {
      convertedSubstring += "," + text[currentIndex];
    }
    currentIndex++;

    if (isConsonant(text[currentIndex])) {
      convertedString += "," + text[currentIndex];
    } else {
      convertedSubstring += "," + text[currentIndex];
    }
  }

  else {
    currentIndex++;
    if (isConsonant(text[currentIndex])) {
      convertedString += text[currentIndex];
    } else {
      convertedSubstring += "," + text[currentIndex];
    }
    currentIndex++;

    if (isVowel(text[currentIndex])) {
      convertedString += text[currentIndex];
    } else {
      convertedSubstring += "," + text[currentIndex];
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
}

testAll();
