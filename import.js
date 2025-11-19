import { intern } from "./js-practice/import.js"; // ye issi time jake iss file ko evaluate karega

console.log(intern, "yha ka ");
intern[5] = { name: "rahul", age: 20 };
console.log(intern, "yha ka ");
intern[6] = { name: "adarsh", age: 20 };
console.log(intern, "yha ka ");

// intern.forEach(element => {
//   console.log(element,"hey");
// });