const getFrequency = (frequency, current) => {
  frequency[current] = frequency[current] || 0;
  frequency[current]++;
  return frequency;
};

const getMostFrequent = (candidate) => {
  const mostFrequent = Object.entries(
    candidate.reduce(getFrequency, {}),
  ).sort((a, b) => b[1] - a[1])[0];

  return mostFrequent;
};

const getUniqueElements = (uniques, current) => {
  if (!uniques.includes(current)) {
    uniques.push(current);
  }
  return uniques;
};

const data = Deno.readTextFileSync("./data.txt");

// 1. How many films has Shah Rukh Khan acted in?
// grep -c "Actor" finalSrk.csv
const srkMoviesCount = data.match(/Actor/g);
console.log(srkMoviesCount.length);

// 2. The year where SRK acted in the most number of movies and the number of movies he acted in that year.
// grep "Actor" finalSrk.csv | cut -d',' -f2 | uniq -c | sort -rn | head -n1
const years = data.match(/(\d+),Actor/g).map((x) => x.slice(0, 4));
console.log(getMostFrequent(years));

// 3. List in alphabetical order all the directors that SRK has acted with.
// grep "Actor" finalSrk.csv | grep -o "[^,]*$" | cut -d'!' -f2 | sort -ub || grep "Actor" finalSrk.csv | grep -o "[^,\!]*$" | sort -ub

// const directors = data.match(/.*Actor.*\n/g).join().match(/[^,\!]*\n/g)
//   .reduce(getUniqueElements, []).sort();
// console.log([...directors]);

const directors = data.match(/.*Actor.*\n/g).flatMap((x) =>
  x.match(/[^,\!]*\n/g)
).map((x) => x.trim())
  .reduce(getUniqueElements, []).sort();
console.log([...directors]);

// 4. List all directors that SRK has worked for more than once
// grep -o "[^,\!]*$" finalSrk.csv| sort | uniq -d
const directorsHeWorkedWith = data.match(/[^,\!]*\n/g).map((x) => x.trim());
const workedMoreThanOneTime = Object.entries(
  directorsHeWorkedWith.reduce(getFrequency, {}),
)
  .filter((x) => x[1] > 1);
console.log(workedMoreThanOneTime);

// 5. Which is the most popular letter that SRK films begin with? Provide a command that gives both the count and the letter?
// grep -o "^[A-z]" finalSrk.csv | tail -n+2 | sort | uniq -c | sort -rn | head -n1 || cut -c1 finalSrk.csv | tail -n+2 | sort | uniq -c | sort -rn | head -n1
const frequencyOfChars = data.split(/\n/).map((x) => x[0]);

console.log(getMostFrequent(frequencyOfChars));

// 6. List all the Shah Rukh Khan movies in the order of the year in which they were released.
// If a year has more than one movie, then it should be listed in reverse alphabetical order?
// cut -d',' -f1,2 finalSrk.csv | tail -n+2 | sort -r | sort -st',' -nk2 || grep -o ".*[0-9]\+" finalSrk.csv |  sort -r | sort -st',' -nk2
const sortedMovieNames = data.match(/(.+),\d+/g).sort().reverse().sort((a, b) =>
  a.slice(-4) - b.slice(-4)
);
console.log(sortedMovieNames);

// 7. Which director has SRK worked the most with?
// grep -o "[^,\!]*$" finalSrk.csv| sort | uniq -c | sort -rn | head -n1
const favDirector = workedMoreThanOneTime.sort((a, b) => b[1] - a[1])[0];
console.log(favDirector);

// 8. What is the most frequently occurring first word amongst all the movie titles in which SRK has acted
// grep -c "Actor" finalSrk.csv | grep -o "^[A-z]*" | tail -n+2 | sort | uniq -c | sort -rn | head -n1
const allFirstLetters = data.match(/.*Actor.*\n/g).map((x) => x.match(/^\w+/g));
console.log(getMostFrequent(allFirstLetters));

// 9. Most frequently occurring word in SRK titles. Amongst ALL the words
// cut -d',' -f1 finalSrk.csv | grep -o "[^ \!]*" | sort |uniq -c | sort -r | head -n 1
// const allWordsFromTitles = data.split(/\n/).flatMap((x) => x.match(/[^,]*/))
//   .join(" ").match(/\w+/g);
const allWordsFromTitles = data.match(/^\w*,|\n[^,]*/g).join(" ").match(/\w+/g);
console.log(getMostFrequent(allWordsFromTitles));
