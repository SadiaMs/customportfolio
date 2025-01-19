import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <p className="footer-text">© 2025 Sadia portfolio custom css. All rights reserved.</p>
        <div className="social-links">
          < Link href="#" className="social-link">Facebook</Link>
          <Link href="#" className="social-link">Linkdin</Link>
          <Link href="#" className="social-link">Instagram</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
