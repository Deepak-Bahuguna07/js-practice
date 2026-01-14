// import { parser, SPECIFIERS } from "./src/parser.js";

export const main = (args) => {
  const { isQuietMode, mode, count, files } = parser(args);
  if (count === "0") return;

  if (isNaN(parseInt(count))) {
    return writeData([`head: illegal line count -- ${count}`]);
  }

  const separator = SPECIFIERS[mode];
  // if (!files.length) return headStdin(mode, count);
  // return head(isQuietMode, separator, count, files);
};
