// pages/download.tsx
import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const DownloadPage: React.FC = () => {
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [countdown, setCountdown] = useState<number>(30);
  const [downloadLink, setDownloadLink] = useState<string>("");

  useEffect(() => {
    // ล้างไทเมอร์เมื่อ component unmount
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [timer]);

  const startDownload = (fileLink: string) => {
    setDownloadLink(fileLink);
    setCountdown(30);
    const intervalId = setInterval(() => {
      setCountdown((prevCountdown: number) => {
        if (prevCountdown <= 1) {
          clearInterval(intervalId);
          // เมื่อนับถอยหลังครบ 30 วินาที จะเริ่มดาวน์โหลด
          window.location.href = fileLink;
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);
    setTimer(intervalId);
  };

  return (
    <>
      <Head>
        <title>Download Templates</title>
      </Head>
      <main className='d-flex container text-center' >
        <h1></h1>
        <section className='p-2 flex-fill' >
          <h2>Google Templates ทำโฆษณา Google</h2> <br /><br />
          <div className="text-center">  
          <img src="gg.png" className='gg' alt="Google Ads" />   <br /><br />
             
          </div>
          <button className='btn btn-success' onClick={() => startDownload('/Google.zip')}>
            Download 
          </button>
          {downloadLink === '/Google.zip' && countdown > 0 && (
            <p>Downloading in {countdown}...</p>
          )}
        </section>


        <section className='p-2 flex-fill' >
          <h2>Facebook Templates ทำโฆษณา Facebook</h2>
          <div className="text-center">  

          <img src="fb.png" className='fb' alt="Facebook Ads" />
          
          </div>
          <button className='btn btn-primary' onClick={() => startDownload('/facebook.zip')}>
            Download
          </button>
          {downloadLink === '/facebook.zip' && countdown > 0 && (
            <p>Downloading in {countdown}...</p>
          )}
        </section>
      </main>
    </>
  );
};

export default DownloadPage;
