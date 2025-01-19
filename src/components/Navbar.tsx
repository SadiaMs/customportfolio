import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Sadia Siddique 

      </div>
      <ul className="nav-links">
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/Project"}>Projects</Link></li>
        <li><Link href={"/About"}>About</Link></li>
        <li><Link href={"#contact"}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
