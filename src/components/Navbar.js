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
                className="nav-item nav-ser-main"
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
                        <li
                          onClick={() => {
                            setSer(!ser);
                            nav("/product/home_control/control4");
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          Control4
                        </li>
                        <li
                          onClick={() => {
                            setSer(!ser);
                            nav("/product/home_control/RTI");
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          RTI
                        </li>
                        <li
                          onClick={() => {
                            setSer(!ser);
                            nav("/product/home_control/URC");
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          URC
                        </li>
                      </ul>
                      <br />
                      <p
                        className="fs-6"
                        style={{
                          fontWeight: "600",
                          textTransform: "uppercase",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setSer(!ser);
                          nav("/product/Entertainment_&_Lifestyle");
                        }}
                      >
                        Entertainment & Lifestyle
                      </p>
                      <ul style={{ listStyle: "none", lineHeight: "30px" }}>
                        <li
                          onClick={() => {
                            setSer(!ser);
                            nav(
                              "/product/Entertainment_&_Lifestyle/home-theatre"
                            );
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          Home theaters
                        </li>
                        <li
                          onClick={() => {
                            setSer(!ser);
                            nav(
                              "/product/Entertainment_&_Lifestyle/multi-and-whole-home-audio"
                            );
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          Multi & whole home audio
                        </li>
                        <li
                          onClick={() => {
                            setSer(!ser);
                            nav(
                              "/product/Entertainment_&_Lifestyle/golf-simulation"
                            );
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          Golf Simulation
                        </li>
                        <li
                          onClick={() => {
                            setSer(!ser);
                            nav("/product/Entertainment_&_Lifestyle/gaming");
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          Gaming
                        </li>
                        <li
                          onClick={() => {
                            setSer(!ser);
                            nav("/product/Entertainment_&_Lifestyle/speakers");
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          Speakers
                        </li>
                        <li
                          onClick={() => {
                            setSer(!ser);
                            nav(
                              "/product/Entertainment_&_Lifestyle/relaxing-outdoors"
                            );
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          Relaxing Outdoors
                        </li>
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
                        <li
                          onClick={() => {
                            setSer(!ser);
                            nav("/product/comfort/climate-control");
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          Climate Control
                        </li>
                        <li
                          onClick={() => {
                            setSer(!ser);
                            nav("/product/comfort/motorization");
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          Motorization
                        </li>
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
                        <li
                          onClick={() => {
                            setSer(!ser);
                            nav("/product/Secuity_&_Surveillance/cameras");
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          Cameras
                        </li>
                        <li
                          onClick={() => {
                            setSer(!ser);
                            nav("/product/Secuity_&_Surveillance/monitoring");
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          Monitoring
                        </li>
                        <li
                          onClick={() => {
                            setSer(!ser);
                            nav(
                              "/product/Secuity_&_Surveillance/entry-services"
                            );
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          Entry Services
                        </li>
                      </ul>
                      <br />
                      <p
                        className="fs-6"
                        style={{
                          fontWeight: "600",
                          textTransform: "uppercase",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setSer(!ser);
                          nav("/product/Lighting");
                        }}
                      >
                        Lighting
                      </p>
                      <ul style={{ listStyle: "none", lineHeight: "30px" }}>
                        <li
                          onClick={() => {
                            setSer(!ser);
                            nav("/product/Lighting/smart-lighting");
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          Smart Lighting
                        </li>
                        <li
                          onClick={() => {
                            setSer(!ser);
                            nav("/product/Lighting/fixtures");
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          Fixtures
                        </li>
                        <li
                          onClick={() => {
                            setSer(!ser);
                            nav("/product/Lighting/keypads");
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          Keypads
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown ser-dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul
                  className="dropdown-menu"
                  style={{ fontSize: "0.85rem", textAlign: "center" }}
                >
                  <li>
                    <Link
                      className="dropdown-item"
                      to={""}
                      style={{
                        fontWeight: "600",
                        textTransform: "uppercase",
                        fontSize: "1rem",
                      }}
                    >
                      HOME CONTROL
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={"/product/home_control/control4"}
                    >
                      Control4
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={"/product/home_control/RTI"}
                    >
                      RTI
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={"/product/home_control/URC"}
                    >
                      URC
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={"/product/Entertainment_&_Lifestyle"}
                      style={{
                        fontWeight: "600",
                        textTransform: "uppercase",
                        fontSize: "1rem",
                      }}
                    >
                      Entertainment & Lifestyle
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={"/product/Entertainment_&_Lifestyle/home-theatre"}
                    >
                      Home theaters
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={
                        "/product/Entertainment_&_Lifestyle/multi-and-whole-home-audio"
                      }
                    >
                      Multi & whole home audio
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={"/product/Entertainment_&_Lifestyle/golf-simulation"}
                    >
                      Golf Simulation
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={"/product/Entertainment_&_Lifestyle/gaming"}
                    >
                      Gaming
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={"/product/Entertainment_&_Lifestyle/speakers"}
                    >
                      Speakers
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={
                        "/product/Entertainment_&_Lifestyle/relaxing-outdoors"
                      }
                    >
                      Relaxing Outdoors
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={"/product/comfort/climate-control"}
                      style={{
                        fontWeight: "600",
                        textTransform: "uppercase",
                        fontSize: "1rem",
                      }}
                    >
                      Comfort
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={"/product/comfort/climate-control"}
                    >
                      Climate Control
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={"/product/comfort/motorization"}
                    >
                      Motorization
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={"/product/Secuity_&_Surveillance/cameras"}
                      style={{
                        fontWeight: "600",
                        textTransform: "uppercase",
                        fontSize: "1rem",
                      }}
                    >
                      Security & Surveillance
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={"/product/Secuity_&_Surveillance/cameras"}
                    >
                      Cameras
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={"/product/Secuity_&_Surveillance/monitoring"}
                    >
                      Monitoring
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={"/product/Secuity_&_Surveillance/entry-services"}
                    >
                      Entry Services
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={"/product/Lighting/smart-lighting"}
                      style={{
                        fontWeight: "600",
                        textTransform: "uppercase",
                        fontSize: "1rem",
                      }}
                    >
                      Lighting
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={"/product/Lighting/smart-lighting"}
                    >
                      Smart Lighting
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={"/product/Lighting/fixtures"}
                    >
                      Fixtures
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={"/product/Lighting/keypads"}
                    >
                      Keypads
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/blog"}>
                  BLOGS
                </Link>
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
