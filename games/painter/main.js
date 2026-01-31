import {
  changeColor,
  colorOptions,
  colors,
  encoder,
  move,
  parser,
} from "./paint.js";
import { cleanUp, setUp } from "./set.js";

const main = async () => {
  await setUp();
  let color = "Red";
  Deno.stdout.write(encoder.encode(colorOptions));

  while (true) {
    const buffer = new Uint8Array(1024);
    const n = await Deno.stdin.read(buffer);
    if (buffer[0] === 3) break;

    const [button, x, y] = parser(buffer.slice(0, n));
    if (button === "0") color = changeColor(+x, +y, color);

    if (y < 5 || y > 40) continue;

    const data = `${move(y, x)} ${colors[color]}`;
    Deno.stdout.write(encoder.encode(data));
  }

  await cleanUp();
};

main();
