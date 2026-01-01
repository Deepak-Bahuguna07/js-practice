const onSuccess = (message, value) => {
  console.log(message, value);
  return () => {
    console.log("inside executor of", message);
    return value;
  };
};

// const dbg = (x) => console.log("dbg", x) || x;

const onFailure = (message, value) => {
  console.log("FAILED", message);
  return () => {
    console.log("inside executor of", message);
    return value;
  };
};

const value = await Promise.resolve(5)
  .then(onSuccess("then 1", 10))
  .then(onSuccess("then 2", 100))
  .then(onSuccess("then 3", 400))
  .catch(onFailure("catch 1", -1))
  .then(onSuccess("then 4", 40));

console.log(value, "value");
