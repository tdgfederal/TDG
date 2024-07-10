import React, { useState, useEffect, useRef } from "react";
import "../assets/styles/Navbar.css";
import { GoArrowUpRight } from "react-icons/go";
import logo from "../assets/images/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const nav = useNavigate();
  const [ser, setSer] = useState(false);
  const containerRef = useRef(null);

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setSer(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="navbar-section">
      <nav className="nav-main navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            <img src={logo} alt="" height={25} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="" style={{ color: "grey", fontSize: "30px" }}>
              <RxHamburgerMenu />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/about"}>
                  About
                </Link>
              </li>
              <li
                className="nav-item"
                style={{ position: "relative" }}
                ref={containerRef}
              >
                <Link className="nav-link" onClick={() => setSer(!ser)}>
                  Services{" "}
                  <IoIosArrowDown
                    className="bottom-arr"
                    style={{ marginTop: "-3px" }}
                  />
                </Link>
                <div
                  className="nav-ser"
                  style={{ display: ser ? "block" : "none" }}
                >
                  <div className="nav-ser-ser">
                    <div className="left-nav-ser">
                      <p
                        className="fs-6"
                        style={{
                          fontWeight: "600",
                          textTransform: "uppercase",
                        }}
                      >
                        HOME CONTROL
                      </p>
                      <ul style={{ listStyle: "none", lineHeight: "30px" }}>
                        <li>Control4</li>
                        <li>RTI</li>
                        <li>URC</li>
                      </ul>
                      <br />
                      <p
                        className="fs-6"
                        style={{
                          fontWeight: "600",
                          textTransform: "uppercase",
                          cursor: "pointer"
                        }}
                        onClick={()=>nav('/product/Entertainment_&_Lifestyle')}
                      >
                        Entertainment & Lifestyle
                      </p>
                      <ul style={{ listStyle: "none", lineHeight: "30px" }}>
                        <li>Home theaters</li>
                        <li>Multi & whole home audio</li>
                        <li onClick={()=>nav('/product/golf-simulation')} style={{cursor:'pointer'}}>Golf Simulation</li>
                        <li>Gaming</li>
                        <li>Speakers</li>
                        <li>Relaxing Outdoors</li>
                      </ul>
                    </div>
                    <div className="right-nav-ser">
                      <p
                        className="fs-6"
                        style={{
                          fontWeight: "600",
                          textTransform: "uppercase",
                        }}
                      >
                        Comfort
                      </p>
                      <ul style={{ listStyle: "none", lineHeight: "30px" }}>
                        <li>Climate Control</li>
                        <li>Motorization</li>
                      </ul>
                      <br />
                      <p
                        className="fs-6"
                        style={{
                          fontWeight: "600",
                          textTransform: "uppercase",
                        }}
                      >
                        Security & Surveillance
                      </p>
                      <ul style={{ listStyle: "none", lineHeight: "30px" }}>
                        <li>Cameras</li>
                        <li>Monitoring</li>
                        <li>Entry Services</li>
                      </ul>
                      <br />
                      <p
                        className="fs-6"
                        style={{
                          fontWeight: "600",
                          textTransform: "uppercase",
                          cursor: "pointer"
                        }}
                        onClick={()=>nav('/product/Lighting')}
                      >
                        Lighting
                      </p>
                      <ul style={{ listStyle: "none", lineHeight: "30px" }}>
                        <li>Smart Lighting</li>
                        <li>Fixtures</li>
                        <li>Keypads</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/blog'}>BLOGS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/support"}>
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/career"}>
                  Career{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/contact"}>
                  Contact
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button
                className="nav-button btn"
                type="submit"
                onClick={() => nav("/consultation")}
              >
                SCHEDULE A CALL
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
