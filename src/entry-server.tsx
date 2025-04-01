// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="ja">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" sizes="32x32" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/manifest.webmanifest" />

          <link rel="stylesheet" href="/app.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap"
            rel="stylesheet"
          />

          <meta property="og:title" content="cp20.dev" />
          <meta
            property="og:description"
            content="世の中にはね、無駄なことなんかひとつだってないのよ、きっと"
          />
          <meta
            property="og:image"
            content="https://cp20.dev/works/og/2025-portfolio.png"
          />
          <meta property="og:url" content="https://cp20.dev" />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="https://cp20.dev/works/og/2025-portfolio.png"
          />
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
