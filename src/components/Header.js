import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <header className='header'>
      <Link className=' header__logo' to='/'>
        {" "}
        Traveler
      </Link>

      <nav className=' header__nav nav '>
        <ul className='header__nav--item nav__links'>
          <li className='nav__links--item'>
            <Link
              to='/'
              style={{
                fontWeight: "500",
                marginLeft: "10rem",
                fontSize: "1rem",
              }}
            >
              {" "}
              Home
            </Link>
          </li>
        </ul>
      </nav>
      <SearchBar />
    </header>
  );
}

export default Header;
