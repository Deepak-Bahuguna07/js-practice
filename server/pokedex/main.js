import { createApp } from "./src/app.js";
import { Eta } from "eta";

const getPage = (pokemons, type = "all") => {
  const eta = new Eta({ views: "./public/template" });
  console.log(pokemons, type);
  return eta.render("./template.html", {
    pokemons,
    type,
  });
};

const main = () => {
  const pokemons = JSON.parse(Deno.readTextFileSync("./pokemons.json"));
  const app = createApp(pokemons, getPage);
  Deno.serve({ port: 8000 }, app.fetch);
};

main();
