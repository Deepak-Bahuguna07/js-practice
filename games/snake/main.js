import { listener } from "./server.js";
import { decoder, encoder, grid } from "./setup.js";
import { Snake } from "./snake.js";

Deno.stdin.setRaw(true);

const display = (snake) => {
  console.clear();
  console.log(grid.map((x) => x.join(" ")).join("\n"));
  console.log("score: ", snake.score);
  console.log(snake.position);
};

const isInvalidPosition = (snake, [x, y]) =>
  snake.snakeBody.some((a) => a[1] === x && a[0] === y);

const createFood = (snake, food) => {
  while (food.length < 10) {
    const y = Math.floor(Math.random() * grid.length);
    const x = Math.floor(Math.random() * grid[0].length);
    if (isInvalidPosition(snake, [x, y])) return createFood(snake, food);
    grid[y][x] = "x";
    food.push({ y, x });
  }
};

// const snakeOnSnake = ([y, x], snake) =>
//   snake.snakeBody.some((a) => a[1] === x && a[0] === y);

const eatFood = (position, food) => {
  const index = food.findIndex((apple) =>
    apple.x === position.x && apple.y === position.y
  );

  if (index === -1) return false;

  food.splice(index, 1);
  return true;
};

const updateScreen = (snake, food) => {
  const position = snake.position;
  let khanaKhaya = false;
  grid[position.y][position.x] = snake.symbol;
  console.log(snake.snakeBody, food);
  if (eatFood(position, food)) {
    snake.score++;
    createFood(snake, food);
    khanaKhaya = true;
  }

  snake.snakeBody.push([position.y, position.x]);
  if (khanaKhaya) return;
  const tail = snake.snakeBody.shift();
  if (snakeOnSnake(tail, snake)) return;
  grid[tail[0]][tail[1]] = " ";
};

const makeInitialGrid = (snake, food) => {
  console.log({ food, snake });
  const { y } = snake.position;
  let i = 0;

  while (i < snake.snakeLength) {
    snake.snakeBody.push([y, i]);
    grid[y][i] = snake.symbol;
    i++;
  }

  createFood(snake, food);
};

const game = async (snake, food) => {
  await new Promise(() =>
    setInterval(() => {
      snake.moveSnake();
      updateScreen(snake, food);
      display(snake);
    }, 100)
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

async function executeInstruction(snake) {
  const position = snake.position;
  const commands = {
    "w": "N",
    "s": "S",
    "d": "E",
    "a": "W",
  };

  const buffer = new Uint8Array(16);
  while (true) {
    const n = await snake.conn.read(buffer);
    if (buffer[0] === 113) Deno.exit();
    console.log(buffer);
    const move = decoder.decode(buffer.slice(0, n)).trim();
    if (isInvalidMove(position, move)) continue;
    snake.turnSnake(commands[move]);
  }
}

const main = async () => {
  const buffer = new Uint8Array(24);
  for await (const connection of listener) {
    console.log("connected!");
    await connection.write(encoder.encode("Enter symbol: "));
    const n = await connection.read(buffer);
    const symbol = decoder.decode(buffer.slice(0, n)).trim();
    const snake = new Snake(1, connection, symbol);
    const food = [];

    makeInitialGrid(snake, food);
    executeInstruction(snake, connection);

    game(snake, food);
  }
};

await main();
