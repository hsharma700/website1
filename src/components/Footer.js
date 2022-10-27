import React from "react";
import "./Footer.css";
import "./Data";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import Links from "./Links";
import { data } from "./Data";
import { AiOutlineFacebook, AiFillTwitterSquare,AiOutlineLinkedin } from "react-icons/ai";
import { ImPinterest} from "react-icons/im";
import { FaGooglePlusSquare} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <MDBFooter className="text footer" color="white" bgColor="dark">
        <MDBContainer className="p-4">
          <section className="mb-4">
            <MDBRow>
              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="texth5">Our Contact</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <h5>Bootstrap Company Inc</h5>
                    <p>
                      JC Main Road, Near Silnile tower
                      <br />
                      Pin-21542 NewYork US.
                    </p>
                  </li>
                  <li>
                    <h5>(123) 456-789 - 1255-12584</h5>
                    <p>email@domainname.com</p>
                  </li>
                </ul>
              </MDBCol>

              <Links
                header={data.quickLinks1.Header}
                items={data.quickLinks1.items}
              />

              <Links
                header={data.quickLinks2.Header}
                items={data.quickLinks2.items}
              />
              <Links
                header={data.quickLinks3.Header}
                items={data.quickLinks2.items}
              />
            </MDBRow>
          </section>
        </MDBContainer>

        <div
          className="text-center p-3 copyRightDiv"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <a className=" text-white copyRightATag " href="/home">
            © Bootstrap Template 2018 All right reserved.
            <span> Template by Himanshu Sharma</span>
          </a>
          <div>
            <div className="fb">
            <AiOutlineFacebook/>
            </div>
            <div className="tw">
            <AiFillTwitterSquare/>
            </div>
            <div className="linkde">
            <AiOutlineLinkedin/>
            </div>
            <div className="pi">
            <ImPinterest/>
            </div>
            <div className="gplus">
            <FaGooglePlusSquare/>
            </div>
          </div>
        </div>
      </MDBFooter>
    </>
  );
}
