import React from 'react'
import styles from './styles/Nav.module.css'
import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  return (
    <>

<nav className="navbar navbar-expand-lg navbar-light bg-white sticky" data-offset="500">
     
        <a href="/" className="navbar-brand">
          
          <Image src="/img/logo.png" className='logo' alt="logo"/>
          
          </a>

        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse" id="navbarContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <Link className="nav-link" href="/">  <a>Home</a> </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" href="Post"><a>Post</a></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="Facebook"><a>Facebook</a></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="Google"> <a>Google</a></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="Class"><a>Class</a></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="Dowloads"><a>Dowloads </a></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="Contact"><a>Contact</a></Link>
            </li>
            <li className="nav-item">
              <a href="https://lin.ee/JwrDPgA"><Image src="https://scdn.line-apps.com/n/line_add_friends/btn/th.png" alt="เพิ่มเพื่อน" height="36" /></a>
            </li>
          </ul>
        </div>

    </nav>
      
    </>
  )
}
