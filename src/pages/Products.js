import React, { useState } from "react";
import "../assets/styles/Products.css";
import g0 from "../assets/images/y0.png";
import g1 from "../assets/images/y1.png";
import g2 from "../assets/images/y2.png";
import g3 from "../assets/images/y3.png";
import bulb from "../assets/images/bulb.png";
import sun from "../assets/images/sun.png";
import rem from "../assets/images/rem.png";
import { GoArrowRight } from "react-icons/go";
import w1 from "../assets/images/x1.png";
import w2 from "../assets/images/x2.png";
import w3 from "../assets/images/x3.png";
import w4 from "../assets/images/x4.png";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const nav = useNavigate();
  const [career, setCareer] = useState("Smart Lighting");
  const options = [
    {
      name: "Smart Lighting",
    },
    {
      name: "Fixtures",
    },
    {
      name: "Keypads",
    },
  ];
  return (
    <div className="product-section">
      <div className="wall-prod-2">
        <div>
          <h1>Products</h1>
          <h4>Smart Lighting</h4>
        </div>
      </div>
      <div className="box-abs-txt">
        <div>
          <span style={{ color: "#282866" }}>Smart Lighting</span> / Fixtures /
          Keypads
        </div>
      </div>
      <div className="filters" style={{ marginBottom: "-70px" }}>
        {options.map((e, i) => (
          <button
            onClick={() => setCareer(e.name)}
            key={i}
            className="career-btn-filter py-2"
            style={{
              background: e.name === career ? "#282866" : "white",
              color: e.name === career ? "white" : "#282866",
            }}
          >
            {e.name}
          </button>
        ))}
      </div>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          >
            <div className="dot-caro" style={{ color: "green" }}></div>
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          >
            <div className="dot-caro" style={{ color: "green" }}></div>
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          >
            <div className="dot-caro" style={{ color: "green" }}></div>
          </button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row caro-lr-1">
              <div className="caro-left col-lg-6 d-flex justify-content-center">
                <div className="img-trans">
                  <div>
                    <img src={g0} height={400} alt="" />
                  </div>
                  <div
                    className="d-flex"
                    style={{ gap: "20px", margin: "20px 0" }}
                  >
                    <img src={g1} height={146} alt="" />
                    <img src={g2} height={146} alt="" />
                    <img src={g3} height={146} alt="" />
                  </div>
                </div>
              </div>
              <div className="caro-right col-lg-6">
                <h4>Bowers & Wilkins</h4>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s.
                </p>
                <div className="d-flex">
                  <img className="mx-3" src={sun} height={40} alt="" />
                  <div>
                    <strong>Lorem Ipsum </strong>
                    <p>
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <img
                    className=""
                    style={{ marginLeft: "20px", marginRight: "22px" }}
                    src={bulb}
                    height={40}
                    alt=""
                  />
                  <div>
                    <strong>Lorem Ipsum </strong>
                    <p>
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <img className="mx-3" src={rem} height={40} alt="" />
                  <div>
                    <strong>Lorem Ipsum </strong>
                    <p>
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
                <button className="btn-caro-1-1" onClick={() => nav("/consultation")}>REQUEST A QUOTE</button>
                {/* <button className="btn-caro-2-1 mx-2">
                  GET A QUOTE <GoArrowRight />
                </button> */}
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row caro-lr-1">
              <div className="caro-left col-lg-6 d-flex justify-content-center">
                <div className="img-trans">
                  <div>
                    <img src={g0} height={400} alt="" />
                  </div>
                  <div
                    className="d-flex"
                    style={{ gap: "20px", margin: "20px 0" }}
                  >
                    <img src={g1} height={146} alt="" />
                    <img src={g2} height={146} alt="" />
                    <img src={g3} height={146} alt="" />
                  </div>
                </div>
              </div>
              <div className="caro-right col-lg-6">
                <h4>Bowers & Wilkins</h4>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s.
                </p>
                <div className="d-flex">
                  <img className="mx-3" src={sun} height={40} alt="" />
                  <div>
                    <strong>Lorem Ipsum </strong>
                    <p>
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <img
                    className=""
                    style={{ marginLeft: "20px", marginRight: "22px" }}
                    src={bulb}
                    height={40}
                    alt=""
                  />
                  <div>
                    <strong>Lorem Ipsum </strong>
                    <p>
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <img className="mx-3" src={rem} height={40} alt="" />
                  <div>
                    <strong>Lorem Ipsum </strong>
                    <p>
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
                <button className="btn-caro-1-1" onClick={() => nav("/consultation")}>REQUEST A QUOTE</button>
                {/* <button className="btn-caro-2-1 mx-2">
                  GET A QUOTE <GoArrowRight />
                </button> */}
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row caro-lr-1">
              <div className="caro-left col-lg-6 d-flex justify-content-center">
                <div className="img-trans">
                  <div>
                    <img src={g0} height={400} alt="" />
                  </div>
                  <div
                    className="d-flex"
                    style={{ gap: "20px", margin: "20px 0" }}
                  >
                    <img src={g1} height={146} alt="" />
                    <img src={g2} height={146} alt="" />
                    <img src={g3} height={146} alt="" />
                  </div>
                </div>
              </div>
              <div className="caro-right col-lg-6">
                <h4>Bowers & Wilkins</h4>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s.
                </p>
                <div className="d-flex">
                  <img className="mx-3" src={sun} height={40} alt="" />
                  <div>
                    <strong>Lorem Ipsum </strong>
                    <p>
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <img
                    className=""
                    style={{ marginLeft: "20px", marginRight: "22px" }}
                    src={bulb}
                    height={40}
                    alt=""
                  />
                  <div>
                    <strong>Lorem Ipsum </strong>
                    <p>
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <img className="mx-3" src={rem} height={40} alt="" />
                  <div>
                    <strong>Lorem Ipsum </strong>
                    <p>
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
                <button className="btn-caro-1-1" onClick={() => nav("/consultation")}>REQUEST A QUOTE</button>
                {/* <button className="btn-caro-2-1 mx-2">
                  GET A QUOTE <GoArrowRight />
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="caro-blogs">
        <p
          style={{ textAlign: "center", color: "#757575", fontSize: "1.1rem" }}
        >
          Lorem Ipsum is simply
        </p>
        <h4 style={{ textAlign: "center" }}>Lorem Ipsum is simply</h4>
        <br />
        <div className="row-blog-prod">
          <div className="mx-auto" style={{ textAlign: "center" }}>
            <img src={w1} height={300} alt="" />
            <div className="my-3" style={{ fontSize: "0.9rem" }}>
              Lorem Ipsum
            </div>
            <div style={{ fontSize: "0.9rem", width: "300px", margin: "auto" }}>
              Lorem Ipsum is simply
            </div>
          </div>
          <div className="mx-auto" style={{ textAlign: "center" }}>
            <img src={w2} height={300} alt="" />
            <div className="my-3" style={{ fontSize: "0.9rem" }}>
              Lorem Ipsum
            </div>
            <div style={{ fontSize: "0.9rem", width: "300px", margin: "auto" }}>
              Lorem Ipsum is simply
            </div>
          </div>
          <div className="mx-auto" style={{ textAlign: "center" }}>
            <img src={w3} height={300} alt="" />
            <div className="my-3" style={{ fontSize: "0.9rem" }}>
              Lorem Ipsum
            </div>
            <div style={{ fontSize: "0.9rem", width: "300px", margin: "auto" }}>
              Lorem Ipsum is simply
            </div>
          </div>
          <div className="mx-auto" style={{ textAlign: "center" }}>
            <img src={w4} height={300} alt="" />
            <div className="my-3" style={{ fontSize: "0.9rem" }}>
              Lorem Ipsum
            </div>
            <div style={{ fontSize: "0.9rem", width: "300px", margin: "auto" }}>
              Lorem Ipsum is simply
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
