console.log("<--START-->");

const p = new Promise((resolve, reject) => {
  console.log("inside");
  resolve(1);
})
  .then((data) => console.log("hey1", data) || ++data)
  .then((data) => console.log("hey2", data) || ++data)
  .then((data) => console.log("hey3", data) || ++data)
  .then((data) => console.log("hey4", data) || ++data);

console.log("<--END-->");
