import { Html, Head, Main, NextScript } from 'next/document'
import MainLayout from "@/components/layouts/MainLayout";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
      <MainLayout>
        <Main />
        <NextScript />
      </MainLayout>
      </body>
    </Html>
  )
}
