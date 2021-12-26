import ReactDOMServer, { renderToString } from "react-dom/server";
import type { EntryContext } from "remix";
import { RemixServer } from "remix";
import createEmotionServer from "@emotion/server/create-instance";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { createContext } from "react";

const StylesContext = createContext<null | string>(null);

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  // set up the Emotion cache
  const cache = createCache({ key: "chakra" });

  // Get functions to extract Emotion CSS styles from the app
  const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    createEmotionServer(cache);

  // This render is here to let Emotion extract the styles used
  const html = renderToString(
    <CacheProvider value={cache}>
      <RemixServer context={remixContext} url={request.url} />
    </CacheProvider>,
  );

  // Now that we rendered to a string, we can get the styles out of the html
  const chunks = extractCriticalToChunks(html);
  const styles = constructStyleTagsFromChunks(chunks);

  // Finally, we render a second time, but this time we have styles to apply,
  // make sure to pass them to `<StylesContext.Provider value>`
  const markup = ReactDOMServer.renderToString(
    <StylesContext.Provider value={styles}>
      <RemixServer context={remixContext} url={request.url} />
    </StylesContext.Provider>,
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
