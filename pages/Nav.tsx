import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


export default function Nav() {
  return (
    <>

<nav className="navbar navbar-expand-lg" id='nav'>
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">
    
    <Image src="/favicon.ico" alt="Favicon" width={60} height={60} />


    
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-linkactive" aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-linkactive" href="/Facebook">Facebook</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-linkactive" href="/Google">Google</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-linkactive" href="/Course-Google">คอร์สโฆษณาGoogle</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-linkactive" href="/Course-Facebook">คอร์สโฆษณาFacebook</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-linkactive" href="/Course-Facebook">คอร์สโฆษณาFacebook</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-linkactive" href="/Course-Google">คอร์สโฆษณาGoogle</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-linkactive" href="/Interesting">สาระน่ารู้</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-linkactive" href="/Contact">ข้อมูลติดต่อเรา</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-linkactive" href="/Reviews">รีวิวจากลูกค้าจริง</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-linkactive" href="/Dowloads">เครื่องมือแจกฟรี</Link>
        </li>
      </ul>
      <span className="navbar-text">
      <Link className="line" href="https://lin.ee/JwrDPgA">
    
    <Image src="/line.gif" alt="Favicon" width={60} height={60} />
    </Link>
   
      </span>
    </div>
  </div>
</nav>
 





      
    </>
  )
}
