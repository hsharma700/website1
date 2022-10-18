import React from "react";
import "./Footer.css";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

export default function Links({ header, items }) {
  return (

      <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
        <h5 className="texth5">{header}</h5>
        <ul className="list-unstyled mb-0 ulList">
          {items.map((item) => {
            return (
              <li>
                <a href="#!" className="text-white">
                  {item}
                </a>
              </li>
            );
          })}
          
        </ul>
      </MDBCol>
  );
}
