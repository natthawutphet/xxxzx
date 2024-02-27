import React from 'react'


export default function reveiws() {
  return (

<div className="reveiws">

<div className="a">
<h5>รีวิวจากลูกค้าจริง ลูกค้าประจำแนะนำเพื่อนบอกต่อปากต่อปาก การันตีผลงานให้ด้วย</h5>

<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="2000">
      <img src="review/review1.jpg" className="d-block w-100" alt="reveiws"/>
      <label>รีวิวการใช้งานจากลูกค้าจริง 01</label>
    </div>
    <div className="carousel-item active" data-bs-interval="2000">
      <img src="review/review2.jpg" className="d-block w-100" alt="reveiws"/>
      <label>รีวิวการใช้งานจากลูกค้าจริง 02</label>
    </div>
    <div className="carousel-item active" data-bs-interval="2000">
      <img src="review/review3.jpg" className="d-block w-100" alt="reveiws"/>
      <label>รีวิวการใช้งานจากลูกค้าจริง 03</label>
    </div>
    <div className="carousel-item active" data-bs-interval="2000">
      <img src="review/review4.jpg" className="d-block w-100" alt="reveiws"/>
      <label>รีวิวการใช้งานจากลูกค้าจริง 04</label>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
   
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>

  </button>
</div></div>  

{/* --------------------------------- */}
<div className="text-center">
<h5>รีวิวจากลูกค้าจริง ขอปรับงบเพิ่ม จาก5,000บาท/วัน เป็น 10,000 บาท/วัน</h5>
</div>

<div className="b mt-5 text-center" id='b'>

<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="2000">
      <img src="review/review01.jpg" className="d-blocka w-100" alt="reveiws"/>
     <br /> <label>รีวิวการใช้งานจากลูกค้าจริง 01</label>
    </div>
    <div className="carousel-item active" data-bs-interval="2000">
      <img src="review/review02.jpg" className="d-blocka w-100" alt="reveiws"/>
     <br /> <label>รีวิวการใช้งานจากลูกค้าจริง 02</label>
    </div>
    <div className="carousel-item active" data-bs-interval="2000">
      <img src="review/review03.jpg" className="d-blocka w-100" alt="reveiws"/>
     <br /> <label>รีวิวการใช้งานจากลูกค้าจริง 03</label>
    </div>
  
  </div>
</div>









</div>    
</div>    
  


  )
}
