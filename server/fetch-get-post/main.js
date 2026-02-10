import { handleRequest } from "./handler.js";

const main = () => {
  Deno.serve({ port: 3000 }, handleRequest);
};

main();
