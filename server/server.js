// import {
//   createNotFoundResponse,
//   createSuccessResponse,
// } from "./handleRequest.js";
// const greeting = Deno.readTextFileSync("./greeting.html");
// const pradipJana = Deno.readTextFileSync("./jana.html");

const decoder = new TextDecoder();
const encoder = new TextEncoder();

const readRequest = async (conn) => {
  const buf = new Uint8Array(1024);
  const n = await conn.read(buf);

  return decoder.decode(buf.slice(0, n));
};

const parseRequest = (request) => {
  const [requestLine] = request.split("\r\n");
  const [method, path, protocol] = requestLine.split(" ");
  return { method, path, protocol };
};

const writeResponse = async (conn, response) => {
  console.log("write", response);
  await conn.write(encoder.encode(response));
};

const handleConn = async (conn, handleRequest) => {
  const req = await readRequest(conn);
  const request = parseRequest(req);
  console.log(`${request.method} ${request.path} ${request.protocol}`);

  const response = handleRequest(request);
  await writeResponse(conn, response);
};

export const serve = async (port, handleRequest) => {
  const listener = await Deno.listen({ port: port });
  console.log("Server running....");
  for await (const conn of listener) {
    handleConn(conn, handleRequest);
  }
};
