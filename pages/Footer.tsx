import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="page-footer bg-image">
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-3 py-3">
          <h3>รายละเอียดบริการ</h3>
          <p>ค่าบริการ เหมาจ่ารายเดือนเพียงเดือนละ 9,900 บาท ไม่มีค่าใช้ค่าใดใดเพิ่มเติมทั้งสิน
          </p>

          <div className="social-media-button">
            <a href="https://www.facebook.com/myonlinethailand"><span className="mai-logo-facebook-f"></span></a>
       
            <a href="https://service-ads.com"><span className="mai-logo-google-plus-g"></span></a>
            <a href="https://www.instagram.com/serviceadscom/"><span className="mai-logo-instagram"></span></a>
            <a href="https://www.youtube.com/channel/UCMSh0LMC_RczXmJ6Qtxo4QA"><span className="mai-logo-youtube"></span></a>
          </div>
        </div>
        <div className="col-lg-3 py-3">
          <h5>Company</h5>
          <ul className="footer-menu">
            <li><a href="index.html">Home</a></li>
            <li><a href="Google.html">Google</a></li>
            <li><a href="Facebook.html">Facebook</a></li>
            <li><a href="course.html">course</a></li>
            <li><a href="contact.html">contact</a></li>
          </ul>
        </div>
        <div className="col-lg-3 py-3">
          <h5>Contact</h5>
          <p>Ads Manager 32 Soi 20 Charoenrat Road, Khlong San District, Bangkok 10160

          </p>
          <a href="#" className="footer-link">0956422872</a>
          <a href="#" className="footer-link">admin@service-ads.com</a>
        </div>
        <div className="col-lg-3 py-3">
          <h5>service-ads.com</h5>
          <form action="#">
            <input type="text" className="form-control" placeholder="Enter your email.."/>
            <button type="submit" className="btn btn-success btn-block mt-2">Subscribe</button>
          </form>
        </div>
      </div>

      <p className="text-center" id="copyright">service-ads.com &copy; 2024 รับจ้างยิงแอดสายเทา 2024 <a href="https://service-ads.com/" target="_blank">service-ads.com</a></p>
    </div>
  </footer>
    </div>
  )
}
