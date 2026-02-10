const INTERNS = [];

export const handleRequest = async (request) => {
  const { pathname } = new URL(request.url);

  if (pathname === "/interns" && request.method === "GET") {
    return await new Response(JSON.stringify(INTERNS));
  }

  const intern = await request.json();
  INTERNS.push(intern);
  return new Response(JSON.stringify({ OK: true }), { status: 201 });
};
