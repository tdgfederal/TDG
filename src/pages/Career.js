import { useState } from "react";
import React from "react";
import "../assets/styles/Career.css";
import { GoArrowRight } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { MdAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";

const Career = () => {
  const [career, setCareer] = useState("View All");
  const options = [
    {
      name: "View All",
    },
    {
      name: "Operations",
    },
    {
      name: "Marketing",
    },
    {
      name: "Customer Service",
    },
    {
      name: "Finance",
    },
    {
      name: "Management",
    },
  ];
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
      option: "Customer Service",
      role: "SERVICE HEAD",
      location: "Remote",
      type: "Full-Time",
    },
    {
      option: "Finance",
      role: "FINANCE MANAGEMENT",
      location: "Remote",
      type: "Full-Time",
    },
    {
      option: "Finance",
      role: "FINANCE MANAGEMENT",
      location: "Remote",
      type: "Full-Time",
    },
  ];
  const [postPerPage, setPostPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastPost = postPerPage * currentPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentjob = job.slice(indexOfFirstPost, indexOfLastPost);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(job.length / postPerPage); i++) {
    pageNumbers.push(i);
  }
  const handleNext = () => {
    if(pageNumbers.includes(currentPage+1)) {
      setCurrentPage(currentPage+1);
    }
  }

  return (
    <div className="career-section">
      <div className="career-img d-flex justify-content-center align-items-center">
        <div>
          <h1 className="mx-3">Join Our Team at TDG Smart</h1>
          <p className="mx-3 pt-2 pb-3">
            Shape the Future of Smart Living with Innovative and Passionate
            Professionals
          </p>
          <button className="btn-caro-1-2">
            EXPLORE <GoArrowRight />
          </button>
        </div>
      </div>
      <div className="filters">
        {options.map((e, i) => (
          <button
            onClick={() => setCareer(e.name)}
            key={i}
            className="career-btn-filter"
            style={{
              background: e.name === career ? "black" : "white",
              color: e.name === career ? "white" : "black",
            }}
          >
            {e.name}
          </button>
        ))}
      </div>
      <div className="job-posts">
        {currentjob
          .filter((e) => {
            if (career === "View All") return e;
            if (e.option === career) {
              return e;
            }
          })
          .map((e, i) => (
            <div className="each-post">
              <div className="left-post">
                <p style={{ color: "rgba(0, 0, 0, 0.5)", fontSize: "0.85rem" }}>
                  {e.option}
                </p>
                <h4 className="mb-4" style={{ marginTop: "-10px" }}>
                  {e.role}
                </h4>
                <div className="jcc d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <GrLocation style={{ fontSize: "23px" }} />
                    <div className="mx-1">{e.location}</div>
                  </div>
                  <div className="d-flex align-items-center mx-3">
                    <MdAccessTime style={{ fontSize: "23px" }} />
                    <div className="mx-1">{e.type}</div>
                  </div>
                </div>
              </div>
              <div className="right-post">
                <button className="career-btn-filter-2">
                  APPLY <GoArrowRight />
                </button>
              </div>
            </div>
          ))}
      </div>
      <nav className="pagination-num d-flex justify-content-center my-3">
        <ul className="pagination">
          {pageNumbers.map((e) => (
            <Link style={{textDecoration:'none', color:'black'}} key={e} className="page-item">
              <a className="p-2 fs-5" style={{textDecoration:'none', color:'black', border:'none', borderBottom:e===currentPage?"3px solid black":"none"}} onClick={()=>setCurrentPage(e)} href="">
                {e}
              </a>
            </Link>
          ))}
          <GoArrowRight className="mt-1 mx-2 fs-5" onClick={handleNext} style={{cursor:'pointer'}}/>
        </ul>
      </nav>
    </div>
  );
};

export default Career;
