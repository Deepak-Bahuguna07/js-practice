console.log("<--start-->");

const p = new Promise((resolve, reject) => {
  console.log("inside");
  // resolve("d");
})
  .then((data) => {
    console.log("hey", data, dihfdiuhgi); 
  })
  .then((data) => {
    console.log("hey2", data);
  });

const second = new Promise((resolve, reject) => {
  resolve("ho gya ");
});

second.then((data) => console.log("second", data));
console.log("<--end-->");
