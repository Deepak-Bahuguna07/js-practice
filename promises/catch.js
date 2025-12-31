new Promise((resolve, reject) => {
  console.log("inside");
  reject("d");
})
  .then((data) => {
    return console.log("hey", data);
  })
  .then((data) => {
    return console.log("hey", data);
  })
  .catch((data) => {
    return console.log("error", data); // only this will run
  });
