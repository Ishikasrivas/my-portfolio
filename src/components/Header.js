<<<<<<< HEAD
import React, { useState, useEffect } from "react";
//import components
// import Logo from "../assets/img/logo.svg";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Social from "./Social";

const Header = () => {
  const [bg, setBg] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  return (
    <header
      className={`${
        bg ? "bg-tertiary h-20" : "h-24"
      } flex item-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* logo */}
        <a href="/">{/* <img src={Logo} alt="" /> */}</a>
        {/* nav */}
        <div className="hidden lg:block">
          <Nav />
        </div>
        {/* socials */}
        <div className="hidden lg:block">
          <Social />
        </div>
        {/* nav mobile */}
        <div className=" lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
=======
import React, { useState, useEffect } from "react";
//import components
// import Logo from "../assets/img/logo.svg";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Social from "./Social";

const Header = () => {
  const [bg, setBg] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  return (
    <header
      className={`${
        bg ? "bg-tertiary h-20" : "h-24"
      } flex item-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* logo */}
        <a href="/">{/* <img src={Logo} alt="" /> */}</a>
        {/* nav */}
        <div className="hidden lg:block">
          <Nav />
        </div>
        {/* socials */}
        <div className="hidden lg:block">
          <Social />
        </div>
        {/* nav mobile */}
        <div className=" lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
>>>>>>> f03922b83c71463d4cd743097d60d84b56742f82
