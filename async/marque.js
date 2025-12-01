/*1.*/
// const grid = [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "];

// const word = "hello";
// let x = 0;

// setInterval(() => {
//   console.clear();
//   const mod = x++ % 20;
//   grid[mod] = word;
//   console.log(grid.join('  '));
//   grid[mod] = " ";
// }, 400);

/*2.*/
// const grid = " ".repeat(50).split(" ");
// const display = (grid) => {
//   console.clear();
//   console.log(grid.join(""));
// };

// const word = "HELLO";
// const makeGrid = (grid, index) => {
//   let i = 0;
//   if (index < word.length) {
//     i = word.length - index - 1;
//     index = 0;
//   } else {
//     index = index - word.length + 1;
//   }

//   while (i < word.length && index < grid.length - word.length) {
//     grid[index++] = word[i++];
//   }

//   return grid;
// };

// const clearGrid = (grid) => {
//   return grid.fill(" ");
// };

// let x = 0;

// setInterval(() => {
//   const index = x++ % grid.length;
//   makeGrid(grid, index);
//   console.log(grid);
//   display(grid);
//   clearGrid(grid);
// }, 400);

/*3.*/
// const grid = " ".repeat(50).split(" ");
// const display = (grid) => {
//   console.clear();
//   console.log(grid.join(" "));
// };

// const word = "HELLO";
// const makeGrid = (grid, index) => {
//   let i = 0;
//   if (index < word.length) {
//     i = word.length - index - 1;
//     index = 0;
//   } else {
//     index = index - word.length + 1;
//   }

//   while (i < word.length && index < grid.length - word.length) {
//     grid[index++] = word[i++];
//   }

//   return grid;
// };

// const clearGrid = (grid) => {
//   return grid.fill(" ");
// };

// let x = grid.length - 1;
// const getReverseIndex = () => {
//   x = x === 0 ? grid.length - 1 : x - 1;
//   return x;
// };

// const getIndex = () => {
//   return x++ % grid.length;
// };

// const makeMarquee = (grid, direction) => {
//   setInterval(() => {
//     const index = direction(x);
//     makeGrid(grid, index);
//     display(grid);
//     clearGrid(grid);
//   }, 200);
// };

// makeMarquee(grid, getIndex);
// makeMarquee(grid, getReverseIndex);

/*4.*/
// const grid = [" ".repeat(50).split(" "), " ".repeat(50).split(" ")];

// const display = () => {
//   console.clear();
//   console.log(grid.map((x) => x.join(" ")).join("\n"));
// };

// const makeGrid = (index, row, { text }) => {
//   let i = 0;
//   if (index < text.length) {
//     i = text.length - index - 1;
//     index = 0;
//   } else {
//     index = index - text.length + 1;
//   }

//   while (i < text.length && index < grid[0].length - text.length) {
//     grid[row][index++] = text[i++];
//   }
// };

// const clearGrid = () => {
//   grid[0].fill(" ");
//   grid[1].fill(" ");
// };

// const getReverseIndex = (row) => {
//   row.index = row.index === -1 ? 50 - 1 : row.index - 1;
// };

// const getIndex = (row) => {
//   row.index = (row.index + 1) % 50;
// };

// const inputs = {
//   X: { index: 0, direction: getIndex, text: "HELLO", rowIndex: 0 },
//   Y: { index: 5, direction: getReverseIndex, text: "HEY", rowIndex: 1 },
// };

// const makeMarquee = () => {
//   setInterval(() => {
//     inputs.X.direction(inputs.X);
//     inputs.Y.direction(inputs.Y);

//     makeGrid(inputs.X.index, inputs.X.rowIndex, inputs.X);
//     makeGrid(inputs.Y.index, inputs.Y.rowIndex, inputs.Y);
//     display();
//     clearGrid();
//   }, 60);
// };

// makeMarquee(inputs);

/*5*/
// const createGrid = (row, coloums) => {
//   const result = [];
//   for (let index = 0; index < row; index++) {
//     result.push(" ".repeat(coloums).split(""));
//   }

//   return result;
// };

// const grid = createGrid(8, 50);

// const display = () => {
//   console.clear();
//   console.log(grid.map((x) => x.join(" ")).join("\n"));
// };

// const makeGrid = (index, row, { text }) => {
//   let i = 0;
//   if (index < text.length) {
//     i = text.length - index - 1;
//     index = 0;
//   } else {
//     index = index - text.length + 1;
//   }

//   while (i < text.length && index < grid[row].length - text.length) {
//     grid[row][index++] = text[i++];
//   }
// };

// const clearGrid = () => {
//   grid.map((x) => x.fill(" "));
// };

// const getReverseIndex = (row) => {
//   row.index = row.index === -1 ? grid[0].length - 1 : row.index - 1;
// };

// const getIndex = (row) => {
//   row.index = (row.index + 1) % grid[0].length;
// };

// const inputs = [
//   { index: 0, direction: getIndex, text: "HELLO", rowIndex: 0 },
//   { index: 15, direction: getReverseIndex, text: "HEY", rowIndex: 1 },
//   { index: 24, direction: getIndex, text: "STRING", rowIndex: 2 },
//   { index: 35, direction: getReverseIndex, text: "HTML", rowIndex: 3 },
//   { index: 0, direction: getIndex, text: "SIDHU", rowIndex: 4 },
//   { index: 5, direction: getReverseIndex, text: "IS", rowIndex: 5 },
//   { index: 44, direction: getIndex, text: "IT", rowIndex: 6 },
//   { index: 30, direction: getReverseIndex, text: "COOL", rowIndex: 7 },
// ];

// const makeMarquee = () => {
//   setInterval(() => {
//     for (const string of inputs) {
//       string.direction(string);
//       makeGrid(string.index, string.rowIndex, string);
//     }

//     display();
//     clearGrid();
//   }, 200);
// };

// makeMarquee();

/*6*/
const createGrid = (row, coloums) => {
  const result = [];
  for (let index = 0; index < row; index++) {
    result.push(" ".repeat(coloums).split(""));
  }

  return result;
};

const grid = createGrid(20, 50);

const display = () => {
  console.clear();
  console.log(grid.map((x) => x.join(" ")).join("\n"));
};

const findIndex = (index, text) => {
  let i = 0;

  if (index < text.length) {
    i = text.length - index - 1;
    index = 0;
  } else {
    index = index - text.length + 1;
  }

  return [i, index];
};

const makeGrid = (rowIndex, row, { text }) => {
  let [i, index] = findIndex(rowIndex, text);

  while (i < text.length && index < grid[row].length - text.length) {
    grid[row][index++] = text[i++];
  }
};

const makeVerticalGrid = (rowIndex, coloum, { text }) => {
  let [i, index] = findIndex(rowIndex, text);

  while (i < text.length && index < grid.length) {
    coloum = index % 3 === 0 ? coloum - 1 : coloum + 1;
    grid[index++][coloum] = text[i++];
  }
};

const clearGrid = () => {
  grid.map((x) => x.fill(" "));
};

const getReverseIndex = (row) => {
  row.index = row.index === -1 ? grid[0].length - 1 : row.index - 1;
};

const getIndex = (marquee) => {
  const limit = marquee.type === makeVerticalGrid
    ? (grid.length + marquee.text.length)
    : grid[0].length;
  marquee.index = (marquee.index + 1) % limit;
};

const makeMarquee = () => {
  let index = 0;

  setInterval(() => {
    for (const string of inputs) {
      const row = (index++ % 10 === 0) ? string.rowIndex + 1 : string.rowIndex;

      string.direction(string);
      string.type(string.index, row, string);
    }

    display();
    clearGrid();
  }, 100);
};

const inputs = [
  { index: 0, direction: getIndex, text: "HELLO", rowIndex: 3, type: makeGrid },
  {
    index: 15,
    direction: getReverseIndex,
    text: "HEY",
    rowIndex: 1,
    type: makeGrid,
  },
  { index: 24, direction: getIndex, text: "STAR", rowIndex: 2, type: makeGrid },
  { index: 4, direction: getIndex, text: "---->", rowIndex: 9, type: makeGrid },
  {
    index: 2,
    direction: getReverseIndex,
    text: "<----",
    rowIndex: 13,
    type: makeGrid,
  },
  {
    index: 35,
    direction: getReverseIndex,
    text: "HTML",
    rowIndex: 12,
    type: makeGrid,
  },
  {
    index: 0,
    direction: getIndex,
    text: "SIDHU",
    rowIndex: 15,
    type: makeGrid,
  },
  {
    index: 5,
    direction: getReverseIndex,
    text: "IS",
    rowIndex: 5,
    type: makeGrid,
  },
  { index: 44, direction: getIndex, text: "IT", rowIndex: 6, type: makeGrid },
  {
    index: 44,
    direction: getIndex,
    text: "-->>>>",
    rowIndex: 18,
    type: makeGrid,
  },
  {
    index: 30,
    direction: getReverseIndex,
    text: "COOL",
    rowIndex: 7,
    type: makeGrid,
  },
  {
    index: 0,
    direction: getIndex,
    text: "COOL",
    rowIndex: 5,
    type: makeVerticalGrid,
  },
  {
    index: 5,
    direction: getIndex,
    text: "HOT",
    rowIndex: 25,
    type: makeVerticalGrid,
  },
  {
    index: 10,
    direction: getIndex,
    text: "HNN",
    rowIndex: 45,
    type: makeVerticalGrid,
  },
  {
    index: 10,
    direction: getIndex,
    text: "\/|+",
    rowIndex: 35,
    type: makeVerticalGrid,
  },
  {
    index: 0,
    direction: getIndex,
    text: "*****",
    rowIndex: 30,
    type: makeVerticalGrid,
  },
];

makeMarquee(inputs);
