import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    img: "",
    title: "",
    date: "",
    author: "",
    description: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleImage = (e) => {
    setFormData({
      ...formData,
      img: e.target.files[0],
    });
  };
  console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("img", formData.img, formData.img.name);
    data.append("title", formData.title);
    data.append("date", formData.date);
    data.append("author", formData.author);
    data.append("description", formData.description);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/createBlog",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      if (response.data.success) {
        nav("/blog");
      } else {
        alert("Blog creation failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="right-sch col-lg-6 mx-auto">
        <h2 style={{ textAlign: "center", marginBottom: "-30px" }}>
          CREATE BLOG
        </h2>
        <form action="" className="form-sch" onSubmit={handleSubmit}>
          <input type="file" name="img" onChange={(e) => handleImage(e)} />
          <br />
          <input
            type="text"
            name="title"
            placeholder="Enter the title"
            onChange={(e) => handleChange(e)}
            value={formData.title}
          />
          <br />
          <input
            type="date"
            name="date"
            placeholder="Preferred Consultation Date"
            onChange={(e) => handleChange(e)}
            value={formData.date}
          />
          <br />
          <input
            type="text"
            name="author"
            placeholder="Author"
            onChange={(e) => handleChange(e)}
            value={formData.author}
          />
          <br />
          <textarea
            type="text"
            name="description"
            placeholder="Please provide a brief description"
            style={{
              width: "100%",
              height: "200px",
              padding: "5px 10px",
              borderRadius: "5px",
            }}
            value={formData.description}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
