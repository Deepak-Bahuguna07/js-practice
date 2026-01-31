const decoder = new TextDecoder();
const encoder = new TextEncoder();

const parser = (data) => {
  const escapCode = decoder.decode(data);
  const [_esc, x, Y] = escapCode.split(";");
  const y = Y.slice(0, Y.length - 1);
  return [x, y];
};

const move = (row, colomn) => `\x1b[${row};${colomn}H`;

const colors = {
  Red: "\x1b[41m",
  Green: "\x1b[42m",
  Yellow: "\x1b[43m",
  Blue: "\x1b[44m",
  Magenta: "\x1b[45m",
  Cyan: "\x1b[46m",
  White: "\x1b[47m",
};

export const transformer = (color) =>
  new TransformStream({
    transform(chunk, controller) {
      const [x, y] = parser(chunk);
      const data = ` ${move(y, x)} + " " + ${colors[color]}`;
      controller.enqueue(encoder.encode(data));
    },
  });
