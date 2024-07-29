import React, { useState } from "react";
import "../../assets/styles/Product.css";
import pr1 from "../../assets/images/h1.jpeg";
import pr2 from "../../assets/images/h2.jpeg";
import pr3 from "../../assets/images/h3.jpeg";
import pr4 from "../../assets/images/h4.jpeg";
import g0 from "../../assets/images/g0.png";
import g1 from "../../assets/images/g1.png";
import g2 from "../../assets/images/g2.png";
import g3 from "../../assets/images/g3.png";
import bulb from "../../assets/images/bulb.png";
import sun from "../../assets/images/sun.png";
import rem from "../../assets/images/rem.png";
import { GoArrowRight } from "react-icons/go";
import w1 from "../../assets/images/w1.png";
import w2 from "../../assets/images/w2.png";
import w3 from "../../assets/images/w3.png";
import w4 from "../../assets/images/w4.png";
import { useNavigate } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Savant = () => {
  const nav = useNavigate();
  const [career, setCareer] = useState("Savant");
  const options = [
    {
      name: "Control4",
      nav: "/product/home_control/control4#product",
    },
    {
      name: "Savant",
      nav: "/product/home_control/savant#product",
    },
    {
      name: "RTI",
      nav: "/product/home_control/RTI#product",
    },
    {
      name: "URC",
      nav: "/product/home_control/URC#product",
    },
  ];
  const prodList = [
    {
      img: pr1,
      txt: "Control4",
    },
    {
      img: pr2,
      txt: "Savant",
    },
    {
      img: pr3,
      txt: "RTI",
    },
    {
      img: pr4,
      txt: "URC",
    }
  ];
  return (
    <div className="product-section">
      <div className="wall-prod">
        <div>
          <h1>Savant</h1>
          <h4>Home Control</h4>
        </div>
      </div>
      <div className="filters">
        {options.map((e, i) => (
          <HashLink to={e.nav} style={{color: e.name === career ? "white" : "#282866", textDecoration:'none'}}>
          <button
            onClick={() => {setCareer(e.name); nav(e.nav)}}
            key={i}
            className="career-btn-filter py-2"
            style={{
              background: e.name === career ? "#282866" : "white",
              color: e.name === career ? "white" : "#282866",
            }}
          >
            {e.name}
          </button>
          </HashLink>
        ))}
      </div>
      <div className="prod-list">
        {prodList.map((e, i) => (
          <div className="prods-img" style={{ textAlign: "center" }} key={i}>
            <img src={e.img} alt="" style={{height:"80px"}} />
            <div>{e.txt}</div>
          </div>
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
      <div className="caro-blogs" id="product">
        <p
          style={{ textAlign: "center", color: "#757575", fontSize: "1.1rem" }}
        >
          Our Products
        </p>
        <h4 style={{ textAlign: "center" }}>Speakers</h4>
        <br />
        <div className="row-blog-prod">
          <div className="mx-auto" style={{ textAlign: "center" }}>
            <img src={w1} height={300} alt="" />
            <div
              className="my-3"
              style={{ fontSize: "0.9rem", fontWeight: "600" }}
            >
              Loudspeakers
            </div>
            <div style={{ fontSize: "0.9rem", width: "300px", margin: "auto" }}>
              Bring your sound to a new level of excellence with our premium
              loudspeakers here at TDG Home.
            </div>
          </div>
          <div className="mx-auto" style={{ textAlign: "center" }}>
            <img src={w2} height={300} alt="" />
            <div
              className="my-3"
              style={{ fontSize: "0.9rem", fontWeight: "600" }}
            >
              Subwoofers
            </div>
            <div style={{ fontSize: "0.9rem", width: "300px", margin: "auto" }}>
              Feel the bass as never felt before with TDG Home's
              high-performance subwoofers.
            </div>
          </div>
          <div className="mx-auto" style={{ textAlign: "center" }}>
            <img src={w3} height={300} alt="" />
            <div
              className="my-3"
              style={{ fontSize: "0.9rem", fontWeight: "600" }}
            >
              Home Theater
            </div>
            <div style={{ fontSize: "0.9rem", width: "300px", margin: "auto" }}>
              Bring your living room into the world of cinema with home theater
              systems from TDG Home.
            </div>
          </div>
          <div className="mx-auto" style={{ textAlign: "center" }}>
            <img src={w4} height={300} alt="" />
            <div
              className="my-3"
              style={{ fontSize: "0.9rem", fontWeight: "600" }}
            >
              In-Wall & In-Ceiling
            </div>
            <div style={{ fontSize: "0.9rem", width: "300px", margin: "auto" }}>
              TDG Home in-wall and in-ceiling speakers provide sleek,
              unobtrusive audio to every corner of your room.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Savant;
