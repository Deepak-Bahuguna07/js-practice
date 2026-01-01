function delay(ms = 3000) {
  return new Promise((r) => setTimeout(() => r(true), ms));
}

const performTasks = async (name) => {
  const start = Date.now();
  await delay();
  const end = Date.now();

  console.log({ name, start, end, duration: end - start });
};

await performTasks("order confirmed");
await performTasks("notification in store");
await performTasks("delevery partner get notify");
await performTasks("notification to cutomer order in process");
await performTasks("out for delivery");
await performTasks("pahunch gya hai ");
