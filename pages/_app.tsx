import '@/styles/globals.css';
import '@/styles/style.css';
import '@/styles/style1.css';
import '@/styles/style3.css';
import Script from 'next/script';
import Head from 'next/head';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Metadata like charset, viewport, title, etc., goes here */}
        <title>Your Site Title</title>
        <meta name="description" content="Your site description" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16457513085"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16457513085');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
