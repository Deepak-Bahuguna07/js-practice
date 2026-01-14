async function demo() {
  const stream = new TransformStream({
    transform(chunk, controller) {
      controller.enqueue(chunk.toUpperCase());
    },
  });

  const writer = stream.writable.getWriter();
  await writer.write("hello ");
  await writer.write("world");
  await writer.close();

  const reader = stream.readable.getReader();
  let result = "";
  let done = false;
  while (!done) {
    const { value, done: d } = await reader.read();
    if (value) result += value;
    done = d;
  }
  console.log({ result }); // HELLO WORLD
}

demo().catch(console.error);
