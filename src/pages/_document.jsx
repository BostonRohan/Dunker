import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charset="utf-8" />
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Teko:600|Work+Sans:500"
          rel="stylesheet"
        />
        {/* <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
        <meta name="twitter:widgets:theme" content="dark" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
