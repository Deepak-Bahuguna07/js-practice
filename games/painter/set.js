import { encoder } from "./paint.js";

export const setUp = async () => {
  Deno.stdin.setRaw(true);
  await Deno.stdout.write(
    encoder.encode("\x1b[?1000h\x1b[?1003h\x1b[?1006h\x1b[?25l"),
  );
};

export const cleanUp = async () => {
  await Deno.stdout.write(
    encoder.encode("\x1b[?1000l\x1b[?1003l\x1b[?1006l\x1b[?25h"),
  );
  Deno.stdin.setRaw(false);
};
