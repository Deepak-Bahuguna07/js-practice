const createGrid = (row, coloums) => {
  const result = [];
  for (let index = 0; index < row; index++) {
    result.push(" ".repeat(coloums).split(""));
  }

  return result;
};

const grid = createGrid(20, 50);
const text = "*****";
const snakeBody = [];

const display = () => {
  console.clear();
  console.log(grid.map((x) => x.join(" ")).join("\n"));
};

export const turnSnake = ({ x, y, direction }, side) => {
  const directions = "NESW";
  const index = directions.indexOf(direction);
  const sides = { R: 1, L: 3 };

  direction = directions[(index + sides[side]) % 4];
  return { y, x, direction };
};

export const moveSnake = ({ x, y, direction }) => {
  const commands = {
    N: () => ({ y: y === 0 ? grid.length - 1 : y - 1, x, direction }),
    E: () => ({ y, x: (x + 1) % grid[0].length, direction }),
    S: () => ({ y: (y + 1) % (grid.length + text.length), x, direction }),
    W: () => ({ y, x: x === 0 ? grid[0].length - 1 : x - 1, direction }),
  };

  return commands[direction]();
};

const updateScreen = () => {
  if (snakeBody.length === text.length) {
    const tail = snakeBody.shift();
    grid[tail[0]][tail[1]] = " ";
  }
  grid[position.y][position.x] = "*";
  snakeBody.push([position.y, position.x]);
};

export const executeInstruction = (instruction) => {
  const instructions = {
    L: () => turnSnake(position, instruction),
    R: () => turnSnake(position, instruction),
    M: () => moveSnake(position),
  };
  position = instructions[instruction]();

  if (instruction === "M") updateScreen();
};

// const clearGrid = () => {
//   grid.map((x) => x.fill(" "));
// };

const findIndex = (index) => {
  let i = 0;

  if (index < text.length) {
    i = text.length - index - 1;
    index = 0;
  } else {
    index = index - text.length + 1;
  }

  return [i, index];
};

const makeInitialGrid = (y, x) => {
  let [i, index] = findIndex(x);

  while (i < text.length && index < grid[y].length - text.length) {
    snakeBody.push([y, index]);
    grid[y][index++] = text[i++];
  }
};

// const generateRandomIndex = () => {
//   return Math.floor(Math.random() * 20);
// };

const verifySnackPosition = () => {
  return snakeBody.includes([snack.y, snack.x]);
};

const createSnacks = () => {
  snack.y = Math.floor(Math.random() * grid.length);
  snack.x = Math.floor(Math.random() * grid[0].length);

  if (verifySnackPosition()) createGrid();
  grid[snack.y][snack.x] = "•";
};

const instruction = ()=> {
  
}

const makeMarquee = (position) => {
  makeInitialGrid(position.y, position.x);
  const instructions = "LMMMMMMMMMMMRMMMMM";
  let index = 0;
  createSnacks();
  const end = setInterval(() => {
    if (index === instructions.length - 1) {
      clearInterval(end);
    }
    executeInstruction(instructions[index++]);

    display();
  }, 500);
};

let position = { y: 5, x: 4, direction: "E" };
let snack = { y: 0, x: 0 };

makeMarquee(position);
