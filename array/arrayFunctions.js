// 1.length
// 2.at
// 3.concat
// 4.fill
// 5.find
// length                lastIndexOf           indexOf               every                 __defineGetter__
// constructor           pop                   join                  some                  __defineSetter__
// at                    push                  keys                  reduce                hasOwnProperty
// concat                reverse               entries               reduceRight           __lookupGetter__
// copyWithin            shift                 values                toReversed            __lookupSetter__
// fill                  unshift               forEach               toSorted              isPrototypeOf
// find                  slice                 filter                toSpliced             propertyIsEnumerable
// findIndex             sort                  flat                  with                  valueOf
// findLast              splice                flatMap               toLocaleString
// findLastIndex         includes              map                   toString

const a = [1, 4, 3, 56, 43, 564, 32, 3, 10];
const b = ["g", "h", "i", "k", "e", "t", "w", "a", "A", "W", "deepak", "deepak"];
// console.log(a.find((x) => x % 2 === 0)); // find(predictor(value, index, array));
// console.log(a.findLast((x) => x % 2 === 0)); // findLast(predictor(value, index, array)); --from last
// console.log(a.findIndex((x) => x % 2 === 0)); // findIndex(predictor(value, index, array)); --from last
// console.log(a.findLastIndex((x) => x % 2 === 0)); // findLastIndex(predictor(value, index, array)); --from last
// console.log(a);
// a.fill(0, 4, 8); // fill(value to fill,startIndex, endIndex)
// console.log(a);
// a.splice(0, 1, 2, 4, 5); // splice (startIndex, how many to delete, all to insert at that place(unlimited arguments))--includes startIndex

console.log(a);
console.log(a.sort((a, b) => a - b));
console.log(b);
console.log(b.sort());
