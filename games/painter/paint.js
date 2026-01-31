export const encoder = new TextEncoder();
export const decoder = new TextDecoder();
export const move = (row, colomn) => `\x1b[${row};${colomn}H`;

export const parser = (data) => { // \x1b[<0;35;12M
  const escapCode = decoder.decode(data);
  const [esc, x, Y] = escapCode.split(";");
  const [_, button] = esc.split("<");
  const y = Y.slice(0, Y.length - 1);
  return [button, x, y];
};

export const colors = {
  Green: "\x1b[42m",
  Yellow: "\x1b[43m",
  Blue: "\x1b[44m",
  Magenta: "\x1b[45m",
  Cyan: "\x1b[46m",
  White: "\x1b[47m",
  Red: "\x1b[41m",
  Reset: "\x1b[0m",
};

export let colorOptions = `${move(50, 0)}`;
Object.keys(colors).forEach((color) => {
  colorOptions += color.padEnd(10);
});

export const changeColor = (x, y, color) => {
  if (y !== 50) return color;
  if (x <= 10) return "Green";
  if (x <= 20) return "Yellow";
  if (x <= 30) return "Blue";
  if (x <= 40) return "Magenta";
  if (x <= 50) return "Cyan";
  if (x <= 60) return "White";
  if (x <= 70) return "Red";
  if (x <= 80) return "Reset";
  return color;
};
