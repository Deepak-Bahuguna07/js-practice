import { connect } from "@akin01/deno-redis";

const db = await connect({
  hostname: "127.0.0.1",
  port: 6379
});

const todos = [
  {
    title: "todo1", tasks: [
      { title: "task1", done: true },
      { title: "task2", done: false },
    ]
  },
  {
    title: "todo2", tasks: [
      { title: "task1", done: true },
      { title: "task2", done: false },
    ]
  },
]

await db.set("todos", JSON.stringify(todos));

const renameTask = async (name, id, todoId) => {
  const data = await db.get("todos");
  const todo = JSON.parse(data);
  todo[todoId].tasks[id].title = name;
  console.log(todo);


  await db.set("todos", JSON.stringify(todo));
}

await renameTask("rohan", 1, 1);
await renameTask("sohan", 0, 0);

// console.log(todos)