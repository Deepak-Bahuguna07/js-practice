function isVowel(charecter) {
  return charecter === 'a' || charecter === 'e' || charecter === 'i' || charecter === 'o' || charecter === 'u';
}

function minDistance(candidate) {
  let minDistance = candidate.length;
  let currentIndex = 0;

  for (let index = 1; index < candidate.length; index++) {
    if (!isVowel(candidate[currentIndex])) {
      console.log(candidate[currentIndex]);
      currentIndex++;
      index++;
    }

    if (isVowel(candidate[currentIndex]) && isVowel(candidate[index])) {
      const difference = index - currentIndex;
      minDistance = minDistance > difference ? difference : minDistance;
      currentIndex = index;
    }
  }
  minDistance = minDistance < candidate.length ? minDistance : -1;
  return minDistance;
}

function displayMessage(message) {
  console.log(message);
}

function testResult(candidate, expectedAns) {
  const actual = minDistance(candidate);
  const sign = actual === expectedAns ? "✅" : "❌";
  const message = sign + "expected: " + expectedAns + " | actual: " + actual;
  displayMessage(message);
}

function testAll() {
  testResult("abc", -1);
  testResult("hello", 3);
  testResult("apple", 4);
  testResult("there", 2);
  testResult("thr", -1);
  testResult("aaj", 1);
  testResult("strength", -1);
  testResult("beautiful", 1);
  testResult("abyss", -1);
  testResult("", -1);
}

testAll();
