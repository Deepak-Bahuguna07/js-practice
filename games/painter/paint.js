import { transform } from "./transformer.js";
const encoder = new TextEncoder();

Deno.stdin.setRaw(true);
await Deno.stdout.write(
  encoder.encode("\x1b[?1003h\x1b[?1006h"),
);

// await Deno.stdout.write(
//   encoder.encode("\x1b[?1003l\x1b[?1006l"),
// );

console.log("start wala");
await Deno.stdin.readable.pipeThrough(transform).pipeTo(Deno.stdout.writable);
