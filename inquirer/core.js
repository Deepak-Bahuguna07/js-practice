import { createPrompt } from "@inquirer/core";

const input = createPrompt((config, done) => {
  // Implement logic

  return "? My question";
});

// And it is then called as
const answer = await input({
  /* config */
});
