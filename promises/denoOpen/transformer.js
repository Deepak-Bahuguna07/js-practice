// const encoder = new TextEncoderStream();
// const decoder = new TextDecoderStream();

// Deno.stdin.readable
//   .pipeThrough(new TextDecoderStream())
//   .pipeThrough(console.log)
//   .pipeThrough(new TextEncoderStream())
//   .pipeThrough(Deno.stdout.writable);

// // console.log(input.);

// const upper = new TransformStream({
//   transform(chunk, controller) {
//     controller.enqueue(chunk.toUpperCase());
//   },
// });

// const input = new ReadableStream({
//   start(controller) {
//     controller.enqueue("hello\n");
//     controller.enqueue("world\n");
//     controller.close();
//   },
// });

// await input.pipeThrough(upper).pipeThrough(
//   new TextEncoderStream(),
// ).pipeTo(Deno.stdout.writable);

// const upper = new TransformStream({
//   transform(chunk, controller) {
//     if (chunk.includes("a")) {
//       controller.error(new Error("error aa gya"));
//       controller.
//     }
//     console.log({ chunk });
//     controller.enqueue(chunk.toUpperCase());
//   },
// });

const mode = Deno.args[0] === "n" ? "\n" : "";
const count = Number(Deno.args[1]) || 10;
let buffer = "";

const head = new TransformStream({
  transform(chunk, controller) {
    buffer += chunk;
    const buf = buffer.split(mode).filter((x) => x);
    // console.log({ chunk });
    // console.log({ buf });
    // console.log({ buffer });
    // if (mode === "\n") controller.enqueue(chunk);
    if (buf.length >= count) {
      controller.enqueue(buf.slice(0, count).join("\n"));

      controller.terminate();
    }
  },
});

// try {
// await Deno.stdin.readable
const file = await Deno.open("files.txt", { read: true });
await file.readable
  .pipeThrough(new TextDecoderStream())
  .pipeThrough(head)
  .pipeThrough(new TextEncoderStream())
  .pipeTo(Deno.stdout.writable);
// } catch (err) {
//   console.error("DONE", err.message);
// }

// let buffer = "";

// const lineTransform = new TransformStream({
//   transform(chunk, controller) {
//     buffer += chunk;
//     const lines = buffer.split("\n");
//     buffer = lines.pop() ?? "";

//     for (const line of lines) {
//       controller.enqueue(line + "\n");
//     }
//   },
//   flush(controller) {
//     if (buffer) controller.enqueue(buffer);
//   },
// });

// await Deno.stdin.readable
//   // .pipeThrough(new TextDecoderStream())
//   // .pipeThrough(lineTransform)
//   // .pipeThrough(new TextEncoderStream())
//   .pipeTo(Deno.stdout.writable);
