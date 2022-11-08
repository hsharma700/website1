import React from "react";
import "./Header.css";

import { HashLink } from "react-router-hash-link";

export default function Header() {
  return (
    <>
      <nav>
        <h1>TYC<span>OO</span>N&reg;</h1>
        <div>
          <HashLink to={"/#services"}>Services</HashLink>
        </div>
      </nav>

      
    </>
  );
}
