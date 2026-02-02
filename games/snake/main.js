import { listener } from "./server.js";
import { decoder, encoder, grid } from "./setup.js";
import { Snake } from "./snake.js";

// Deno.stdin.setRaw(true);

const display = async (snake) => {
  const screen = `${
    grid.map((x) => x.join(" ")).join("\n")
  }\n score: ${snake.score}\n`;

  // Deno.stdout.write(encoder.encode("\x1b[2J\x1b[H" + screen));
  // console.clear();
  if (snake.isAlive) {
    await snake.conn.write(encoder.encode("\x1b[2J\x1b[H" + `${screen}`));
  }
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

const snakeOnSnake = ([y, x], snake) =>
  snake.snakeBody.some((a) => a[1] === x && a[0] === y);

const eatFood = (position, food) => {
  const index = food.findIndex((apple) =>
    apple.x === position.x && apple.y === position.y
  );

  if (index === -1) return false;

  food.splice(index, 1);
  return true;
};

const killTheSnake = async (snake, food) => { // connection cut karna hai`
  console.log("kill main aaya.....");
  try {
    snake.conn.write(encoder.encode(`\n\nyou Scored ${snake.score}!`));
    snake.snakeBody.forEach(([y, x]) => {
      grid[y][x] = "x";
      food.push({ y, x });
    });

    snake.snakeBody = [];
    snake.isAlive = false;

    console.log(snake);
    await snake.conn.close();
  } catch (_) {
    console.log("died!");
  }
};

const updateScreen = (snake, food) => {
  if (snake.hasTouchedOtherSnake()) return killTheSnake(snake, food);
  const position = snake.position;
  let khanaKhaya = false;
  grid[position.y][position.x] = snake.symbol;
  // console.log(snake.snakeBody, food);
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
  // console.log({ food, snake });
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
    // try {
    const n = await snake.conn.read(buffer);
    if (buffer[0] === 113) return killTheSnake(snake, food);
    // console.log(buffer);
    const move = decoder.decode(buffer.slice(0, n)).trim();
    if (isInvalidMove(position, move)) continue;
    snake.turnSnake(commands[move]);
    // } catch (_) {
    //   console.log("died!");
    //   // snake.conn.close();
    //   break;
    // }
  }

  // return;
}

const main = async () => {
  const buffer = new Uint8Array(24);
  const food = [];

  for await (const connection of listener) {
    console.log("connected!");
    await connection.write(encoder.encode("Enter symbol: "));
    const n = await connection.read(buffer);
    const symbol = decoder.decode(buffer.slice(0, n)).trim();
    const snake = new Snake(connection, symbol);
    console.log(snake);

    makeInitialGrid(snake, food);
    executeInstruction(snake);

    game(snake, food);
  }
  console.log("bahar aa gya hai");
};

await main();
