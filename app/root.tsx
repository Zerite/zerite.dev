import type { MetaFunction } from "remix";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    gray: {
      "100": "#f7fafc",
      "200": "#edf2f7",
      "300": "#e2e8f0",
      "400": "#cbd5e0",
      "500": "#a0aec0",
      "600": "#969696",
      "700": "#343434",
      "800": "#181818",
      "900": "#101010",
    },
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

export const meta: MetaFunction = () => {
  return {
    title: "Zerite Development",
    description:
      "A team of passionate developers, innovating in the gaming space.",
    "og:image": "/assets/banner.png",
    "og:color": "#101010",
    "og:type": "object",
    "og:site_name": "Zerite Development",
    "og:url": "https://zerite.dev",
    "twitter:card": "summary_large_image",
  };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <Outlet />
        </ChakraProvider>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
