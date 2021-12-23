import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";

// @ts-ignore
// noinspection JSFileReferences
import * as build from "../build";

const handleRequest = createPagesFunctionHandler({
  build,
});

// noinspection JSUnusedGlobalSymbols
export function onRequest(context) {
  return handleRequest(context);
}
