import { Hono } from "hono";
import { serveStatic } from "hono/deno";
import { serveAllPokemos, servePage, servePokemon, serveType } from "./serve.js";

export const createApp = (pokemons, getPage) => {
  const app = new Hono();

  app.use(async (context, next) => {
    context.set("pokemons", pokemons);
    context.set("getPage", getPage);
    await next();
  });

  app.get("/", servePage);
  app.get("/pokemons", serveAllPokemos);
  app.get("/type", serveType);
  app.get("/search-pokemon", servePokemon);
  app.get("*", serveStatic({ root: "./public" }));

  return app;
};
