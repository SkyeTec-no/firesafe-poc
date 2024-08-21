import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { ClientCredentials, ResourceOwnerPassword, AuthorizationCode } from "simple-oauth2";

export const config = {
  client: {
    id: process.env.OAUTH_CLIENT_ID,
    secret: process.env.OAUTH_CLIENT_SECRET,
  },
  auth: {
    tokenHost: "https://github.com",
    tokenPath: "/login/oauth/access_token",
    authorizePath: "/login/oauth/authorize",
  },
};

export async function auth(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  context.log(`Http function processed request for url "${request.url}"`);
  const client = new AuthorizationCode(config);
  const authorizationUri = client.authorizeURL({
    redirect_uri: process.env.REDIRECT_URL,
    scope: "repo,user",
  });

  return {
    status: 301,
    headers: {
      Location: authorizationUri,
    },
    jsonBody: { authorizationUri },
  };
}

app.http("auth", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: auth,
});
