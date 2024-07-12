import React, { useState, useEffect } from "react";
import "../assets/styles/Blog.css";
import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/blog3.png";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import axios from "axios";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  const posts = [
    {
      img: blog1,
      topic: "Product guides - How much a wall curtain cos...",
      date: "APRIL 5,2023",
      location: "Apollo Theme",
      para: "Curtain prices vary based on material, size, design, brand, and retailer. Luxurious materials like silk or velvet are pricier, while standard options like polyest...",
    },
    {
      img: blog1,
      topic: "Product guides - How much a wall curtain cos...",
      date: "APRIL 5,2023",
      location: "Apollo Theme",
      para: "Curtain prices vary based on material, size, design, brand, and retailer. Luxurious materials like silk or velvet are pricier, while standard options like polyest...",
    },
    {
      img: blog1,
      topic: "Product guides - How much a wall curtain cos...",
      date: "APRIL 5,2023",
      location: "Apollo Theme",
      para: "Curtain prices vary based on material, size, design, brand, and retailer. Luxurious materials like silk or velvet are pricier, while standard options like polyest...",
    },
    {
      img: blog1,
      topic: "Product guides - How much a wall curtain cos...",
      date: "APRIL 5,2023",
      location: "Apollo Theme",
      para: "Curtain prices vary based on material, size, design, brand, and retailer. Luxurious materials like silk or velvet are pricier, while standard options like polyest...",
    },
    {
      img: blog1,
      topic: "Product guides - How much a wall curtain cos...",
      date: "APRIL 5,2023",
      location: "Apollo Theme",
      para: "Curtain prices vary based on material, size, design, brand, and retailer. Luxurious materials like silk or velvet are pricier, while standard options like polyest...",
    },
    {
      img: blog1,
      topic: "Product guides - How much a wall curtain cos...",
      date: "APRIL 5,2023",
      location: "Apollo Theme",
      para: "Curtain prices vary based on material, size, design, brand, and retailer. Luxurious materials like silk or velvet are pricier, while standard options like polyest...",
    },
    {
      img: blog1,
      topic: "Product guides - How much a wall curtain cos...",
      date: "APRIL 5,2023",
      location: "Apollo Theme",
      para: "Curtain prices vary based on material, size, design, brand, and retailer. Luxurious materials like silk or velvet are pricier, while standard options like polyest...",
    },
    {
      img: blog2,
      topic: "Product guides - How much a wall curtain cos...",
      date: "APRIL 5,2023",
      location: "Apollo Theme",
      para: "Curtain prices vary based on material, size, design, brand, and retailer. Luxurious materials like silk or velvet are pricier, while standard options like polyest...",
    },
    {
      img: blog3,
      topic: "Product guides - How much a wall curtain cos...",
      date: "APRIL 5,2023",
      location: "Apollo Theme",
      para: "Curtain prices vary based on material, size, design, brand, and retailer. Luxurious materials like silk or velvet are pricier, while standard options like polyest...",
    },
    {
      img: blog1,
      topic: "Product guides - How much a wall curtain cos...",
      date: "APRIL 5,2023",
      location: "Apollo Theme",
      para: "Curtain prices vary based on material, size, design, brand, and retailer. Luxurious materials like silk or velvet are pricier, while standard options like polyest...",
    },
    {
      img: blog2,
      topic: "Product guides - How much a wall curtain cos...",
      date: "APRIL 5,2023",
      location: "Apollo Theme",
      para: "Curtain prices vary based on material, size, design, brand, and retailer. Luxurious materials like silk or velvet are pricier, while standard options like polyest...",
    },
    {
      img: blog3,
      topic: "Product guides - How much a wall curtain cos...",
      date: "APRIL 5,2023",
      location: "Apollo Theme",
      para: "Curtain prices vary based on material, size, design, brand, and retailer. Luxurious materials like silk or velvet are pricier, while standard options like polyest...",
    },
  ];
  const [postPerPage, setPostPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastPost = postPerPage * currentPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = blog?blog.slice(indexOfFirstPost, indexOfLastPost):null;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(blog.length / postPerPage); i++) {
    pageNumbers.push(i);
  }
  const handleNext = () => {
    if(pageNumbers.includes(currentPage+1)) {
      setCurrentPage(currentPage+1);
    }
  }
  useEffect(() => {
    axios
      .get("https://tdg-backend-n1sm.onrender.com/getBlogs")
      .then((blogs) => setBlog(blogs.data))
      .catch((error) => console.log(error));
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

    const [month, day, year] = formattedDate.split(' ');
    return `${month.toUpperCase()} ${day.replace(',', '')}, ${year}`;
  };

  return (
    <div>
      <div className="about-black">BLOGS</div>
      <br />
      <br />
      <div className="blogs-contact">
        {currentPosts.map((e, i) => (
          <div
            key={i}
            className="card mx-auto"
            style={{ width: "23rem", borderRadius: "0", border: "none" }}
          >
            <img
              src={`https://tdg-backend-n1sm.onrender.com/public/images/`+e.img}
              className="card-img-top"
              height={220}
              style={{ borderRadius: "0" }}
              alt="..."
            />
            <div className="card-body" style={{ padding: "20px 0" }}>
              <h5 className="card-title">{e.title}</h5>
              <span
                style={{
                  color: "#7C7E7C",
                  textTransform: "uppercase",
                  fontSize: "0.8rem",
                }}
              >
                {formatDate(e.date)}
                <span
                  className="mx-2"
                  style={{ color: "#282866", textTransform: "capitalize" }}
                >
                  {e.author}
                </span>
              </span>
              <p
                className="card-text mt-2"
                style={{ fontSize: "0.85rem", color: "rgba(0, 0, 0, 0.65)" }}
              >
                {e.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <nav className="pagination-num d-flex justify-content-center mt-3">
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
      <br />
      <br />
    </div>
  );
};

export default Blog;
