import React, {useState} from "react";
import "../assets/styles/Footer.css";
import { GoArrowRight } from "react-icons/go";
import logo from "../assets/images/footLogo.png";
import { FiFacebook } from "react-icons/fi";
import { PiInstagramLogo } from "react-icons/pi";
import { PiYoutubeLogo } from "react-icons/pi";
import { RiPinterestLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    email:""
  })
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://tdg-backend-n1sm.onrender.com/api/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert("Failed! Try again.");
    }
  };

  return (
    <div>
      <div className="footer">
        <div className="footer-top">
          <p
            style={{
              textAlign: "center",
              textTransform: "uppercase",
              color: "#BEBEFF",
            }}
          >
            Newsletter SIGNUP
          </p>
          <h3 style={{ color: "white", textAlign: "center" }}>
            Sign up for exclusive offers &
          </h3>
          <h3 style={{ color: "white", textAlign: "center" }}>discounts</h3>
          <form action="" className="footer-form"  onSubmit={handleSubmit}>
            <input
              className="email-footer"
              type="email"
              placeholder="Your Email.."
              name="email"
              value={FormData.email}
              onChange={handleChange}
            />
            <button className="footer-sub-btn">
              Subscribe <GoArrowRight />
            </button>
          </form>
        </div>
        <hr style={{ color: "white" }} />
        <div className="footer-mid">
          <div className="row" style={{ margin: "0" }}>
            <div className="col-lg-3" style={{ padding: "50px" }}>
              <div>
                <img
                  src={logo}
                  alt=""
                  height={40}
                  onClick={() => nav("/")}
                  style={{ cursor: "pointer" }}
                />
                <p
                  className="my-3"
                  style={{ color: "white", fontSize: "0.85rem" }}
                >
                  From initial design to installation and beyond, we offer a
                  complete plan to make your home smarter, more convenient, and
                  luxurious.
                </p>
              </div>
            </div>
            <div className="col-lg-5 row" style={{ margin: "0" }}>
              <div
                className="col-lg-4 col-md-4 col-sm-6"
                style={{ padding: "50px" }}
              >
                <p style={{ fontSize: "1.1rem" }}>Menu</p>
                <p
                  style={{ fontSize: "0.85rem", cursor: "pointer" }}
                  onClick={() => nav("/")}
                >
                  Home
                </p>
                <p
                  style={{ fontSize: "0.85rem", cursor: "pointer" }}
                  onClick={() => nav("/about")}
                >
                  About
                </p>
                <p
                  style={{ fontSize: "0.85rem", cursor: "pointer" }}
                  onClick={() => nav("/blog")}
                >
                  Blogs
                </p>
                <p
                  style={{ fontSize: "0.85rem", cursor: "pointer" }}
                  onClick={() => nav("/support")}
                >
                  Support
                </p>
                <p
                  style={{ fontSize: "0.85rem", cursor: "pointer" }}
                  onClick={() => nav("/career")}
                >
                  Career
                </p>
                <p
                  style={{ fontSize: "0.85rem", cursor: "pointer" }}
                  onClick={() => nav("/contact")}
                >
                  Contact
                </p>
              </div>
              <div
                className="col-lg-4 col-md-4 col-sm-6"
                style={{ padding: "50px" }}
              >
                <p style={{ fontSize: "1.1rem" }}>Services</p>
                <p
                  style={{ fontSize: "0.85rem", cursor: "pointer" }}
                  onClick={() => nav("/product/home_control/control4")}
                >
                  Home Control
                </p>
                <p
                  style={{ fontSize: "0.85rem", cursor: "pointer" }}
                  onClick={() =>
                    nav("/product/Entertainment_&_Lifestyle/home-theatre")
                  }
                >
                  Entertainment and Lifestyle
                </p>
                <p
                  style={{ fontSize: "0.85rem", cursor: "pointer" }}
                  onClick={() => nav("/product/comfort/climate-control")}
                >
                  Comfort
                </p>
                <p
                  style={{ fontSize: "0.85rem", cursor: "pointer" }}
                  onClick={() => nav("/product/Secuity_&_Surveillance/cameras")}
                >
                  Secuity and Surveillance
                </p>
                <p
                  style={{ fontSize: "0.85rem", cursor: "pointer" }}
                  onClick={() => nav("/product/Lighting/smart-lighting")}
                >
                  Lighting
                </p>
              </div>
              <div
                className="col-lg-4 col-md-4 col-sm-6"
                style={{ padding: "50px" }}
              >
                <p style={{ fontSize: "1.1rem" }}>Our Product</p>
                <p
                  style={{ fontSize: "0.85rem", cursor: "pointer" }}
                  onClick={() =>
                    nav("/product/Entertainment_&_Lifestyle/golf-simulation")
                  }
                >
                  Golf Simulation
                </p>
                <p
                  style={{ fontSize: "0.85rem", cursor: "pointer" }}
                  onClick={() =>
                    nav("/product/Entertainment_&_Lifestyle/speakers")
                  }
                >
                  Speakers
                </p>
                <p
                  style={{ fontSize: "0.85rem", cursor: "pointer" }}
                  onClick={() =>
                    nav("/product/Entertainment_&_Lifestyle/relaxing-outdoors")
                  }
                >
                  Relaxing Outdoors
                </p>
                <p
                  style={{ fontSize: "0.85rem", cursor: "pointer" }}
                  onClick={() => nav("/product/home_control/control4")}
                >
                  Control4
                </p>
                <p
                  style={{ fontSize: "0.85rem", cursor: "pointer" }}
                  onClick={() => nav("/product/comfort/climate-control")}
                >
                  Climate Control
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4" style={{ padding: "50px" }}>
              <div>
                <p style={{ fontSize: "1.1rem" }}>Contact</p>
                <p style={{ fontSize: "0.85rem" }}>
                  Serving the DMV area - Virginia, Maryland & DC
                </p>
                <p style={{ fontSize: "0.85rem" }}>
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="mailto: ddiallo@itecintegrator.com"
                  >
                    Email - ddiallo@itecintegrator.com
                  </a>
                </p>
                <p style={{ fontSize: "0.85rem" }}>
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="tel:571-315-2073"
                  >
                    +571-315-2073
                  </a>
                </p>
                <div
                  className="d-flex align-items-center"
                  style={{ gap: "10px" }}
                >
                  <div className="each-logo">
                    <FiFacebook className="logo-each" />
                  </div>
                  <div className="each-logo">
                    <PiInstagramLogo className="logo-each" />
                  </div>
                  <div className="each-logo">
                    <PiYoutubeLogo className="logo-each" />
                  </div>
                  <div className="each-logo">
                    <RiPinterestLine className="logo-each" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr style={{ color: "white", marginTop: "-30px" }} />
        <div className="footer-bottom pb-4 pt-2">
          <p style={{ textAlign: "center" }}>
            copyright{" "}
            <span id="foot-bold" style={{ fontWeight: "600" }}>
              @2023 TDG HOME.
            </span>{" "}
            All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
