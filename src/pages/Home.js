import React, { useEffect } from "react";
import "../assets/styles/Home.css";
import caro from "../assets/images/caro.png";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import pic1 from "../assets/images/pic1.png";
import pic2 from "../assets/images/pic2.png";
import pic3 from "../assets/images/pic3.png";
import l1 from "../assets/images/l1.png";
import l2 from "../assets/images/l2.png";
import l3 from "../assets/images/l3.png";
import l4 from "../assets/images/l4.png";
import l5 from "../assets/images/l5.png";
import tab from "../assets/images/tab.png";
import cctv from "../assets/images/cctv.png";
import f1 from "../assets/images/f1.png";
import f2 from "../assets/images/f2.png";
import f3 from "../assets/images/f3.png";
import f4 from "../assets/images/f4.png";
import golf from "../assets/images/golf.png";
import golfb from "../assets/images/golfb.png";
import golfr from "../assets/images/golfr.png";
import t1 from "../assets/images/t1.jpeg";
import person from "../assets/images/person.png";
import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/blog3.png";
import { useNavigate } from "react-router-dom";
import c1 from "../assets/videos/c1.mp4";
import c2 from "../assets/videos/c2.mp4";
import c3 from "../assets/videos/c3.mp4";

const Home = () => {
  const nav = useNavigate();
  // useEffect(() => {
  //   const videos = document.querySelectorAll(".carousel-item video");
  //   videos.forEach((video) => {
  //     video.muted = true;
  //     video.playsInline = true;
  //   });

  //   const playVideos = () => {
  //     videos.forEach((video) => {
  //       video.play().catch((error) => {
  //         console.log("Error attempting to play", error);
  //       });
  //     });
  //   };

  //   // Play the first video immediately
  //   if (videos.length > 0) {
  //     videos[0].play().catch((error) => {
  //       console.log("Error attempting to play the first video", error);
  //     });
  //   }

  //   // Add event listener to play videos on user interaction
  //   document.addEventListener("click", playVideos);

  //   return () => {
  //     document.removeEventListener("click", playVideos);
  //   };
  // }, []);
  useEffect(() => {
    const carouselElement = document.getElementById("carouselExampleCaptions");
    const videos = carouselElement.querySelectorAll(".carousel-item video");

    videos.forEach((video) => {
      video.muted = true;
      video.playsInline = true;
    });

    const playVideo = (video) => {
      video.play().catch((error) => {
        console.log("Error attempting to play video", error);
      });
    };

    const pauseAllVideos = () => {
      videos.forEach((video) => video.pause());
    };

    const handleSlide = (event) => {
      pauseAllVideos();
      const nextVideo = event.relatedTarget.querySelector("video");
      if (nextVideo) {
        playVideo(nextVideo);
      }
    };

    const handleSlideEnd = (event) => {
      const nextVideo = event.target.querySelector("video");
      if (nextVideo) {
        playVideo(nextVideo);
      }
    };

    carouselElement.addEventListener("slide.bs.carousel", handleSlide);
    carouselElement.addEventListener("slid.bs.carousel", handleSlideEnd);

    // Play the first video immediately
    if (videos.length > 0) {
      playVideo(videos[0]);
    }

    return () => {
      carouselElement.removeEventListener("slide.bs.carousel", handleSlide);
      carouselElement.removeEventListener("slid.bs.carousel", handleSlideEnd);
    };
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="home-caro">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner">
            <div
              className="carousel-item carousel-itemm active"
              data-bs-interval="9000"
            >
              {/* <img src={caro} className="d-block w-100" alt="..." /> */}
              <video className="d-block w-100" autoplay muted>
                <source src={c1} type="video/mp4" />
              </video>
              <div className="carousel-caption caro-text">
                <h5>Elevate Your Living: Smart Homes, Smarter Life</h5>
                <p>
                  Experience the Future of Living with Our Cutting-Edge Smart
                  Systems and Lifestyle Solutions
                </p>
                <button
                  className="btn-caro-1"
                  onClick={() => nav("/consultation")}
                >
                  REQUEST A QUOTE <GoArrowRight />
                </button>
                <a href="#section-2">
                  <button
                    className="btn-caro-2 mx-2"
                    style={{ background: "white" }}
                  >
                    EXPLORE <GoArrowRight />
                  </button>
                </a>
              </div>
            </div>
            <div
              className="carousel-item carousel-itemm"
              data-bs-interval="7000"
            >
              <video className="d-block w-100" autoplay muted>
                <source src={c2} type="video/mp4" />
              </video>
              <div className="carousel-caption caro-text">
                <h5>Smart Homes, Crafted for You</h5>
                <p>
                  Experience the Future of Living with Our Cutting-Edge Smart
                  Systems and Lifestyle Solutions
                </p>
                <button className="btn-caro-1">
                  REQUEST A QUOTE <GoArrowRight />
                </button>
                <a href="#section-2">
                  <button
                    className="btn-caro-2 mx-2"
                    style={{ background: "white" }}
                  >
                    EXPLORE <GoArrowRight />
                  </button>
                </a>
              </div>
            </div>
            <div
              className="carousel-item carousel-itemm"
              data-bs-interval="7000"
            >
              <video className="d-block w-100" autoplay muted>
                <source src={c3} type="video/mp4" />
              </video>
              <div className="carousel-caption caro-text">
                <h5>Experience the Difference with Smart Home Appliances</h5>
                <p>
                  Experience the Future of Living with Our Cutting-Edge Smart
                  Systems and Lifestyle Solutions
                </p>
                <button className="btn-caro-1">
                  REQUEST A QUOTE <GoArrowRight />
                </button>
                <button
                  className="btn-caro-2 mx-2"
                  style={{ background: "white" }}
                >
                  EXPLORE <GoArrowRight />
                </button>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <div className="caro-btn">
              <GoArrowLeft className="lr-btn" />
            </div>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <div className="caro-btn">
              <GoArrowRight className="lr-btn" />
            </div>
          </button>
        </div>
      </div>

      <section id="section-2">
        <div className="text-4">
          <div className="row my-5" style={{ margin: "0" }}>
            <div className="col-lg-3 col-md-4 col-sm-6 px-5 mx-auto">
              <h5>Cutting-Edge Technology</h5>
              <p style={{ color: "#A7A9AB" }}>
                We provide the latest smart home appliances to enhance your
                living experience.
              </p>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 px-5 mx-auto">
              <h5>Expert Installation</h5>
              <p style={{ color: "#A7A9AB" }}>
                Our talented integrators, designers, engineers, and programmers
                ensure flawless installation and integration.
              </p>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 px-5 mx-auto">
              <h5>Customized Solutions</h5>
              <p style={{ color: "#A7A9AB" }}>
                We tailor smart home systems to fit your unique lifestyle, from
                smart kitchens to automated home theaters.
              </p>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 px-5 mx-auto">
              <h5>Ongoing Support</h5>
              <p style={{ color: "#A7A9AB" }}>
                We offer continuous support and maintenance to keep your systems
                up-to-date and functioning seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="pics-4">
        <h3 className="h-pics" style={{ textAlign: "center" }}>
          Get Started Today
        </h3>
        <br />
        <div className="row pics-4-row">
          <div className="col-xl-4 col-lg-6 col-md-6 d-flex pic1-card">
            <div style={{ marginTop: "3px" }}>
              <div className="pos-rel-pic">
                <img src={pic1} alt="" height={223} />
                {/* <p className="pos-abs-pic">Lorem Ipsum is simply</p> */}
              </div>
              <p
                className="pic1-text mt-3"
                style={{ textAlign: "justify", color: "#4B4B4B" }}
              >
               TDG will help you navigate every challenge in your current space, whether you are interested in adding lighting, building a movie room or theater, 
               or adding cameras to your home. We aim to bring the art of the possible to life and help you design a smart, simple, but elegant solution to meet your needs.
               We partner with the best brands to select time-tested products that are easy to maintain and deliver the value you pay for. 
              </p>
              <button className="wwd-btn" onClick={() => nav("/support")}>
                WHAT WE DO <GoArrowRight style={{ fontSize: "1rem" }} />
              </button>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 d-flex justify-content-center"
            sty
          >
            <div>
              <div className="pos-rel-pic" style={{ marginTop: "3px" }}>
                <img src={pic2} alt="" height={471} />
                {/* <p className="pos-abs-pic">Lorem Ipsum is simply</p> */}
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 d-flex pic3-card mx-auto">
            <div>
              <p
                className="pic2-text"
                style={{ textAlign: "justify", color: "##4B4B4B" }}
              >
                Are you looking to watch the big game outside or create a perfect setup for a relaxing day? We've got you covered. 
Elevate your home with top-notch audio and video solutions for quality family time, personal relaxation, and everything in between.
TDG offers the finest smart home products, ensuring that your leisure time is not just easier, but also of the highest quality and more enjoyable.
Transform your living space and enjoy high-quality entertainment at home today.
              </p>
              <div className="pos-rel-pic">
                <img src={pic3} alt="" height={275} />
                {/* <p className="pos-abs-pic">Lorem Ipsum is simply</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="features-home">
        {/* <h6 style={{ color: "#757575", textAlign: "center" }}>
          Smart Home Solutions
        </h6> */}
        <h3 className="" style={{ textAlign: "center" }}>
          Smart Home Solutions
        </h3>
        <br />
        <div className="logos-circle">
          <div
            style={{ textAlign: "center" }}
            onClick={() => nav("/product/home_control/control4")}
          >
            <div className="logo-circle mx-auto">
              <img src={l1} height={45} alt="" />
            </div>
            <p className="mt-2">Home Control</p>
          </div>
          <div
            style={{ textAlign: "center" }}
            onClick={() => nav("/product/Entertainment_&_Lifestyle")}
          >
            <div className="logo-circle mx-auto">
              <img src={l2} height={45} alt="" />
            </div>
            <p className="mt-2">Entertainment & Lifestyle</p>
          </div>
          <div
            style={{ textAlign: "center" }}
            onClick={() => nav("/product/comfort/climate-control")}
          >
            <div className="logo-circle mx-auto">
              <img src={l3} height={45} alt="" />
            </div>
            <p className="mt-2">Comfort</p>
          </div>
          <div
            style={{ textAlign: "center" }}
            onClick={() => nav("/product/Secuity_&_Surveillance/cameras")}
          >
            <div className="logo-circle mx-auto">
              <img src={l4} height={45} alt="" />
            </div>
            <p className="mt-2">Security & Surveillance</p>
          </div>
          <div
            style={{ textAlign: "center" }}
            onClick={() => nav("/product/Lighting")}
          >
            <div className="logo-circle mx-auto">
              <img src={l5} height={45} alt="" />
            </div>
            <p className="mt-2">Lighting</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="products-home">
        <div className="ph">
          <div className="tab" style={{ height: "530px" }}>
            <div style={{ textAlign: "center" }}>
              <img className="tab-img" src={tab} alt="" />
              <h6 className="mt-3">Secuity System</h6>
              <button
                className="wwd-btn"
                style={{ color: "black" }}
                onClick={() => nav("/product/Secuity_&_Surveillance")}
              >
                CHECK PRODUCTS{" "}
                <GoArrowRight style={{ fontSize: "1rem", color: "black" }} />
              </button>
            </div>
          </div>
          <div className="cctv" style={{ height: "500px" }}>
            <div>
              <img className="cctv-img" src={cctv} alt="" />
              <div className="box-abs" style={{ textAlign: "center" }}>
                <h6 className="mt-3">Smart Home Surveillance</h6>
                <button
                  className="wwd-btn"
                  style={{ color: "black" }}
                  onClick={() => nav("/product/Secuity_&_Surveillance")}
                >
                  VIEW PRODUCTS{" "}
                  <GoArrowRight style={{ fontSize: "1rem", color: "black" }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="pic4-flex">
        <h6 style={{ color: "#757575", textAlign: "center" }}>
          Lorem Ipsum is simply
        </h6>
        <h3 className="" style={{ textAlign: "center" }}>
          Lorem Ipsum is simply
        </h3>
        <br />
        <div className="row pic4-pad" style={{ margin: "0" }}>
          <div
            className="col-lg-3 col-md-4 col-sm-6 mx-auto"
            style={{ height: "400px" }}
          >
            <div style={{ textAlign: "center" }}>
              <img src={f1} height={270} alt="" />
              <p className="mt-3">Lorem Ipsum</p>
              <p style={{ marginTop: "-15px" }}>Lorem Ipsum is simply</p>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-4 col-sm-6 mx-auto"
            style={{ height: "400px" }}
          >
            <div style={{ textAlign: "center" }}>
              <img src={f2} height={270} alt="" />
              <p className="mt-3">Lorem Ipsum</p>
              <p style={{ marginTop: "-15px" }}>Lorem Ipsum is simply</p>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-4 col-sm-6 mx-auto"
            style={{ height: "400px" }}
          >
            <div style={{ textAlign: "center" }}>
              <img src={f3} height={270} alt="" />
              <p className="mt-3">Lorem Ipsum</p>
              <p style={{ marginTop: "-15px" }}>Lorem Ipsum is simply</p>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-4 col-sm-6 mx-auto"
            style={{ height: "400px" }}
          >
            <div style={{ textAlign: "center" }}>
              <img src={f4} height={270} alt="" />
              <p className="mt-3">Lorem Ipsum</p>
              <p style={{ marginTop: "-15px" }}>Lorem Ipsum is simply</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="golf">
        <div className="golf-row" style={{ margin: "0" }}>
          <div className="golf-img d-flex justify-content-center">
            <img src={golf} alt="" />
          </div>
          <div className="">
            <p
              style={{
                color: "#282866",
                fontSize: "0.85rem",
                fontWeight: "600",
              }}
            >
              Learn more about Golf Simulation
            </p>
            <h3>Golf Simulation</h3>
            <p
              style={{
                textAlign: "justify",
                color: "rgba(0, 0, 0, 0.5)",
                fontSize: "0.9rem",
              }}
            >
              Transform your spaces into vibrant hubs of music and
              entertainment, or convert your spare rooms into a world-class
              indoor golf escape. Whether you seek to seamlessly integrate the
              outdoors with your indoor spaces or create indoor environments
              that rival the outdoors, TDG caters to your vision. Our solutions
              redefine home living by harmonizing advanced technology with
              unparalleled comfort, delivering an exceptional experience
              tailored to your lifestyle.
            </p>
            <button
              className="wwd-btn"
              style={{ color: "black" }}
              onClick={() =>
                nav("/product/Entertainment_&_Lifestyle/golf-simulation")
              }
            >
              VIEW THE CATALOGUE{" "}
              <GoArrowRight style={{ fontSize: "1rem", color: "black" }} />
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="golf-sim">
        <div className="row" style={{ margin: "0" }}>
          <div className="col-lg-7 golfb-div">
            <div className="golfb">
              <img src={golfb} alt="" />
              <div>
                <div className="box-abs-2">
                  <h2>Learn more about Golf Simulation</h2>
                  <p
                    className="mt-3"
                    style={{ color: "#969696", fontSize: "0.9rem" }}
                  >
                    An indoor golf simulator simply brings the golf course right
                    into your living room. You'll have a virtual golf course
                    indoors where you can practice, no matter the weather, and
                    play anytime. It's very entertaining to have effectively
                    lifelike graphics and ball-tracking abilities, which will
                    help you develop your swing as you have fun playing with
                    friends and family. This way, you will get a feel of the
                    excitement attached to golf without having to move out from
                    your home very convenient.
                  </p>
                  {/* <button
                    className="wwd-btn"
                    style={{ color: "black", padding: "5px 30px" }}
                    onClick={() => nav("/product/golf-simulation")}
                  >
                    EARLY ACCESS{" "}
                    <GoArrowRight
                      style={{ fontSize: "1rem", color: "black" }}
                    />
                  </button> */}
                  <p className="mt-2">Golf Simulation</p>
                  <p style={{ marginTop: "-15px" }}>
                    Virtual Screen for Golfing
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 golfr">
            <div style={{ width: "max-content" }}>
              <img src={golfr} alt="" />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="home-caro">
        <p style={{ textAlign: "center", color: "#282866" }}>
          CUSTOMER FEEDBACK
        </p>
        <h3 style={{ textAlign: "center" }}>
          Here is what our satisfied clients say
        </h3>
        <br />
        <div id="carouselExampleCaptions2" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active" style={{ height: "auto" }}>
              <p
                style={{
                  color: "#6B6866",
                  width: "70%",
                  margin: "auto",
                  textAlign: "center",
                }}
              >
                "I had TDG Smart Homes update my system, which works fine now. I
                used to have low-end rumble driving me up the wall - and with
                his improvements, I no longer have these issues. They installed
                a new system with in-wall speakers and programmed the entire
                unit to multiple locations. They also installed the speakers and
                other units inside the drywall, and all this installation work
                was done cleanly and looked fantastic. The sound and appearance
                are wonderful. I wholeheartedly recommend the TDG team for all
                your home automation and entertainment needs."
              </p>
              <br />
              <div style={{ textAlign: "center" }}>
                <img
                  src={t1}
                  height={120}
                  style={{ borderRadius: "50%" }}
                  alt=""
                />
              </div>
              <p
                className="mt-2"
                style={{ color: "#6B6866", textAlign: "center" }}
              >
                Larry Eldridge, Gainesville, Virginia
              </p>
            </div>
            <div className="carousel-item" style={{ height: "auto" }}>
              <p
                style={{
                  color: "#6B6866",
                  width: "70%",
                  margin: "auto",
                  textAlign: "center",
                }}
              >
                World-class service! I wanted to set up my basement into a real
                man cave. I didn’t know where to begin; a friend referred me to
                TDG Smart Homes. They were very professional, answered my
                questions, and made recommendations tailored to my needs and
                budget. I wanted in-wall speakers along with enough bass to
                enjoy movies and sports. The team assessed my basement equipment
                to see what I already had and what additional speakers,
                receivers, and sub to give me the best sound. They completed
                this project promptly and provided an unrivaled customer
                experience. I recommend TDG and the team to anybody looking to
                upgrade or start an audio/video project. I look forward to
                working with them again when I move into my next house.
              </p>
              <br />
              <div style={{ textAlign: "center" }}>
                <img src={person} height={120} alt="" />
              </div>
              <p
                className="mt-2"
                style={{ color: "#6B6866", textAlign: "center" }}
              >
                Moussa O, Gaithersburg, Maryland.
              </p>
            </div>
<div className="carousel-item" style={{ height: "auto" }}>
              <p
                style={{
                  color: "#6B6866",
                  width: "70%",
                  margin: "auto",
                  textAlign: "center",
                }}
              >
                Everything your team designed and implemented is working without issues. 
                  Thank you so much!
              </p>
              <br />
              <div style={{ textAlign: "center" }}>
                <img src={person} height={120} alt="" />
              </div>
              <p
                className="mt-2"
                style={{ color: "#6B6866", textAlign: "center" }}
              >
                David D, Haymarket, Virginia.
              </p>
            </div>
            <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions2"
            data-bs-slide="prev"
          >
            <div
              className="caro-btn"
              style={{ color: "black", border: "1px solid black" }}
            >
              <GoArrowLeft className="lr-btn" />
            </div>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions2"
            data-bs-slide="next"
          >
            <div
              className="caro-btn"
              style={{ color: "black", border: "1px solid black" }}
            >
              <GoArrowRight className="lr-btn" />
            </div>
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="rooms">
        <div className="row" style={{ margin: "0" }}>
          <div
            className="col-lg-4 col-md-6 mx-auto room1 d-flex align-items-end p-5"
            style={{ height: "450px" }}
          >
            <div>
              {/* <p style={{ color: "white" }}>Lorem Ipsum</p> */}
              <h5
                className="mb-4"
                style={{
                  textTransform: "uppercase",
                  color: "white",
                  marginTop: "-8px",
                }}
              >
                Outdoor Entertainment
              </h5>
              <button
                className="wwd-btn"
                style={{ color: "white", border: "1px solid white" }}
                onClick={() =>
                  nav("/product/Entertainment_&_Lifestyle/relaxing-outdoors")
                }
              >
                LEARN MORE{" "}
                <GoArrowRight style={{ fontSize: "1rem", color: "white" }} />
              </button>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 mx-auto room2 d-flex align-items-end p-5"
            style={{ height: "450px" }}
          >
            <div>
              {/* <p style={{ color: "white" }}>Lorem Ipsum</p> */}
              <h5
                className="mb-4"
                style={{
                  textTransform: "uppercase",
                  color: "white",
                  marginTop: "-8px",
                }}
              >
                GAMING ROOMS
              </h5>
              <button
                className="wwd-btn"
                style={{ color: "white", border: "1px solid white" }}
                onClick={() => nav("/product/Entertainment_&_Lifestyle/gaming")}
              >
                LEARN MORE{" "}
                <GoArrowRight style={{ fontSize: "1rem", color: "white" }} />
              </button>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 mx-auto room3 d-flex align-items-end p-5"
            style={{ height: "450px" }}
          >
            <div>
              {/* <p style={{ color: "white" }}>Lorem Ipsum</p> */}
              <h5
                className="mb-4"
                style={{
                  textTransform: "uppercase",
                  color: "white",
                  marginTop: "-8px",
                }}
              >
                Media / Theater Rooms
              </h5>
              <button
                className="wwd-btn"
                style={{ color: "white", border: "1px solid white" }}
                onClick={() =>
                  nav("/product/Entertainment_&_Lifestyle/home-theatre")
                }
              >
                LEARN MORE{" "}
                <GoArrowRight style={{ fontSize: "1rem", color: "white" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      {/* <div className="blogs">
        <p style={{ textAlign: "center", color: "#E6AF5D" }}>BLOGS</p>
        <h3 style={{ textAlign: "center" }}>
          Latest articles directly from the blog
        </h3>
        <br />
        <div className="blog-row">
          <div className="">
            <div className="blog-card">
              <img src={blog1} width={400} alt="" />
              <h5 className="mt-3">
                Lorem Ipsum is simply dummy text of the printing...
              </h5>
              <span
                style={{
                  color: "#7C7E7C",
                  textTransform: "uppercase",
                  fontSize: "0.8rem",
                }}
              >
                April 5,2023{" "}
                <span
                  className="mx-2"
                  style={{ color: "#282866", textTransform: "capitalize" }}
                >
                  Apollo Theme
                </span>
              </span>
            </div>
          </div>
          <div className=" mid-card">
            <div className="blog-card">
              <img src={blog2} width={400} alt="" />
              <h5 className="mt-3">
                Lorem Ipsum is simply dummy text of the printing...
              </h5>
              <span
                style={{
                  color: "#7C7E7C",
                  textTransform: "uppercase",
                  fontSize: "0.8rem",
                }}
              >
                April 5,2023{" "}
                <span
                  className="mx-2"
                  style={{ color: "#282866", textTransform: "capitalize" }}
                >
                  Apollo Theme
                </span>
              </span>
            </div>
          </div>
          <div className="">
            <div className="blog-card">
              <img src={blog3} width={400} alt="" />
              <h5 className="mt-3">
                Lorem Ipsum is simply dummy text of the printing...
              </h5>
              <span
                style={{
                  color: "#7C7E7C",
                  textTransform: "uppercase",
                  fontSize: "0.8rem",
                }}
              >
                April 5,2023{" "}
                <span
                  className="mx-2"
                  style={{ color: "#282866", textTransform: "capitalize" }}
                >
                  Apollo Theme
                </span>
              </span>
            </div>
          </div>
        </div>
      </div> */}
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
