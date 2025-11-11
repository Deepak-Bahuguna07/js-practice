const countOccurence = (array, candidate) => {
  const count = array
    .flat()
    .reduce((acc, current) => {
      return current === candidate ? ++acc : acc;
    }, 0);
  return count;
};

const totalCount = (array) => {
  const count = array
    .flat()
    .reduce((acc, current) => acc + current);
  return count;
};

const findWord = (array, candidate) => {
  const isThere = array
    .flat()
    .some((x) => x === candidate);
  return isThere;
};

const areAllBelow = (array, point) => {
  const areThere = array
    .flat()
    .every((x) => x < point);
  return areThere;
};

const isAnyAbove = (array, point) => {
  const isThere = array
    .flat()
    .some((x) => x > point);
  return isThere;
};

const areAllAbove = (array, point) => {
  const areThere = array.flat().every((x) => x > point);
  return areThere;
};

const uniqueElemant = (array) => {
  // const unique = array.flat().filter((item, index, arr) => arr.indexOf(item) === index);
  // return unique;
  const unique = array.flat().reduce((acc, curr) => {
    if (!acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
  return unique;
};

const combine = (array) => {
  const allElements = array.flat();
  return allElements;
};

const reverse = (array) => {
  const reversed = array.reduce((acc, current) => {
    acc.unshift(current);
    return acc;
  }, []);
  return reversed;
};

const frequency = (array) => {
  const uniqueWords = array.flat().filter((item, index, arr) =>
    arr.indexOf(item) === index
  );
  const frequencySummary = uniqueWords.flatMap((x) =>
    `${x}:${countOccurence(array, x)}`
  );
  return frequencySummary;
};

const frequency_02 = (frequencyArray, current) => {
  const occurre = frequencyArray.find((value) => value[0] === current);

  if (occurre) {
    occurre[1] += 1;
    return frequencyArray;
  }

  return frequencyArray.push([current, 1]) && frequencyArray;
};

// Count how many times “banana” appears in a fruit log.
const fruits = [["apple", "banana"], ["banana"], ["apple", "orange"]];
console.log(countOccurence(fruits, "banana"));

// Combine all words written by students on three worksheets.
const worksheet = [["a", "b"], ["t", "e"], ["w"]];
console.log(combine(worksheet));

// Determine whether any student wrote the word “excellent”.
const words = [["apple", "banana"], ["exellent"], ["for", "orange"]];
console.log(findWord(words, "exellent"));

// Check whether all recorded rainfall values are under 50.
const rainFall = [[22, 23], [25, 24, 22], [29]];
console.log(areAllBelow(rainFall, 50));

// Produce a list of unique movie genres mentioned by a club.
const movies = [["horror", "action"], ["action"], ["drama", "action"], [
  "science fiction",
]];
console.log(uniqueElemant(movies));

// Compute the total number of pushups done in all sessions.
const pushupSets = [[22, 23], [25, 24, 22], [29]];
console.log(totalCount(pushupSets));

// Create a list of all unique bird species spotted on a trip.
const birds = ["sparrow", "crow", "sparrow", "eagle", "crow"];
console.log(uniqueElemant(birds));

// Count how many tiles in a mosaic were listed as “red”.
const tiles = ["red", "blue", "red", "green", "red", "blue"];
console.log(countOccurence(tiles, "red"));

// Sum all distances covered during cycling practice.
const distanceCovered = [[2, 2], [5, 4, 22], [9]];
console.log(totalCount(distanceCovered));

// List unique flavors tried in an ice-cream tasting event.
const iceCreamFlavors = [["vanilla", "chocolate"], ["strawberry"], [
  "chocolate",
]];
console.log(uniqueElemant(iceCreamFlavors));

// Check if any participant scored above 90 in tests.
const scores = [[82, 23], [95, 44, 22], [29]];
console.log(isAnyAbove(scores, 90));

// Verify if all ages listed for an event are 18 or above.
const ages = [[82, 23], [75, 44, 22], [29]];
console.log(areAllAbove(ages, 18));

// Combine the ingredients from all recipe attempts.
const ingredients = [["rice", "lentils"], ["sugar"], ["curd", "milk"]];
console.log(combine(ingredients));

// Reverse the order of dance steps recorded by a choreographer.
const danceSteps = ["a", "b", "c", "e", "a", "b", "t"];
console.log(reverse(danceSteps));

// // Build a frequency summary of words used in a poem draft.
const poemDraft = [
  "Rain falls rain sings",
  "Night hums night brings dreams",
  "Rain falls softly hearts awake",
  "Night listens dreams remake",
];
const allWords = poemDraft.flatMap((x) => x.split(" "));
console.log(frequency(allWords));

// Determine whether the note “fa” appears in any music sheet.
const musicNotes = [["mi", "fa", "so"], ["do", "mi"], ["fa"]];
console.log(findWord(musicNotes, "fa"));

// Sum all weights of parcels recorded in a courier office.
const parcelsWeight = [[2, 2], [5, 4, 22], [9]];
console.log(totalCount(parcelsWeight));

// List distinct toppings chosen by pizza customers.
const toppings = [["onion", "paneer"], ["chicken"], ["extra cheese"]];
console.log(uniqueElemant(toppings));

// Count how many times a student reread a particular chapter.
const chapters = ["statices", "probability", "numbersystem", "statices"];
console.log(countOccurence(chapters, "statices"));

// Combine all color swatches from three design sets.
const designs = [["red", "black"], ["black", "white"], ["red", "brown"]];
combine(designs);
console.log(uniqueElemant(designs));

// Check if any experiment reading hit the maximum threshold of 100.
const readings = [10, 43, 65, 87, 90, 99, 110, 43, 0];
console.log(isAnyAbove(readings, 100));

// Verify whether every participant completed at least one task.
const participants = [["task1", "task2"], ["task1", "task4"], ["task3"], [
  "task4",
]];
const atLeastOneTask = participants.every((x) => x.length > 0);
console.log(atLeastOneTask);

// List unique destinations chosen in a travel club survey.
const destinations = [["almora", "nainital"], ["dehradun"], ["nainital"]];
console.log(uniqueElemant(destinations));

// Sum all hours spent practicing an instrument.
const practice = [[2, 2], [5, 4, 2], [9]];
console.log(totalCount(practice));

// Find all distinct types of plants noted during fieldwork.
const plants = ["rose", "sunflower", "mango", "rose", "aloevera", "wheat"];
console.log(uniqueElemant(plants));

// Count occurrences of a specific sound in a phonetics study.
const sounds = [["mi", "fa", "so"], ["do", "mi"], ["fa"]];
console.log(countOccurence(sounds, "fa"));

// Combine all syllables used in language drills.
const subjects = [["hindi", "english", "math"], [
  "biology",
  "physices",
  "chemistry",
]];
console.log(combine(subjects));

// Check if any measurement is exactly zero.
const measurement = [[2, 2], [5, 4, 0], [9]];
const isZero = measurement.flat().some((x) => x === 0);
console.log(isZero);

// Verify that all listed items weigh less than 10 grams.
const items = [[2, 2], [5, 4, 0], [9]];
console.log(areAllBelow(items, 10));

// Summarize how many times each color appears in a creative art project.
const colors = [
  ["red", "black", "white"],
  ["black", "white"],
  ["red", "brown"],
  ["white"],
];

const frequencyArray = colors.flat().reduce(frequency_02, []);
console.log(frequencyArray);
console.log(frequency(colors));

// Reverse the order of instructions written for a scavenger hunt.
const instructions = ["a", "b", "c", "e", "a", "b", "t"];
console.log(reverse(instructions));

// Count how many entries in a journal mention “rain”.
const journal = [
  "rain falls rain sings",
  "Night hums night brings dreams",
  "rain falls softly hearts awake",
  "Night listens dreams remake",
];
const allwords = journal.flatMap((x) => x.split(" "));
console.log(countOccurence(allwords, "rain"));

// Merge all small poetry fragments into one list of lines.
const poetryFragments = [
  ["rain", "falls", "rain", "sings"],
  ["Night", "hums", "night", "brings", "dreams"],
  ["rain", "falls", "softly", "hearts", "awake"],
  ["Night", "listens", "dreams", "remake"],
];

console.log(poetryFragments.flatMap((x) => x.join(" ")));

// List unique cartoon characters favored by children.
const partipents = [["Tom", "Jerry"], ["Jerry", "doremon"], [
  "nobita",
  "doremon",
]];
console.log(uniqueElemant(partipents));

// Add up all points scored by a team across multiple games.
const score = [4, 5, 7, 1, 2, 8, 2, 3, 4];
console.log(totalCount(score));

// Check whether any team scored exactly 50 points.
const teamScores = [45, 50, 73, 10, 29];
const is50 = teamScores.some((x) => x === 50);
console.log(is50);

// Ensure all pH values recorded are below 8.
const values = [4, 5, 7, 1, 2, 7, 2, 3, 4];
console.log(areAllBelow(values, 8));

// Count unique flavors tasted in a chocolate workshop.

// Sum all minutes of meditation logged across sessions.
const meditation = [45, 15, 10, 5, 20, 30];
console.log(totalCount(meditation));

// // Identify every unique tool used in a repair workshop.
const tools = [["hammer", "glass"], ["nut", "bolt", "hammer"]];
console.log(uniqueElemant(tools));

// Count how many shirts in a laundry batch were listed as “white”.
const shirtsColor = [["red", "black", "white"], ["black", "white"], [
  "red",
  "brown",
], ["white"]];
console.log(countOccurence(shirtsColor, "white"));

// Combine all notes written during a meeting into one list.
const notes = [
  ["red", "black", "white"],
  ["black", "white"],
  ["red", "brown"],
  ["white"],
];
console.log(combine(notes));

// Check if any item in a shipment is marked “fragile”.
const shipment = [["hammer", "glass"], ["nut", "bolt", "hammer"], ["fragile"]];
console.log(findWord(shipment, "fragile"));

// Verify that all letters written by participants are lowercase.
const letters = ["a", "b", "c", "e", "a", "b", "t"];
const isLowerCase = letters.every((x) => {
  return x.toLowerCase() === x;
});
console.log(isLowerCase);

// Reverse a list of moves recorded during a chess game.
const moves = ["a1", "b2", "c3", "e5", "a1", "b7", "d3"];
console.log(reverse(moves));

// Build a frequency list for musical notes practiced in a session.
const musicalNotes = [["mi", "fa", "so"], ["do", "mi"], ["fa"]];
console.log(frequency(musicalNotes));

// Count the number of times “error” appears in a log of messages.
const message = ["error, welcome, login succesfully, log out, error"];
const allAlerts = message.flatMap((x) => x.split(", "));
console.log(allAlerts);
console.log(countOccurence(allAlerts, "error"));

// Gather all ingredients used in three versions of the same dish.

// Check if any student skipped all activity sessions.
// Create a list of distinct songs hummed by children on a bus ride.

// Write a function that can take an array of sentences and return all the words that start with 'a' (regardless of case)

const sentences = [
  "just a phrase",
  "also another phrase",
  "arbitrary phrase",
  "An interesting phrase",
];

const all = sentences.flatMap((x) => x.split(" "));
console.log(all);
const startWithA = all.filter((x) => x[0] === "a" || x[0] === "A");
console.log(startWithA);
