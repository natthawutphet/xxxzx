import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head'

const CountdownModal = ({ isOpen, onCountdownComplete, initialCount = 30 }: { isOpen: boolean; onCountdownComplete: () => void; initialCount?: number }) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen && count > 0) {
      timer = setTimeout(() => setCount(count - 1), 1000);
    } else if (count === 0) {
      onCountdownComplete();
      setCount(initialCount); // Reset for next time
    }
    return () => clearTimeout(timer);
  }, [isOpen, count, onCountdownComplete, initialCount]);

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 1000,
      padding: '20px',
      background: 'white',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <h2>Downloading in {count} seconds...</h2>
    </div>
  );
};

const DownloadButtonWithCountdown = ({ fileName, url }: { fileName: string; url: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const startDownload = () => {
    setIsModalOpen(true);
  };

  const handleCountdownComplete = () => {
    setIsModalOpen(false);
    window.location.href = url;
  };

  return (
    <div>
      <button onClick={startDownload}>Download {fileName}</button>
      <CountdownModal isOpen={isModalOpen} onCountdownComplete={handleCountdownComplete} />
    </div>
  );
};

const App = () => {
  return (
    <>  

<Head>
           <title>Download template website สำหรับทำโฆษณาสายเทา ฟรี</title>
           <meta name="description" content="Download template website สำหรับทำโฆษณาสายเทา ฟรี"/>
           <meta name="robots" content="index, follow"/>
           <meta name="author" content="adsmanager"/>
           <meta property="og:title" content="website สำหรับทำโฆษณาสายเทา"/>
           <meta property="og:description" content="nload template website สำหรับทำโฆษณาสายเทา ฟรี"/>
  <meta property="og:image" content="https://www.service-ads.com/img/ads.jpg"/>
       
       
  <link rel="canonical" href="https://www.service-ads.com/Dowloads" /> 

    </Head>
    <div className="container text-center" >
      <h1>Download Files</h1>

      <div className="d-flex">
  <div className="p-2 flex-fill"> 
  <Image
      src="/fb.png" 
      alt="Google_Ads_สายเทา" 
      width={1080} 
      height={350} 
       
    />

  <DownloadButtonWithCountdown fileName="Facebook" url="fb.zip" />
  
  </div>



  <div className="p-2 flex-fill">
  <Image
      src="/gg.png" 
      alt="Google_Ads_สายเทา" 
      width={500} 
      height={300} 
       
    />
    
  <DownloadButtonWithCountdown fileName="Google" url="gg.zip" />

  </div>

</div>
    </div>

    </>
  );
};

export default App;
