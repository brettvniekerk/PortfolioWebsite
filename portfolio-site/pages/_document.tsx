import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en"> {/* added lang for accessibility score on Lighthouse */}
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}