import React from "react";
import "../assets/styles/JobPost.css";
import logo from "../assets/images/logo.png";
import { MdAccessTime } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { AiOutlineDollar } from "react-icons/ai";
import { GoArrowRight } from "react-icons/go";
import { useLocation, useNavigate } from "react-router-dom";

const JobPost = () => {
  const nav = useNavigate();
  const location = useLocation();
  const { state } = location;
  const jobData = state.message;
  const job = [
    {
      option: "Marketing",
      role: "MARKETING LEAD",
      location: "Remote",
      type: "Full-Time",
    },
    {
      option: "Marketing",
      role: "MARKETING LEAD",
      location: "Remote",
      type: "Full-Time",
    },
    {
      option: "Marketing",
      role: "MARKETING LEAD",
      location: "Remote",
      type: "Full-Time",
    },
    {
      option: "Marketing",
      role: "MARKETING LEAD",
      location: "Remote",
      type: "Full-Time",
    },
  ];
  return (
    <div className="job-post-section">
      <div className="about-black" style={{ textTransform: "uppercase" }}>
        {jobData.role}
      </div>
      <div className="job-post-each">
        <div className="left-job-post-each" style={{ position: "relative" }}>
          <div className="top-job-post d-flex align-items-center">
            <div>
              <img src={logo} alt="" height={25} />
            </div>
            <div className="mx-5">
              <h5>TDG SMART</h5>
              <div style={{ color: "rgba(0, 0, 0, 0.5)" }}>15th July 2024</div>
            </div>
          </div>
          <h3 className="job-title my-5">{jobData.role}</h3>
          <div className="jcc d-flex align-items-center">
            <div
              className="d-flex align-items-center"
              style={{ color: "rgba(0, 0, 0, 0.5)", fontSize: "0.85rem" }}
            >
              <GrLocation style={{ fontSize: "23px" }} />
              <div className="mx-1">{jobData.location}</div>
            </div>
            <div
              className="d-flex align-items-center mx-5"
              style={{ color: "rgba(0, 0, 0, 0.5)", fontSize: "0.85rem" }}
            >
              <MdAccessTime style={{ fontSize: "23px" }} />
              <div className="mx-1">{jobData.type}</div>
            </div>
          </div>
          <div className="jcc d-flex align-items-center my-3 mx-1">
            <div
              className="d-flex align-items-center"
              style={{ color: "rgba(0, 0, 0, 0.5)", fontSize: "0.85rem" }}
            >
              <SlCalender style={{ fontSize: "23px" }} />
              <div className="mx-1">20 July</div>
            </div>
            <div
              className="d-flex align-items-center mx-5"
              style={{ color: "rgba(0, 0, 0, 0.5)", fontSize: "0.85rem" }}
            >
              <AiOutlineDollar style={{ fontSize: "23px" }} />
              <div className="mx-1">$10/Month</div>
            </div>
          </div>
          <div className="job-desc my-5">
            <h4 className="mb-4">Job Description</h4>
            <p style={{ color: "rgba(0, 0, 0, 0.5)" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="job-resp my-5">
            <h4 className="mb-4">Responsibilites</h4>
            <ul>
              <li style={{ color: "rgba(0, 0, 0, 0.5)" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </li>
              <li style={{ color: "rgba(0, 0, 0, 0.5)" }}>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged..
              </li>
              <li style={{ color: "rgba(0, 0, 0, 0.5)" }}>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum
              </li>
              <li style={{ color: "rgba(0, 0, 0, 0.5)" }}>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </li>
            </ul>
          </div>
          <div className="job-req my-5">
            <h4 className="mb-4">Responsibilites</h4>
            <ul style={{ color: "rgba(0, 0, 0, 0.5)" }}>
              <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </li>
              <li>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </li>
              <li>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </li>
              <li>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </li>
              <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </li>
              <li>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </li>
              <li>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </li>
              <li>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </li>
              <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </li>
              <li>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </li>
              <li>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </li>
              <li>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </li>
            </ul>
          </div>
        </div>
        <div
          className="btn-pos-1"
          style={{ margin: "auto", textAlign: "center" }}
        >
          <button className="career-btn-filter-2 job-apply-main mb-5">
            APPLY <GoArrowRight />
          </button>
        </div>
        <div className="right-job-post-each">
          <h4 className="mb-4">Location</h4>
          <iframe
            className="embeded-map-2"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.8270032758523!2d88.39659447475643!3d22.548152333866998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02769db9e49f61%3A0xa2117593c10c8066!2sJW%20Marriott%20Hotel%20Kolkata!5e0!3m2!1sen!2sin!4v1719893410545!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <h4 className="my-4">Similar Jobs</h4>
          <div className="job-posts" style={{ margin: "0" }}>
            {job.map((e, i) => (
              <div
                className="each-post"
                style={{ padding: "20px", borderRadius: "20px" }}
              >
                <div className="left-post">
                  <p
                    style={{
                      color: "rgba(0, 0, 0, 0.5)",
                      fontSize: "0.85rem",
                    }}
                  >
                    {e.option}
                  </p>
                  <h5 className="mb-4" style={{ marginTop: "-10px" }}>
                    {e.role}
                  </h5>
                  <div className="jcc d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <GrLocation style={{ fontSize: "15px" }} />
                      <div
                        className=""
                        style={{ fontSize: "0.85rem", marginRight: "3px" }}
                      >
                        {e.location}
                      </div>
                    </div>
                    <div className="d-flex align-items-center mx-3">
                      <MdAccessTime
                        style={{ fontSize: "15px", marginLeft: "-12px" }}
                      />
                      <div
                        className="mx-1"
                        style={{ fontSize: "0.85rem", position: "absolute" }}
                      >
                        {e.type}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-post">
                  <button
                    className="career-btn-filter-2"
                    style={{ fontSize: "0.85rem" }}
                    onClick={() => nav("/career")}
                  >
                    APPLY <GoArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="btn-pos-2"
        style={{ margin: "auto", textAlign: "center" }}
      >
        <button className="career-btn-filter-2 job-apply-main mb-5">
          APPLY <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export default JobPost;
