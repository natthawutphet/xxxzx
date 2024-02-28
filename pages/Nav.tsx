import React from 'react'
import styles from './styles/Nav.module.css'
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
          <Link className="nav-link active" aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/facebook">facebook</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/">google</Link>
        </li>
      </ul>
      <span className="navbar-text">
   
   
      </span>
    </div>
  </div>
</nav>
    <header className="header">



       


    </header>





      
    </>
  )
}
