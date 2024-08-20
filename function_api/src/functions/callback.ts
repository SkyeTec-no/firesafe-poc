import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function callback(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  context.log(`Http function processed request for url "${request.url}"`);

  const name = request.query.get("name") || (await request.text()) || "world";

  return { body: `Hello from callback function` };
}

app.http("callback", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: callback,
});
