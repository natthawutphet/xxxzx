import Head from 'next/head';
import { AppProps } from 'next/app';
import Header from './Header';

interface HomePageProps extends AppProps {
  data: {
    urls: string;
  };
}

export default function HomePage({ data }: HomePageProps) {
  return (
    <>
      <Head>
        <title>รับทำโฆษณาออนไลน์สายเทา</title>
        <meta name="description" content="ทำโฆษณาเว็บไซต์ต่างๆด้วยทีมงานมืออาชีพ" />
        <meta name="keywords" content="ยิงads,facebook,สายเทา" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="adsmanager" />
        <meta property="og:title" content="รับทำโฆษณาออนไลน์สายเทา" />
        <meta property="og:description" content="รับทำโฆษณาออนไลน์สายเทา Google, YouTube, Facebook" />
        <link rel="canonical" href={data.urls} />
      </Head>
      <div>
      <Header />
      
      </div>
    </>
  );
}

