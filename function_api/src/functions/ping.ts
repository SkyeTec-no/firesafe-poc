import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function ping(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  context.log(`Http function processed request for url "${request.url}"`);

  return { body: `Pong` };
}

app.http("httpTrigger1", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: ping,
});
