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
import { useNavigate, Link } from "react-router-dom";

const About = () => {
  const nav = useNavigate();
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
          <h3>Company's Journey</h3>
          <p style={{ color: "rgba(0, 0, 0, 0.75)" }}>
            At TDG HOME, our journey began with a vision to revolutionize the
            way people interact with their homes. Founded by a team of
            passionate technologists and design enthusiasts, we set out to
            create a seamless, integrated smart home experience that would
            redefine the boundaries of comfort, convenience, and luxury. Drawing
            inspiration from the ever-evolving landscape of technology, we have
            dedicated ourselves to pushing the limits of what's possible,
            pioneering innovative solutions that make everyday living truly
            exceptional.
          </p>
          {/* <p style={{ fontSize: "1rem" }}>Sharon Gunther</p>
          <p style={{ color: "#AD9A9A", fontSize: "0.95rem" }}>Fresh Design</p> */}
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="side-by-side">
        <div className="side-by-side-right">
          <p style={{ color: "#282866", fontSize: "0.9rem" }}>Our Purpose</p>
          <h3>Goals To Achieve</h3>
          <div className="d-flex align-items-start my-3">
            <div>
              <img src={tick} alt="" height={25} />
            </div>
            <div className="mx-3 mt-1" style={{ color: "rgba(0, 0, 0, 0.75)" }}>
              Our purpose is to empower homeowners with the tools and
              technologies they need to transform their living spaces into
              intelligent, responsive environments.
            </div>
          </div>
          <div className="d-flex align-items-start my-3">
            <div>
              <img src={tick} alt="" height={25} />
            </div>
            <div className="mx-3 mt-1" style={{ color: "rgba(0, 0, 0, 0.75)" }}>
              Through our comprehensive smart home solutions, we strive to
              enhance the quality of life, simplify daily tasks, and provide a
              level of personalization and control that was once unimaginable.
            </div>
          </div>
          <div className="d-flex align-items-start my-3">
            <div>
              <img src={tick} alt="" height={25} />
            </div>
            <div className="mx-3 mt-1" style={{ color: "rgba(0, 0, 0, 0.75)" }}>
              By aligning our goals with the evolving needs and desires of our
              customers, we are committed to delivering the ultimate smart home
              experience, one that adapts and evolves alongside the
              ever-changing demands of modern living.
            </div>
          </div>
          <div className="d-flex align-items-start my-3">
            <div>
              <img src={tick} alt="" height={25} />
            </div>
            <div className="mx-3 mt-1" style={{ color: "rgba(0, 0, 0, 0.75)" }}>
              Our design team meticulously crafts elegant, user-friendly
              interfaces that seamlessly integrate with your home's aesthetic,
              ensuring that form and function work in perfect harmony.
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
          <h3>Steps To Follow</h3>
          <div className="d-flex align-items-start my-3">
            <div>
              <img src={tick} alt="" height={25} />
            </div>
            <div className="mx-3 mt-1" style={{ color: "rgba(0, 0, 0, 0.75)" }}>
              See your future with smart technology by TDG Home. From enhanced
              safety to added efficiency, we familiarize you with the new wave
              of change that transforms your home into being smarter and more
              convenient.
            </div>
          </div>
          <div className="d-flex align-items-start my-3">
            <div>
              <img src={tick} alt="" height={25} />
            </div>
            <div className="mx-3 mt-1" style={{ color: "rgba(0, 0, 0, 0.75)" }}>
              Custom smart home solutions are designed with precision by TDG
              Home. We work with you to design a plan that suits your needs and
              your style while ensuring functionality and aesthetics in your new
              smart environment.
            </div>
          </div>
          <div className="d-flex align-items-start my-3">
            <div>
              <img src={tick} alt="" height={25} />
            </div>
            <div className="mx-3 mt-1" style={{ color: "rgba(0, 0, 0, 0.75)" }}>
              Bring your vision about the smart home into a reality with our
              experts at TDG Home. With the installation and setting up of your
              smart systems, we make sure everything is working seamlessly so
              you are left with no hassle in that enjoyment.
            </div>
          </div>
          <div className="d-flex align-items-start my-3">
            <div>
              <img src={tick} alt="" height={25} />
            </div>
            <div className="mx-3 mt-1" style={{ color: "rgba(0, 0, 0, 0.75)" }}>
              TDG Home provides dedicated support so you can enjoy a hassle-free
              smart home. Our team is standing by to assist any question or
              problem you have with your system, so it remains efficient and
              worry-free.
            </div>
          </div>
          <button className="wwd-btn" onClick={()=>nav("/consultation")}>SCHEDULE A CALL</button>
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
          <Link to={"https://www.denon.com/en-us/"} target="_blank"><div className="part-each">
            <img src={p1} height={40} alt="" />
          </div></Link>
          <Link to={"https://www.fxl.com/"} target="_blank"><div className="part-each">
            <img src={p2} height={40} alt="" />
          </div></Link>
          <Link to={"https://www.jvc.com/in/"} target="_blank"><div className="part-each">
            <img src={p3} height={40} alt="" />
          </div></Link>
          <Link to={"https://international.kef.com/"} target="_blank"><div className="part-each">
            <img src={p4} height={40} alt="" />
          </div></Link>
          <Link to={"https://www.klipsch.com/"} target="_blank"><div className="part-each">
            <img src={p5} height={40} alt="" />
          </div></Link>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="about-signup">
        <h3 style={{ textAlign: "center" }}>Sign up to receive product</h3>
        <h3 style={{ textAlign: "center", marginTop: "-5px" }}>
          update or discounts
        </h3>
        <br />
        <div className="form-about-su">
          <div className="flname">
            <input
              className="flname-text"
              type="text"
              placeholder="First Name"
            />
            <input
              className="flname-text"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <input
            className="flname-text my-4"
            style={{ width: "100%" }}
            type="email"
            placeholder="Email Address"
          />
          <br />
          <button className="btn-send-ab-su" style={{ width: "100%" }}>
            Send
          </button>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;
