const createResponseLine = () => "HTTP/1.1 200 OK";
const createHeaders = (headers) => {
  return Object.entries(headers)
    .map(([name, value]) => `${name}: ${value}`)
    .join("\r\n");
};
export const createSuccessResponse = (content) => {
  const headers = {
    "Content-Type": "text/html",
    "Content-Length": content.length,
    "Date": new Date(),
    "Batch": "step-batch-11",
  };
  const response = [
    createResponseLine(),
    createHeaders(headers),
    "",
    content,
  ].join("\r\n");

  return response;
};
// exports.createSuccessResponse = createSuccessResponse;
export const createNotFoundResponse = () =>
  `HTTP/1.1 404 NOT FOUND\r\nContent-Type: text/html\r\n,Content-Length:18\r\n\r\n<h3>NOT FOUND</h3>`;

// exports.createNotFoundResponse = createNotFoundResponse;

export const handleRequest = (request) => {
  if (request.path === "/jana.html") {
    return createSuccessResponse(pradipJana);
  } else if (request.path === "/greeting.html" || request.path === "/") {
    return createSuccessResponse(greeting);
  } else {
    return createNotFoundResponse();
  }
};
