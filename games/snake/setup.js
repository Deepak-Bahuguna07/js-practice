export const decoder = new TextDecoder();
export const encoder = new TextEncoder();

const createGrid = (row, coloums) =>
  Array.from({ length: row }, () => Array(coloums).fill(" "));

export const grid = createGrid(30, 50);
