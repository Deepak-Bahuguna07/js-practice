const p = new Promise((resolve, reject) => {
  console.log("inside");
  resolve(7);
})
  .then((data) => {
    return console.log("hey", data) || data + 7;
  })
  .then((data) => {
    return console.log("hey 2.0", data);
  });
