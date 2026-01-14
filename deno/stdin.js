const decoder = new TextDecoder();
console.log("aaya hai1");

for await (const msg of Deno.stdin.readable) {
  console.log(msg);
  console.log(decoder.decode(msg));
  console.log("aaya hai2");
}

// const reader = Deno.stdin.readable.getReader();
// while (true) {
//   const { value, done } = await reader.read();
//   // console.log({ value, done });
//   if (done) break;

//   console.log(decoder.decode(value));
// }

// console.log("phuch gya.");
