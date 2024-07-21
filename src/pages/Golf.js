import React, { useState } from "react";
import "../assets/styles/Golf.css";
import g0 from "../assets/images/g5.png";
import g1 from "../assets/images/g6.png";
import g2 from "../assets/images/g7.png";
import g3 from "../assets/images/g8.png";
import bulb from "../assets/images/z2.png";
import sun from "../assets/images/z1.png";
import rem from "../assets/images/z3.png";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Golf = () => {
  const nav = useNavigate();
  const [career, setCareer] = useState("Protective Case");
  const options = [
    {
      name: "Protective Case",
    },
    {
      name: "Cameras",
    },
    {
      name: "Mat",
    },
    {
      name: "Mat Base",
    },
    {
      name: "Launch Monitor Alignment Stand",
    },
    {
      name: "Floor Mounted Projector Enclosure",
    },
  ];
  return (
    <div className="golf-section">
      <div className="wall-prod-1">
        <div>
          <h1>GOLF SIMULATION</h1>
          <h5>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s.
          </h5>
        </div>
      </div>
      <div className="filters">
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
                <h4>Protective Case</h4>
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
                <button
                  className="btn-caro-1-1"
                  onClick={() => nav("/consultation")}
                >
                  SCHEDULE A CALL
                </button>
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
                <h4>Protective Case</h4>
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
                <button
                  className="btn-caro-1-1"
                  onClick={() => nav("/consultation")}
                >
                  SCHEDULE A CALL
                </button>
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
                <h4>Protective Case</h4>
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
                <button
                  className="btn-caro-1-1"
                  onClick={() => nav("/consultation")}
                >
                  SCHEDULE A CALL
                </button>
                {/* <button className="btn-caro-2-1 mx-2">
                  GET A QUOTE <GoArrowRight />
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Golf;
