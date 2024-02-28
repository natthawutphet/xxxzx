import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head'


export default function index() {
  return (
    <>
      

    <div className="container">
      





    <div className="text-center">
    <h5>รีวิวจากลูกค้าจริง ลูกค้าประจำแนะนำเพื่อนบอกต่อปากต่อปาก การันตีผลงานให้ด้วย</h5>
</div>


<div className="card-group">
  <div className="card">
 
  <div className="image-container">
          <Image src="/review/review1.jpg" alt="Review" fill className="image" style={{ objectFit: 'cover' }} />
        </div><Link href="/">รีวิวการใช้งานจากลูกค้าจริง </Link>
  <div className="image-container">
          <Image src="/review/review2.jpg" alt="Review" fill className="image" style={{ objectFit: 'cover' }} />
        </div><Link href="/">รีวิวการใช้งานจากลูกค้าจริง </Link>
  <div className="image-container">
          <Image src="/review/review3.jpg" alt="Review" fill className="image" style={{ objectFit: 'cover' }} />
        </div><Link href="/">รีวิวการใช้งานจากลูกค้าจริง </Link>
  <div className="image-container">
          <Image src="/review/review4.jpg" alt="Review" fill className="image" style={{ objectFit: 'cover' }} />
        </div><Link href="/">รีวิวการใช้งานจากลูกค้าจริง </Link>

        </div></div>
 {/* ----------------------------------------------------- */}
 <div className="text-center">
<h5>รีวิวจากลูกค้าจริง ขอปรับงบเพิ่ม จาก5,000บาท/วัน เป็น 10,000 บาท/วัน</h5>
</div>


 <div className="card-group">
  <div className="card">
  <Image
      src="/review/review01.jpg" 
      alt="Review" 
      width={1080} 
      height={1080} 
     
    />   
     <div className="card-body">
      <h5 className="card-title"></h5>
      <p className="card-text">รีวิวการใช้งานจากลูกค้าจริง 01
     </p>
      <p className="card-text"></p>
    </div>
  </div>
  <div className="card">
  <Image
      src="/review/review02.jpg" 
      alt="Review" 
      width={1080} 
      height={1080} 
     
    />      <div className="card-body">
    <h5 className="card-title"></h5>
    <p className="card-text">รีวิวการใช้งานจากลูกค้าจริง 02
   </p>
    <p className="card-text"></p>
  </div>
</div>
<div className="card">
  <Image
      src="/review/review03.jpg" 
      alt="Review" 
      width={1080} 
      height={1080} 
     
    />     <div className="card-body">
    <h5 className="card-title"></h5>
    <p className="card-text">รีวิวการใช้งานจากลูกค้าจริง 03
   </p>
    <p className="card-text"></p>
  </div>
</div>
</div>


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
  )
}
