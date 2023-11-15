import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Pagina de la iniciativa micalab" />
        <meta name="keywords" content="chicubun, fuechy, quyca" />
        <meta name="author" content="Daniela" />
        <link rel="icon" href="/icons/logo.svg" type="image/svg+xml" />
        <title>Micalab</title>
      </Head>
      <body>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ maxWidth: "1232px", width: "100%" }}>
            <Main />
          </div>
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
