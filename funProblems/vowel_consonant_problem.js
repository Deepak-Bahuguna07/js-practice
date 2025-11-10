function isVowel(charecter) {
  switch (charecter) {
    case 'a':
      return true;
    case 'e':
      return true;
    case 'i':
      return true;
    case 'o':
      return true;
    case 'u':
      return true;
    default:
      return false;
  }
}

// for checking both charecters are diffrent 1 is vowel 1 is consonante
function isDiffrentType(previousCharecter, currentCharecter) {
  return isVowel(previousCharecter) !== isVowel(currentCharecter);
}

function convert(candidateString) {
  let convertedStr = "";
  let currentCandidate = candidateString;

  while (currentCandidate.length > 0) {
    convertedStr += currentCandidate[0];
    let convertedSubStr = "";

    for (let index = 1; index < currentCandidate.length; index++) {
      if (isDiffrentType(convertedStr[convertedStr.length - 1], currentCandidate[index])) {
        convertedStr += currentCandidate[index];
      } else {
        convertedSubStr += currentCandidate[index];
      }
    }

    if (!(convertedSubStr === "")) {
      convertedStr += ",";
    }

    currentCandidate = convertedSubStr;
  }

  return convertedStr;
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
  testResult("poetre", "pote,er");
  testResult("poetee", "pote,e,e");
  testResult("abyss", "ab,y,s,s");
  testResult("aaaeis", "as,a,a,e,i");
  testResult("aaabbb", "ab,ab,ab");
  testResult("aaabbbaaa", "aba,aba,aba");
  testResult("aaaiieeooouu", "a,a,a,i,i,e,e,o,o,o,u,u");
}

testAll();