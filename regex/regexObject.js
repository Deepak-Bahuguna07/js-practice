const regex = /\w+/;
console.log(regex.test("adc"));
console.log(regex.test("a8787dc"));
console.log(regex.test("."));

// match
// "23 fh".match(/\w+/)
// "23 fh".matchAll(/\w+/g)

// Replace
// "abcd abc".replace(/\w+/,"=")
// "= abc"
// "abcd abc".replaceAll(/\w+/,"=")