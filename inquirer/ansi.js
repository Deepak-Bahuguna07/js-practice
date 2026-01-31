import {
  cursorDown,
  cursorHide,
  cursorLeft,
  cursorShow,
  cursorTo,
  cursorUp,
  eraseLines,
} from "@inquirer/ansi";

// Move cursor
process.stdout.write(cursorDown(3));
process.stdout.write(cursorUp(3));

// Move cursor to specific position (x: 10, y: 5)
// process.stdout.write(cursorTo(200, 5));

// Hide/show cursor
// process.stdout.write(cursorHide);
// process.stdout.write(cursorShow);

// Clear 5 lines
// process.stdout.write(eraseLines(5));
