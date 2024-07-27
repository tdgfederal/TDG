import React from "react";
import "../assets/styles/Support.css";
import logo from "../assets/images/s.png";
import { useNavigate } from "react-router-dom";

const Support = () => {
  const nav = useNavigate();
  return (
    <div className="support-section">
      {/* <div className="about-black">SUPPORT</div> */}
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
          {/* <div style={{ margin: "auto", textAlign: "center" }}>
            <button
              className="wwd-btn"
              style={{ textTransform: "uppercase" }}
              onClick={() => nav("/contact")}
            >
              Contact Support Now
            </button>
          </div> */}
          <div className="support-cards">
            <div className="cards-logo mx-auto">
              <div>
                <div className="logo-cir-s mx-auto">
                  <img src={logo} height={30} alt="" />
                </div>
                <p
                  className="my-4"
                  style={{ textTransform: "uppercase", textAlign: "center" }}
                >
                  What do we do?
                </p>
                <p className="" style={{ textAlign: "center" }}>
                  Craft tailored smart home and commercial technology solutions
                  that seamlessly integrate beauty, entertainment, comfort,
                  wellness, and security into your living and working spaces.
                </p>
              </div>
            </div>
            <div className="cards-logo mx-auto">
              <div>
                <div className="logo-cir-s mx-auto">
                  <img src={logo} height={30} alt="" />
                </div>
                <p
                  className="my-4"
                  style={{ textTransform: "uppercase", textAlign: "center" }}
                >
                  Who We Serve?
                </p>
                <p className="" style={{ textAlign: "center" }}>
                  We collaborate closely with architects, interior designers,
                  and homeowners to bring their visions to life, creating
                  intelligent environments that cater to their unique needs and
                  preferences.
                </p>
              </div>
            </div>
            <div className="cards-logo mx-auto">
              <div>
                <div className="logo-cir-s mx-auto">
                  <img src={logo} height={30} alt="" />
                </div>
                <p
                  className="my-4"
                  style={{ textTransform: "uppercase", textAlign: "center" }}
                >
                  What You Get?
                </p>
                <p className="" style={{ textAlign: "center" }}>
                  Enjoy a truly elevated lifestyle and peace of mind, where
                  technology enhances your daily experiences, empowering you to
                  live more comfortably, efficiently, and securely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
