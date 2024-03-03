import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

interface Post {
  id: number;
  title: string;
  h_line: string;
  img: string;
  ppp: string;
} 

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.service-ads.com/api');
      const data = await response.json();
      setPosts(data);
    }

    fetchData();
  }, []);

  return (
    <> 
    <div>
      <Head>
        <title>สาระเนื้อหา ความรู้ฟรี จากทีมงานทำการตลาดออนไลน์สายเทา</title>
        <meta name="description" content="หน้าความรู้สาระเนื้อหาความรู้ฟรี จากทีมงานทำการตลาดออนไลน์สายเทา" />
      </Head>


      <main className='container text-center'>

        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h1>{post.title}</h1>
              {post.img &&  <div className="image-container"> <Image src={post.img} alt={post.title} fill className="image" style={{ objectFit: 'cover' }} />  </div>}
              <h3>{post.h_line}</h3>
              <p> {post.ppp}</p>
            </li>
           
          ))}
        </ul>
      </main>
    </div>
   
    </>
  );
}

