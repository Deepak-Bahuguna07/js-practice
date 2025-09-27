function isVowel(charecter) {
  return charecter === 'a' || charecter === 'e' || charecter === 'i' || charecter === 'o' || charecter === 'u';
}

function isConsonant(charecter) {
  return !isVowel(charecter);
}

function isDiffrent(lastCharecter, currentCharecter) {
  return isVowel(lastCharecter) !== isVowel(currentCharecter);
}

function convert(candidateString) {
  let convertedStr = "";
  let text = candidateString;

  while (text.length > 1) {
    convertedStr += text[0];
    let convertedSubStr = "";

    for (let index = 1; index < text.length; index++) {
      if (isDiffrent(convertedStr[convertedStr.length - 1], text[index])) {
        convertedStr += text[index];
      } else {
        convertedSubStr += text[index];
      }
    }

    if (!(convertedSubStr === "")) {
      convertedStr += ",";
    }

    text = convertedSubStr;
  }

  return convertedStr + text;
}

function displayMessage(message) {
  console.log(message);
}

function testResult(text, expectedAns) {
  const actual = convert(text);
  const sign = actual === expectedAns ? "✅" : "❌";
  const message = sign + "expected: " + expectedAns + " | actual: " + actual;
  displayMessage(message);
}

function testAll() {
  testResult("abc", "ab,c");
  testResult("hello", "helo,l");
  testResult("apple", "ape,p,l");
  testResult("there", "tere,h");
  testResult("abyss", "ab,y,s,s");
  testResult("aaaeis", "as,a,a,e,i");
  testResult("aaabbb", "ab,ab,ab");
  testResult("", "");
}

testAll();
