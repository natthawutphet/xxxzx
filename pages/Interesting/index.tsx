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
<<<<<<< HEAD

    <Head>
        <title>สาระเนื้อหา ความรู้ฟรี จากทีมงานทำการตลาดออนไลน์สายเทา</title>
        <meta name="description" content="หน้าความรู้สาระเนื้อหาความรู้ฟรี จากทีมงานทำการตลาดออนไลน์สายเทา" />

        <meta name="keywords" content="ยิงads,facebook,สายเทา,โฆษณา,ยิงads facebook สายเทา,รับยิงads,รับยิงแอด สายเทา,facebook ads,google ads,google,รับยิงแอด,ads,รับทำโฆษณา,รับโฆษณา,Facebook,การตลาด,โฆษณาออนไลน์,เว็บไซต์,ตลาดเป้าหมาย,โฆษณาบนโซเชียลมีเดีย,Google Ads,การโฆษณาบน Facebook,การโฆษณาออนไลน์บนสื่อต่าง ๆ,การตลาดออนไลน์,การโปรโมท,โฆษณา Facebook,การโฆษณา Google,การโฆษณาสินค้า,การโฆษณาโปรโมชั่น,วิธีการโฆษณา,ความสำเร็จในการตลาด,บริการโฆษณา,การตลาดออนไลน์บน Facebook,การโฆษณาบนเว็บ,การวางแผนโฆษณา,รับจ้างโฆษณา" />
<meta name="keywords" content="รับทำ seo สายเทา, รับทำ seo สายดำ, แอดสายเทา, รับยิงแอดสายเทา, กูเกิ้ลแอดสายเทา, รับทํา google ads, สายเทา seo สายเทา, รับทำโฆษณาสายเทา, ทำการตลาดสายเทา, ads สายเทา, รับทํา seo สายเทา, ยิงแอดสายเทา, โปรโมทสายเทา, facebook ads, สายเทา, การตลาดสายเทา, ยิงadsสายเทา, ยิงแอด google สายเทา, รับทำการตลาดสายเทา, รับจ้างยิงแอดสายเทา, โฆษณาสายเทา, ตลาดสายเทา, ads, สายเทา, แอดสายเทา, ยิงแอดสายเทา, pantip ยิงแอดสายเทาfacebook, ทําseoสายเทา, ยิงadsfacebookสายเทา, ยิงแอดสายเทาเฮียบอย, รับทำเว็บสายเทา, การทำseoสายเทา, ทำseoสายเทา, ยิงแอดyoutubeสายเทา, ยิงแอดสายเทาราคา, ยิงแอดสายเทา2022, ยิงแอดสายดำ, รับจ้างแอดสายเทา, ยิงแอดสายเทาgoogle, ตลาดสีเทา, แอดสีเทา, adsสีเทา, กราฟฟิกสายเทา, ยิงแอดเทา, รับยิงแอดfacebookสายเทา, รูปยิงแอดสายเทา, รับจ้างสายเทา, รับโฆษณาสายเทา " />




=======
    <div>
      <Head>
        <title>สาระเนื้อหา ความรู้ฟรี จากทีมงานทำการตลาดออนไลน์สายเทา</title>
        <meta name="description" content="หน้าความรู้สาระเนื้อหาความรู้ฟรี จากทีมงานทำการตลาดออนไลน์สายเทา" />

>>>>>>> 734553101062016d53ab467d1fca18b86da67181
        <meta name="robots" content="index, follow"/>
           <meta name="author" content="adsmanager"/>
           <meta property="og:title" content="ทำการตลาดออนไลน์สายเทา"/>
           <meta property="og:description" content="สาระเนื้อหา ความรู้ฟรี จากทีมงานทำการตลาดออนไลน์สายเทา"/>
  <meta property="og:image" content="https://www.service-ads.com/img/ads.jpg"/>
          
  <link rel="canonical" href="https://www.service-ads.com/Interesting" /> 
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
 
   
    </>
  );
}

