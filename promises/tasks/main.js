function delay(ms = 2000) {
  return new Promise((r) => setTimeout(() => r(true), ms));
}

const performTask = async (name) => {
  const start = Date.now();
  await delay();
  const end = Date.now();

  console.log({ name, start, end, duration: end - start });
};

const parallelTasks = async (tasks) => {
  const start = Date.now();
  await Promise.all(tasks.map(() => delay()));
  const end = Date.now();
  console.log({ tasks, start, end, duration: end - start });
};

const readFile = async (name, path) => {
  const start = Date.now();
  const result = await Deno.readTextFile(path);
  const end = Date.now();

  console.log({ name, start, end, duration: end - start });
  return result;
};

const result = await readFile("read recipe file", "./recipes.txt");
const recipe = await readFile("first recipe file", result);
const first = recipe.split("\n");
for (let index = 0; index < first.length; index++) {
  await performTask(first[index]);
}

parallelTasks(["t1", "t2"]);
// console.log(result);
// console.log(recipe);

// const f = await example();

// console.log("na");
