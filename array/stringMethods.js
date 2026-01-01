const candidate = "testing string methods";

//1. length
//2. padEnd(length,"inserting element(default = ' ')")
//3. padStart
//4. at(index/-index(fromlast))
//5. indexOf
//6. lastIndexOf
//7. charAt
//8. charCodeAt(index)//returns UTF-16 code if that charater
//9. codePointAt(index)// returns unicode of char
//10. concat
//11. includes // to check is substring
//12. endsWith
//13. startsWith
//14. localeCompare // compare string acc to lang
//15. match   matchAll // to compare regular expresions
//16. repeat(count)
//17. replace(pattern,replacement) // it will replace first match
//17. replaceAll  // it will replace all matches
//18. slice(starting index, ending index)
//19. split()
//20. substring(startingIndex, endIndex);
//21. substr(startingIndex, length(count));//old
//22. toUpperCase()
//23. toLowerCase()
//24. toLocaleUpperCase()
//25. toLocaleLowerCase()
//26. toString() // to convert into string
//27. trim() // to trim whitespaces from start and end
//28. trimEnd() || trimRight()
//29. trimStart() || trimLeft()

/* ...for finding substring.. string.includes()...*/
// //includes(searchString, strting position from where system will search for it )
// console.log(candidate.includes("e",1)); // true
// console.log(candidate.includes("e",10)); // true // because e is at 10th position
// console.log(candidate.includes("e",16)); // true
// console.log(candidate.includes("e",17)); // false
// console.log(candidate.includes("S")); //default arg as first index
// console.log(candidate.includes("d"));
// console.log(candidate.includes("string"));
// console.log(candidate.includes("string",2));

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
// console.log(candidate.at(-1)); //(candidate.legth - 1)
// console.log(candidate.at(-2));
// console.log(candidate.at(-3));
// console.log(candidate.at(-15)); // indexing start from -1
// console.log(candidate.at(-16));

/* ...for finding charecter at given index.. string.charAt()...*/
/* evaluate from start..*/
// range 0 - String.length - 1 if arg is out of range it will return ""(empty string)
// console.log(candidate.charAt(0));
// console.log(candidate.charAt(14));
// console.log(candidate.charAt(25));
// console.log(candidate.charAt(-1)); // charAt can't access from end..

/* ...for checking a string end with the sustring.. string.endWith(search string,lastindex)...*/
// console.log(candidate.endsWith("methods")); // it will take last index as index if you don't
// console.log(candidate.endsWith("method"));
// console.log(candidate.endsWith("string",14)); //also you can provide index it will check the index endswith that or not
// console.log(candidate.endsWith(""));

/* ...for checking a string start with the sustring.. string.endWith()...*/
// console.log(candidate.startsWith("testing"));
// console.log(candidate.startsWith("method"));
// console.log(candidate.startsWith(""));

/* ...for converting case.. string.to_Case()...*/
// // toLocaleUpperCase() || toLocalLowerCase = (can give lang/aria(EN-US(default = noramal))
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
// indexOf(searchString, strting position from where system will search for it(defalut = 0))
// console.log(candidate.indexOf("e")); // first occurance is at 1st index
// console.log(candidate.indexOf("e", 2)); // after 2 index e is on index 16
// console.log(candidate.lastIndexOf("e"));
// console.log(candidate.lastIndexOf("e", 15)); //1
// console.log(candidate.indexOf('z')); // -1

/* to concate two and more strings */
// you can give as many arg you want
// console.log(candidate.concat(" ", "kaam kar rhe hai.."));
// console.log(candidate);

/* split converts string to array */
//......split(seprator, limit(number of splits))
console.log(candidate.split(""));
// [
//   "t", "e", "s", "t", "i",
//   "n", "g", " ", "s", "t",
//   "r", "i", "n", "g", " ",
//   "m", "e", "t", "h", "o",
//   "d", "s"
// ]

console.log(candidate.split(" "));
// [ "testing", "string", "methods" ]
console.log(candidate.split());
// [ "testing string methods" ]
console.log(candidate.split("a"));
// [ "testing string methods" ]
console.log(candidate.split("e"));
// [ "t", "sting string m", "thods" ]
console.log(candidate.split("t"));
// [ "", "es", "ing s", "ring me", "hods" ]

console.log(candidate.split("t",5));
// [ "", "es", "ing s", "ring me", "hods" ]
 console.log(candidate.split("t",4));
// [ "", "es", "ing s", "ring me" ]
 console.log(candidate.split("t",7));
// [ "", "es", "ing s", "ring me", "hods" ]
 console.log(candidate.split("t",1));
// [ "" ]
 console.log(candidate.split("t",2));
// [ "", "es" ]
console.log(candidate.split(candidate));
// ["", ""];
