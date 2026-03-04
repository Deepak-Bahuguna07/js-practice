import { Hono } from "hono";
import { serveStatic } from "hono/deno";
import { serveAllPokemos } from "./serve.js";

export const createApp = (pokemons) => {
  const app = new Hono();

  app.use(async (context, next) => {
    context.set("pokemons", pokemons);
    await next();
  });

  app.get("/pokemons", serveAllPokemos);
  app.get("*", serveStatic({ root: "./public" }));

  return app;
};
