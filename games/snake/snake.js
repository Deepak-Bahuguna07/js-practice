import { grid } from "./setup.js";

export class Snake {
  static snakeCount = 0;
  static snakeBodys = [];

  constructor(conn, symbol = "*") {
    this.id = Snake.snakeCount++;
    this.conn = conn;
    this.symbol = symbol;
    this.snakeBody = [];
    this.snakeLength = 5;
    this.score = 0;
    this.position = { y: Snake.snakeCount, x: 4, direction: "E" };
    Snake.snakeBodys.push(this.snakeBody);
    this.isAlive = true;
  }

  hasTouchedOtherSnake() {
    let touched = false;
    for (let index = 0; index < Snake.snakeBodys.length; index++) {
      if (this.id !== index && !touched) {
        touched = Snake.snakeBodys[index].some((point) =>
          this.position.x === point[1] && this.position.y === point[0]
        );
        // console.log({ point }, this.position);
      }
    }

    return touched;
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
