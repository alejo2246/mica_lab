import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
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
