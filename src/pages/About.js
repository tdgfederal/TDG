import React from "react";
import "../assets/styles/About.css";
import sbs1 from "../assets/images/sbs1.png";
import sbs2 from "../assets/images/sbs2.png";
import sbs3 from "../assets/images/sbs3.png";
import tick from "../assets/images/tick.png";
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";
import p5 from "../assets/images/p5.png";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-black">ABOUT US</div>
      <div
        className="about-black-below"
        style={{
          margin: "auto",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        <p>Bringing Innovation Home</p>
        <h3>Elevate Your Lifestyle with TDG Smart</h3>
        <p>Crafting Smart Solutions for Modern Living</p>
      </div>
      <div className="side-by-side">
        <div className="side-by-side-left">
          <img src={sbs1} alt="" />
        </div>
        <div className="side-by-side-right">
          <p style={{ color: "#282866", fontSize: "0.9rem" }}>
            Company Background
          </p>
          <h3>Lorem Ipsum is simply dummy</h3>
          <p style={{ color: "rgba(0, 0, 0, 0.75)" }}>
            At TDG Smart, we're passionate about enhancing your living and
            working spaces with cutting-edge smart systems and services. From
            immersive whole-home entertainment solutions to state-of-the-art
            security features, dynamic lighting options, and bespoke lifestyle
            products, we're dedicated to transforming your environment into a
            seamless and luxurious experience. At TDG Smart, we're passionate
            about enhancing your living and working spaces with cutting-edge
            smart systems and services.
          </p>
          <p style={{ fontSize: "1rem" }}>Sharon Gunther</p>
          <p style={{ color: "#AD9A9A", fontSize: "0.95rem" }}>Fresh Design</p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="side-by-side">
        <div className="side-by-side-right">
          <p style={{ color: "#282866", fontSize: "0.9rem" }}>Our Approach</p>
          <h3>Lorem Ipsum is simply dummy</h3>
          <div className="d-flex align-items-start my-3">
            <div>
              <img src={tick} alt="" height={25} />
            </div>
            <div className="mx-3 mt-1" style={{ color: "rgba(0, 0, 0, 0.75)" }}>
              At TDG Smart, we're passionate about enhancing your living and
              working spaces with cutting-edge smart systems and services.
            </div>
          </div>
          <div className="d-flex align-items-start my-3">
            <div>
              <img src={tick} alt="" height={25} />
            </div>
            <div className="mx-3 mt-1" style={{ color: "rgba(0, 0, 0, 0.75)" }}>
              At TDG Smart, we're passionate about enhancing your living and
              working spaces with cutting-edge smart systems and services.
            </div>
          </div>
          <div className="d-flex align-items-start my-3">
            <div>
              <img src={tick} alt="" height={25} />
            </div>
            <div className="mx-3 mt-1" style={{ color: "rgba(0, 0, 0, 0.75)" }}>
              At TDG Smart, we're passionate about enhancing your living and
              working spaces with cutting-edge smart systems and services.
            </div>
          </div>
          <div className="d-flex align-items-start my-3">
            <div>
              <img src={tick} alt="" height={25} />
            </div>
            <div className="mx-3 mt-1" style={{ color: "rgba(0, 0, 0, 0.75)" }}>
              At TDG Smart, we're passionate about enhancing your living and
              working spaces with cutting-edge smart systems and services.
            </div>
          </div>
        </div>
        <div className="side-by-side-left">
          <img src={sbs2} alt="" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="side-by-side">
        <div className="side-by-side-left-o">
          <img src={sbs3} alt="" />
        </div>
        <div className="side-by-side-right">
          <p style={{ color: "#282866", fontSize: "0.9rem" }}>Our Approach</p>
          <h3>Lorem Ipsum is simply dummy</h3>
          <div className="d-flex align-items-start my-3">
            <div>
              <img src={tick} alt="" height={25} />
            </div>
            <div className="mx-3 mt-1" style={{ color: "rgba(0, 0, 0, 0.75)" }}>
              At TDG Smart, we're passionate about enhancing your living and
              working spaces with cutting-edge smart systems and services.
            </div>
          </div>
          <div className="d-flex align-items-start my-3">
            <div>
              <img src={tick} alt="" height={25} />
            </div>
            <div className="mx-3 mt-1" style={{ color: "rgba(0, 0, 0, 0.75)" }}>
              From immersive whole-home entertainment solutions to
              state-of-the-art security features, dynamic lighting options, and
              bespoke lifestyle products, we're dedicated to transforming your
              environment into a seamless and luxurious experience.
            </div>
          </div>
          <div className="d-flex align-items-start my-3">
            <div>
              <img src={tick} alt="" height={25} />
            </div>
            <div className="mx-3 mt-1" style={{ color: "rgba(0, 0, 0, 0.75)" }}>
              At TDG Smart, we're passionate about enhancing your living and
              working spaces with cutting-edge smart systems and services.
            </div>
          </div>
          <button className="wwd-btn">SCHEDULE A CALL</button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="partners">
        <p style={{ textAlign: "center", color: "#757575" }}>Our Partners</p>
        <h3 style={{ textAlign: "center" }}>Lorem Ipsum is simply</h3>
        <br />
        <div className="parts">
          <div className="part-each">
            <img src={p1} height={40} alt="" />
          </div>
          <div className="part-each">
            <img src={p2} height={40} alt="" />
          </div>
          <div className="part-each">
            <img src={p3} height={40} alt="" />
          </div>
          <div className="part-each">
            <img src={p4} height={40} alt="" />
          </div>
          <div className="part-each">
            <img src={p5} height={40} alt="" />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="about-signup">
        <h3 style={{textAlign:'center'}}>Sign up to receive product</h3>
        <h3 style={{textAlign:'center', marginTop:'-5px'}}>update or discounts</h3><br />
        <div className="form-about-su">
          <div className="flname">
            <input className="flname-text" type="text" placeholder="First Name" />
            <input className="flname-text" type="text" placeholder="Last Name" />
          </div>
          <input className="flname-text my-4" style={{width:'100%'}} type="email" placeholder="Email Address"/><br />
          <button className="btn-send-ab-su" style={{width:'100%'}}>Send</button>
        </div><br /><br /><br />
      </div>
    </div>
  );
};

export default About;
