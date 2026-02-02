// const isInvalidMove = (position, move) => {
//   const invalidMoves = {
//     "N": "\x1b[B",
//     "S": "\x1b[A",
//     "E": "\x1b[D",
//     "W": "\x1b[C",
//   };

//   return invalidMoves[position.direction] === move ||
//     !Object.values(invalidMoves).includes(move);
// };

// async function executeInstruction(snake) {
//   const position = snake.position;
//   const commands = {
//     "\x1b[A": "N",
//     "\x1b[B": "S",
//     "\x1b[C": "E",
//     "\x1b[D": "W",
//   };

//   const buffer = new Uint8Array(16);
//   while (true) {
//     const n = await connection.read(buffer);
//     if (buffer[0] === 113) Deno.exit();
//     console.log(buffer);
//     const move = decoder.decode(buffer.slice(0, n));
//     if (isInvalidMove(position, move)) continue;
//     snake.turnSnake(commands[move]);
//   }
// }
