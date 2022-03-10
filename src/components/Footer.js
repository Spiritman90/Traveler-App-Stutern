import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const now = new Date().getFullYear();
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <h1 className='footer__logo'>Traveler</h1>
        <nav className='footer__nav'>
          <ul className='footer__nav--links'>
            <li className='footer__links--item'>
              <Link to='/'>About</Link>
            </li>
            <li className='footer__links--item'>
              <Link to='/'>Contact</Link>
            </li>
            <li className='footer__links--item'>
              <Link to='/'>FAQs</Link>
            </li>
            <li className='footer__links--item'>
              <Link to='/'>Testimonials</Link>
            </li>
          </ul>
          <ul className='footer__nav--links'>
            <li className='footer__links--item'>
              <Link to='/'>Facebook</Link>
            </li>
            <li className='footer__links--item'>
              <Link to='/'>Instagram</Link>
            </li>
            <li className='footer__links--item'>
              <Link to='/'>Twitter</Link>
            </li>
            <li className='footer__links--item'>
              <Link to='/'>Email Us</Link>
            </li>
          </ul>
        </nav>
      </div>
      <p className='footer__copyright'>
        ©<span>{now} </span>
        Traveler Technologies
      </p>
    </footer>
  );
}

export default Footer;
