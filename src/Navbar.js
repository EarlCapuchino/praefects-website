import React from "react";
import logo from "./media/with-outline-cropped.png";

import { links } from "./data";
const Navbar = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 64,
    });
  };
  return (
    <nav className="navbar sticky">
      <div className="nav-ctnr">
        <img src={logo} className="logo-img-nav"></img>
        <div className="nav-center">
          <div>
            {links.map((link) => {
              return (
                <>
                  <a href={link.url} key={link.id} onClick={handleClick}>
                    {link.text}
                  </a>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
