import { grid } from "./setup.js";

export class Snake {
  constructor(snakeCount, conn, symbol = "*") {
    this.conn = conn;
    this.symbol = symbol;
    this.snakeBody = [];
    this.snakeLength = 5;
    this.score = 0;
    this.position = { y: snakeCount, x: 4, direction: "E" };
  }

  turnSnake(side) {
    this.position.direction = side;
  }

  moveSnake() {
    const position = this.position;
    const commands = {
      N: () => position.y = position.y ? position.y - 1 : grid.length - 1,
      E: () => position.x = (position.x + 1) % grid[0].length,
      S: () => position.y = (position.y + 1) % (grid.length),
      W: () => position.x = position.x ? position.x - 1 : grid[0].length - 1,
    };

    return commands[position.direction]();
  }
}
