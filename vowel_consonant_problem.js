function isVowel(charecter) {
  return charecter === 'a' || charecter === 'e' || charecter === 'i' || charecter === 'o' || charecter === 'u';
}

function isConsonant(charecter) {
  return !isVowel(charecter);
}

function convert(text) {
  let convertedString = text[0];
  let convertedSubstring = "";

  if (isConsonant(convertedString[0])) {
    for (let index = 1; index < text.length; index++) {
      if (isConsonant(convertedString[convertedString.length - 1])) {
        if (isVowel(text[index])) {
          convertedString += text[index];
        } else {
          convertedSubstring += "," + text[index];
        }
      }

      else {
        if (isConsonant(text[index])) {
          convertedString += text[index];
        } else {
          convertedSubstring += "," + text[index];
        }
      }
    }
  }

  else {
    for (let index = 1; index < text.length; index++) {
      if (isConsonant(convertedString[convertedString.length - 1])) {
        if (isVowel(text[index])) {
          convertedString += text[index];
        } else {
          convertedSubstring += "," + text[index];
        }
      }

      else {
        if (isConsonant(text[index])) {
          convertedString += text[index];
        } else {
          convertedSubstring += "," + text[index];
        }
      }
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
  testResult("apple", "ape,p,l");
  testResult("there", "tere,h");
  testResult("abyss", "ab,y,s,s");
}

testAll();
