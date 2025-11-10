// ## **Problem: Shortest Distance Between Two Vowels**

// Write a program that takes a single word (string) as input and finds the **shortest distance between any two vowels** in the word.

// **Distance** is defined as the absolute difference between the **positions (indices)** of two vowels in the string.
// If the word contains **fewer than two vowels**, print -1.
// Consider only lowercase letters (a, e, i, o, u) as vowels.
// Indices start from 0 (first character is at position 0).

// ---

// ### **Examples**

// | Input     | Output | Explanation                                               |
// | --------- | ------ | --------------------------------------------------------- |
// | hello     | 2      | Vowels: e at index 1, o at index 4 → distance = 4 − 1 = 3 |
// | apple     | 4      | Vowels: a at index 0, e at index 4 → distance = 4         |
// | strength  | -1     | Only one vowel (e) → output -1                            |
// | beautiful | 1      | Vowels: e at 1, a at 2 → distance = 1                     |
// | abyss     | -1     | Only one vowel (a) → output -1                            |

// ---

// ### **Constraints**

// Input will be a single word containing only lowercase English letters.
// Word length ≤ 1000 characters.

// ---

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

function minDistance(candidate) {
  let minDistance = candidate.length;
  let currentIndex = 0;
  let index = 1;

  while (index < candidate.length) {
    if (!isVowel(candidate[currentIndex])) { // if current index is not vowel 
      currentIndex++;
      index++;
    }

    if (isVowel(candidate[currentIndex]) && isVowel(candidate[index])) {
      minDistance = Math.min(minDistance, index - currentIndex);
      currentIndex = index;
    }
    index++;
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