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
  <Image
      src="/Review/review1.jpg" 
      alt="Google_Ads_สายเทา" 
      width={1000} 
      height={250} 
     
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
      src="/Review/review2.jpg" 
      alt="Google_Ads_สายเทา" 
      width={1000} 
      height={250} 
     
    />      <div className="card-body">
    <h5 className="card-title"></h5>
    <p className="card-text">รีวิวการใช้งานจากลูกค้าจริง 02
   </p>
    <p className="card-text"></p>
  </div>
</div>
<div className="card">
  <Image
      src="/Review/review3.jpg" 
      alt="Google_Ads_สายเทา" 
      width={1000} 
      height={250} 
     
    />     <div className="card-body">
    <h5 className="card-title"></h5>
    <p className="card-text">รีวิวการใช้งานจากลูกค้าจริง 03
   </p>
    <p className="card-text"></p>
  </div>
</div>
<div className="card">
  <Image
      src="/Review/review4.jpg" 
      alt="Google_Ads_สายเทา" 
      width={1000} 
      height={250} 
     
    />     <div className="card-body">
    <h5 className="card-title"></h5>
    <p className="card-text">รีวิวการใช้งานจากลูกค้าจริง 04
   </p>
    <p className="card-text"></p>
  </div>
</div>
</div>

<hr /><hr />
   
 {/* ----------------------------------------------------- */}
 <div className="text-center">
<h5>รีวิวจากลูกค้าจริง ขอปรับงบเพิ่ม จาก5,000บาท/วัน เป็น 10,000 บาท/วัน</h5>
</div>


 <div className="card-group">
  <div className="card">
  <Image
      src="/Review/review01.jpg" 
      alt="Google_Ads_สายเทา" 
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
      src="/Review/review02.jpg" 
      alt="Google_Ads_สายเทา" 
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
      src="/Review/review03.jpg" 
      alt="Google_Ads_สายเทา" 
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

    </>
  )
}
