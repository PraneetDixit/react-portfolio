import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar(props) {
    const [expand, setexpand] = useState(false);
    const navRef = useRef();
    useEffect(() => {
      const closeDropdown = (e) => {
          if (!navRef.current.contains(e.target)) {
              setexpand(false);
          }
      };
      document.body.addEventListener("mousedown", closeDropdown);
      return () => document.body.removeEventListener("mousedown", closeDropdown);
  }, []);
    const toggleNav = ()=>{
        setexpand(!expand)
    }
  return (
    <nav ref={navRef}>
      <div id="home">
        <a href="#home">Praneet Dixit</a>
      </div>
      <div className="spacer"></div>
      <ul className={expand?"show":""}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <button id="toggle" onClick={props.toggleTheme}>
        {props.theme==="light" &&
        <FontAwesomeIcon icon="fa-solid fa-moon" style={{ color: "inherit" }} />
        }
        {props.theme==="dark" &&
        <FontAwesomeIcon icon="fa-solid fa-sun" style={{ color: "inherit" }} />
        }
      </button>
      <button id="hamburger" onClick={toggleNav}>
        <FontAwesomeIcon icon="fa-solid fa-bars" style={{ color: "inherit" }} />
      </button>
    </nav>
  );
}
