import React from "react";
import "./Main.css";
import { BsBell } from "react-icons/bs";
import { TiLightbulb } from "react-icons/ti";
import { FiHardDrive } from "react-icons/fi";
import ModalView from "./ModalView";
import service from "./assets/service.jpg"
import Service from "./Service";



export default function Main() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="mainDiv">
        <div className="div1">
          <div>
            <h2>INNOVATION</h2>
            <p>We Create The Opportunities</p>
          </div>
        </div>
        <div className="div2 img-fluid shadow-4">
          <div>
            <div className="d1">
              <h1>Partner with Business Leaders</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="d2">
              <button onClick={()=>setModalShow(true)}>
                Read&nbsp;<span>More</span>
              </button>
              <ModalView 
              show={modalShow}
              onHide={()=>setModalShow(false)}
              />
            </div>
          </div>
        </div>
        <div id="services" className="div3">
          <div className="d1">
            <h2>OUR SERVICES</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="d2">
            <Service Icon={()=><BsBell/>} Header={"Consulting"}  Text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}/>
            <Service Icon={()=><FiHardDrive/>} Header={"Strategy"} Text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}/>
           
            <Service Icon={()=><TiLightbulb/>} Header={"Analysis"} Text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}/>
          </div>
        </div>
        <div className="div4">
          <div className="d1">
            <img src={service} alt="" />
          </div>
          <div className="d2">
            <h3>Our Team</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button>Our Portfolio</button>
          </div>
        </div>
      </div>
    </>
  );
}
