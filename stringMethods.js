const candidate = "testing string methods";

/* ...for finding substring.. string.includes()...*/
// console.log(candidate.includes('e'));
// console.log(candidate.includes('S'));
// console.log(candidate.includes('d'));
// console.log(candidate.includes('string'));

/* ...for finding charecter at given index.. string.at()...*/
/* evaluate from start..*/
// console.log(candidate.at(0));
// console.log(candidate.at(1));
// console.log(candidate.at(2));
// console.log(candidate.at(3));
// console.log(candidate.at(4));
// console.log(candidate.at(5));
// console.log(candidate.at(15));

// /* evaluate from end..*/
// console.log(candidate.at(-1));
// console.log(candidate.at(-2));
// console.log(candidate.at(-3));
// console.log(candidate.at(-15)); // indexing start from -1 so print D..
// console.log(candidate.at(-16));

/* ...for finding charecter at given index.. string.charAt()...*/
/* evaluate from start..*/
// console.log(candidate.charAt(0));
// console.log(candidate.charAt(14));
// console.log(candidate.charAt(-1)); // charAt can't access from end..

/* ...for checking a string end with the sustring.. string.endWith()...*/
// console.log(candidate.endsWith("methods"));
// console.log(candidate.endsWith("method"));
// console.log(candidate.endsWith(""));

/* ...for checking a string start with the sustring.. string.endWith()...*/
// console.log(candidate.startsWith("testing"));
// console.log(candidate.startsWith("method"));
// console.log(candidate.startsWith(""));

/* ...for converting case.. string.to_Case()...*/
// console.log(candidate.toUpperCase());
// console.log(candidate.at(1).toUpperCase());
// console.log(candidate.toLocaleUpperCase().toLowerCase());
// console.log(candidate.toLocaleUpperCase().toLowerCase());
// console.log('$.'.toLowerCase());


/* ...for remove all leading and traling whiteSpaces.. string.trim()...*/
// const candidateForTrim = "  testing string methods  \n\t";
// console.log(candidateForTrim.trim());
// console.log(candidateForTrim.trimStart());
// console.log(candidateForTrim.trimEnd());

/* ...it will return index of that substring.. string.indexOf()...*/
// console.log(candidate.indexOf('e'));
// console.log(candidate.lastIndexOf('e'));
// console.log(candidate.indexOf('z'));

/* to concate two and more strings */
console.log(candidate.concat(" kaam kar rhe hai.."));
console.log(candidate.concat(""));