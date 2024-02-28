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
        <title>Posts Page</title>
      </Head>


      <main className='container text-center'>
 <h1>Posts</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.h_line}</p>

              <div className="image-container">
              {post.img && <Image src={post.img} alt={post.title} fill className="image" style={{ objectFit: 'cover' }} />}
              </div>
              <p>PPP: {post.ppp}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
      <style jsx>{`
      .image-container {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 56.25%; // สำหรับรูปภาพแบบ 16:9
      }
      .image {
        objectFit: cover;
      }
    `}</style>
    </>
  );
}

