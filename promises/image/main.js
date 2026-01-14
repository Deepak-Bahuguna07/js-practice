import { chunk } from "jsr:@std/collections";

const createGrid = (row, coloums) => {
  const result = [];
  for (let index = 0; index < row; index++) {
    result.push("".repeat(coloums).split(""));
  }
  return result;
};

// console.log("length", pixelData.length, pixelData);
// const chunk = (pixelData, width) => {
//   const formatedPixels = ``;
//   for (let i = 0; i < pixelData.length; i += 3) {
//     const r = pixelData[i];
//     const g = pixelData[i + 1];
//     const b = pixelData[i + 2];
//     formatedPixels += `${r} ${g} ${b} `;
//     if (i % (width * 3) === 0 && i !== 0) ppm3 += "\n";
//   }
//   return formatedPixels;
// };

// const parseData = (str) => {
//   const row = [];
//   str = str.map(Number);
//   for (let idx = 0; idx < (340 * 3); idx += 3) {
//     row.push([str[idx], str[idx + 1], str[idx + 2]]);
//   }
//   return row;
// };

const image = await Deno.readTextFileSync("imagep6.ppm");
const [format, size, _] = image.split("\n");
console.log(image.length, "img length");
const index = 15;
const pixelData = image.slice(index);
const [height, width] = size.split(" ");
const grid = createGrid(+height, +width);
console.log(pixelData.length);
const pixels = chunk(pixelData.split(""), +width * 3);
// console.log(pixels);

function fillGrid() {
  for (let row = 0; row < +height; row++) {
    for (let coloum = 0; coloum < +width; coloum++) {
      console.log(row, "row");
      const [r, g, b] = pixels[row][coloum];
      grid[row][coloum] = `\x1b[48;2;${r};${g};${b}m \x1b[0m`;
    }
  }
}

// fillGrid();

// console.log(grid.map((x) => x.join("")).join("\n"));
