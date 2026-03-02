import * as u from "./user.json" with { type: "json" };
const users = u.default;

export const handleRequest = async (req) => {
  const url = new URL(req.url);

  // console.log(req);
  if (url.pathname === "/favicon.ico") {
    return new Response(null);
  }

  if (url.pathname === "/") {
    const homePage = Deno.readTextFileSync("index.html");
    if (req.method === "POST") {
      const data = await req.formData();
      const email = data.get("email");
      const pass = +data.get("password");
      // console.log("hi");
      console.log(users, email, pass, users[email]);

      if (email in users) {
        console.log("hnhnhnhn");
        if (pass === users[email].password) {
          console.log("hey hey");
          return new Response(`<h1>HELLO ${users[email].name}</h1>`, {
            headers: { "content-type": "text/html" },
          });
        }
      }
    }
    return new Response(homePage, { headers: { "content-type": "text/html" } });
  }
};
