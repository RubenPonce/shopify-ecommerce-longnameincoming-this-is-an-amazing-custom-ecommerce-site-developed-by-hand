import { Html, Head, Main, NextScript } from 'next/document'
import MainLayout from "@/components/layouts/MainLayout";
export default function Document() {
  return (
    <Html lang="en">
      <Head >
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;500&family=Playball&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
      <MainLayout>
        <Main />
        <NextScript />
      </MainLayout>
      </body>
    </Html>
  )
}
