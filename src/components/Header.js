import React from "react";
import "./Header.css";
import { HashLink } from "react-router-hash-link";
import {AiOutlineMenu} from "react-icons/ai";
import {IoClose} from "react-icons/io5";
export default function Header() {
  
  function icon(){

  }
  return (
    <>
      <nav className="header">
        <h1>
          TYC<span>OO</span>N&reg;
        </h1>
        <div className="headmain">
          <input type="checkbox" id="click" />
          <label for="click" className="menu-btn">
          <AiOutlineMenu className="icon"/>
          <IoClose className="icon"/>
                    </label>
          <ul className="ul">
            <li>
              <a href={"/#home"}>Home</a>
            </li>
            <li>
              <a href={"/#about"}>About Us</a>
            </li>
            <li>
              <a href={"/#services"}>Services</a>
            </li>
            <li>
              <a href={"/#services"}>Pricing</a>
            </li>
            <li>
              <a href={"/#contact"}>Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
