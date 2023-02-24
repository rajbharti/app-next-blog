import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <link
        rel="stylesheet"
        href="https://unpkg.com/@picocss/pico@1.*/css/pico.min.css"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
