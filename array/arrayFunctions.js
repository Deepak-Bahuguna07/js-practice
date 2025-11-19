// 1.Array.isArray()
// 2.Array.from() // make array from iterable elements. Array.from("foo"))
// 3.Array.of() // make array of. Array.of("foo", 2, "bar", true);

// 1.length
// 2.at(index)
// 3.concat(array) // provides a single dimention array
// 4.fill
// 5.find() (function return true||false)// it will return that element which return true acc to func)
// 6.findLast()
// 7.findIndex() // return index
// 8.findLastIndex()
// 9.copyWithin(target, start) || copyWithin(target, start, end),with(index, value)
// 10.entries() // it is like Object.entries ,keys(),values()
// 11.map()
// 12.filter()
// 13.reduce(), reduceRight() // when we don't provide any initial value redusce runs from 1st index and take 0th index as initial value
// 14.some()
// 15.every()
// 16.flat()
// 17.flatMap()
// 18.forEach()
// 19.includes(searchElement) || includes(searchElement, fromIndex( strting position from where system will search for it))
// 20.indexOf(element) || indexOf(element, fromIndex( strting position from where system will search for it))
// 21.lastIndexOf(element) || indexOf(element, fromIndex( strting position from where system will search for it))
// 22.join()
// 23.pop() // return deleted element
// 24.push(element1, element2, /* …, */ elementN) // return length
// 25.shift() // return deleted element
// 26.unshift(element1, element2, /* …, */ elementN) // return length
// 27.sort() || toSorted() // to store it in another variable , it will not change the original array
// 28.reverse || toReversed() //not change original array
// 29.toString || toLocaleString // convert to string
// 30.slice() // whole array, slice(start):start to length, slice(start, end)
// 31.splice(start, deleteCount, item1, item2, /* …, */ itemN) || toSpliced   
// 32.with(index, modified value)          


const a = [1, 4, 3, 56, 43, 564, 32, 3, 10];
const b = [
  "g",
  "h",
  "i",
  "k",
  "e",
  "t",
  "w",
  "a",
  "A",
  "W",
  "deepak",
  "deepak",
];
const emptyArray = [];
// console.log(a.find((x) => x % 2 === 0)); // find(predictor(value, index, array));
// console.log(a.findLast((x) => x % 2 === 0)); // findLast(predictor(value, index, array)); --from last
// console.log(a.findIndex((x) => x % 2 === 0)); // findIndex(predictor(value, index, array)); --from last
// console.log(a.findLastIndex((x) => x % 2 === 0)); // findLastIndex(predictor(value, index, array)); --from last

// console.log(a);
// a.fill(0, 4, 8); // fill(value to fill,startIndex, endIndex)
// console.log(a);

// a.splice(0, 1, 2, 4, 5); // splice (startIndex, how many to delete, all to insert at that place(unlimited arguments))--includes startIndex

// console.log(a);
// console.log(a.sort((a, b) => a - b));
// console.log(b);
// console.log(b.sort()); // originally sort array of string
// const tosorted = a.toSorted((a, b) => b - a);
// console.log(tosort);
/*copyWithIn(targetIndex,startIndex,EndIndex) function will copy the value of an index to an another index*/
/* it will change the original array */
// console.log(a);
// console.log(a.copyWithin(1, 4)); // all elements after 4, including 4
// console.log(a);
// console.log(a.copyWithin(1, 4, 5)); // only copy of value in 1st index from 4th index
// console.log(a.copyWithin(1, 4, 6));

/* entries for index and value pair */
// console.log(Object.entries(a));

// for (const [index, element] of a.entries()) {
//   console.log(index, ":", element);
// }

/*join(seprator) . to convert array into string */
console.log(emptyArray.join());
// ""
console.log(b.join());
// "g,h,i,k,e,t,w,a,A,W,deepak,deepak";
// console.log(b.join(""));
// // "ghiketwaAWdeepakdeepak";
// console.log(b.join(" "));
// // "g h i k e t w a A W deepak deepak";
// console.log(b.join("*"));
// // "g*h*i*k*e*t*w*a*A*W*deepak*deepak";

console.log(a);
console.log(a.with(1, 90)); // change the value of 1st index with 90
console.log(a);