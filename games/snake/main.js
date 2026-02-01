const decoder = new TextDecoder();
// const encoder = new TextEncoder();

const createGrid = (row, coloums) =>
  Array.from({ length: row }, () => Array(coloums).fill(" "));

Deno.stdin.setRaw(true);

let score = 0;

const grid = createGrid(20, 50);
const snakeBody = [];

const display = (position) => {
  console.clear();
  console.log(grid.map((x) => x.join(" ")).join("\n"));
  console.log("score: ", score);
  console.log(position);
};

export const turnSnake = (position, side) => position.direction = side;

export const moveSnake = (position) => {
  const commands = {
    N: () => position.y = position.y ? position.y - 1 : grid.length - 1,
    E: () => position.x = (position.x + 1) % grid[0].length,
    S: () => position.y = (position.y + 1) % (grid.length),
    W: () => position.x = position.x ? position.x - 1 : grid[0].length - 1,
  };

  return commands[position.direction]();
};

const isInvalidPosition = (snack) => snakeBody.includes([snack.y, snack.x]);

const createSnacks = (snack) => {
  snack.y = Math.floor(Math.random() * grid.length);
  snack.x = Math.floor(Math.random() * grid[0].length);

  if (isInvalidPosition(snack)) createSnacks(snack);
  grid[snack.y][snack.x] = "x";
};

const updateScreen = (position, snake, snack) => {
  if (snakeBody.length === snake.length) {
    const tail = snakeBody.shift();
    grid[tail[0]][tail[1]] = " ";
  }

  grid[position.y][position.x] = "*";
  if (snack.y === position.y && snack.x === position.x) {
    score++;
    createSnacks(snack);
  }

  snakeBody.push([position.y, position.x]);
};

const makeInitialGrid = ({ y }, snake, snack) => {
  let i = 0;
  while (i < 5) {
    snakeBody.push([y, i]);
    grid[y][i] = snake[i];
    i++;
  }

  createSnacks(snack);
};

const game = async (position, snake, snack) => {
  await new Promise(() =>
    setInterval(() => {
      moveSnake(position);
      display(position);
      updateScreen(position, snake, snack);
    }, 500)
  );
};

const isInvalidMove = (position, move) => {
  const invalidMoves = {
    "N": "s",
    "S": "w",
    "E": "a",
    "W": "d",
  };

  return invalidMoves[position.direction] === move ||
    !Object.values(invalidMoves).includes(move);
};

async function readInput(position) {
  const commands = {
    w: () => turnSnake(position, "N"),
    a: () => turnSnake(position, "W"),
    s: () => turnSnake(position, "S"),
    d: () => turnSnake(position, "E"),
  };

  const buffer = new Uint8Array(10);
  while (true) {
    const n = await Deno.stdin.read(buffer);
    if (n) {
      if (buffer[0] === 113) Deno.exit();
      const move = decoder.decode(buffer.slice(0, n));
      if (isInvalidMove(position, move)) continue;
      commands[move]();
    }
  }
}

const main = () => {
  const snake = "*****";
  const position = { y: 5, x: 4, direction: "E" };
  const snack = { y: 0, x: 0 };

  makeInitialGrid(position, snake, snack);
  readInput(position);

  game(position, snake, snack);
};

await main();
