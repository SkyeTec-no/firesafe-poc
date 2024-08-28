import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { AuthorizationCode } from "simple-oauth2";
import { config } from "./auth";

export async function callback(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  const client = new AuthorizationCode(config);
  const code = request.query.get("code");
  const originPattern = process.env.ORIGIN || "";
  let oauthProvider = "github";
  let message, content;
  try {
    const accessToken = await client.getToken({ code: code, redirect_uri: process.env.REDIRECT_URL });
    message = "success";
    content = {
      token: accessToken.token.access_token,
      provider: oauthProvider,
    };
  } catch (error) {
    context.error(`Access Token Error "${request.url}"`, error.message);
    message = "error";
    content = JSON.stringify(error);
  }
  const script = `
  <script>
  (function() {
    function recieveMessage(e) {
      console.log("recieveMessage %o", e)
      if (!e.origin.match(${JSON.stringify(originPattern)})) {
        console.log('Invalid origin: %s', e.origin);
        return;
      }

      window.opener.postMessage(
        'authorization:${oauthProvider}:${message}:${JSON.stringify(content)}',
        e.origin
      )
    }
    window.addEventListener("message", recieveMessage, false)
    // Start handshare with parent
    console.log("Sending message: %o", "${oauthProvider}")
    window.opener.postMessage("authorizing:${oauthProvider}", "*")
  })()
  </script>`;
  context.log(script);
  return { body: script, headers: { "Content-Type": "text/html" } };
}

app.http("callback", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: callback,
});
