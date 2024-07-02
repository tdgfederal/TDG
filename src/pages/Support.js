import React from "react";
import "../assets/styles/Support.css";
import logo from "../assets/images/s.png";

const Support = () => {
  return (
    <div className="support-section">
      <div className="about-black">SUPPORT</div>
      <div className="support-part">
        <div>
          <h3
            className="mx-3"
            style={{ textAlign: "center", textTransform: "uppercase" }}
          >
            Get the Help You Need with TDG Smart Support
          </h3>
          <p className="mx-3 my-4" style={{ textAlign: "center" }}>
            Our Team is Here to Ensure Your Smart Systems Run Smoothly and
            Efficiently
          </p>
          <div style={{margin:'auto', textAlign:'center'}}>
            <button className="wwd-btn" style={{ textTransform: "uppercase" }}>
              Contact Support Now
            </button>
          </div>
          <div className="support-cards">
            <div className="cards-logo mx-auto">
                <div><div className="logo-cir-s mx-auto">
                    <img src={logo} height={30} alt="" />
                </div>
                    <p className="my-4" style={{textTransform:'uppercase', textAlign:'center'}}>What do we do?</p>
                    <p className="" style={{textAlign:'center'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
            </div></div>
            <div className="cards-logo mx-auto">
                <div><div className="logo-cir-s mx-auto">
                    <img src={logo} height={30} alt="" />
                </div>
                    <p className="my-4" style={{textTransform:'uppercase', textAlign:'center'}}>What do we do?</p>
                    <p className="" style={{textAlign:'center'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
            </div></div>
            <div className="cards-logo mx-auto">
                <div><div className="logo-cir-s mx-auto">
                    <img src={logo} height={30} alt="" />
                </div>
                    <p className="my-4" style={{textTransform:'uppercase', textAlign:'center'}}>What do we do?</p>
                    <p className="" style={{textAlign:'center'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
            </div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
