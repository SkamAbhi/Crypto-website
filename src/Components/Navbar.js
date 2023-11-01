import {useState,  useRef, useEffect } from "react";
import React from "react";
import "./Navbar.css";
import { FaBars, FaTimes,} from "react-icons/fa";
import Toggle from "./Toggle";




  
const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  
  const [hidden, setHidden]=useState(false);
  const prevScrollY =  useRef(0);

  useEffect(() => {

    const hideNavbar = () => {
      const currentScrollY = window.scrollY;
      setHidden(prevScrollY.current < currentScrollY && currentScrollY > 0);
      prevScrollY.current = currentScrollY;
    };
     console.log('test')
    window.addEventListener('scroll', hideNavbar);
    return () => {
      window.removeEventListener('scroll', hideNavbar);
    };
  }, []);




 return (
    <div className={`header  ${ hidden ? 'hidden' : ''}`}>
           
      <nav >
      <div className="container" >
        <h2>CryptoManic</h2>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/" >Market</a>
          </li>
          <li>
            <a href="/">blog</a>
          </li>
          <li>
            <a href="/">Features</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>

        <Toggle />
        <div className="btn-group">
          <button className="btn">Login</button>
        </div>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#333" }} />
          ) : (
            <FaBars size={20} style={{ color: "#333" }} />
          )}
        </div>
      </div>
      </nav>
    </div>
  );
};

export default Navbar;
