import React from 'react';
import Image from 'next/image';

export default function Reviews() {
  return (
    <>
    <div className="reviews">
      <div className="a">
        <h5>รีวิวจากลูกค้าจริง ลูกค้าประจำแนะนำเพื่อนบอกต่อปากต่อปาก การันตีผลงานให้ด้วย</h5>
        <div id="carouselExampleIntervalA" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {/* Corrected the src path and added width and height for all images */}
            <div className="carousel-item active" data-bs-interval="2000">
              <Image src="/review/review1.jpg" alt="Review 01" width={500} height={300} />
              <label>รีวิวการใช้งานจากลูกค้าจริง 01</label>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <Image src="/review/review2.jpg" alt="Review 02" width={500} height={300} />
              <label>รีวิวการใช้งานจากลูกค้าจริง 02</label>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <Image src="/review/review3.jpg" alt="Review 03" width={500} height={300} />
              <label>รีวิวการใช้งานจากลูกค้าจริง 03</label>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <Image src="/review/review4.jpg" alt="Review 04" width={500} height={300} />
              <label>รีวิวการใช้งานจากลูกค้าจริง 04</label>
            </div>
          </div>
          {/* Carousel Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIntervalA" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIntervalA" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>


   
  
  <h5>รีวิวจากลูกค้าจริง ขอปรับงบเพิ่ม จาก5,000บาท/วัน เป็น 10,000 บาท/วัน</h5>
  <div className="fxxx">

        <div className="image-container">
          <Image src="/review/review01.jpg" alt="Facebook Ads" fill className="image" style={{ objectFit: 'cover' }} />
        </div>
        <div className="image-container">
          <Image src="/review/review02.jpg" alt="Facebook Ads" fill className="image" style={{ objectFit: 'cover' }} />
        </div>
        <div className="image-container">
          <Image src="/review/review03.jpg" alt="Facebook Ads" fill className="image" style={{ objectFit: 'cover' }} />
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
  );
}
