import '@/styles/globals.css';
import '@/styles/style.css';
import '@/styles/style1.css';
import '@/styles/style3.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>

      <Component {...pageProps} />
    </>
  );
}
