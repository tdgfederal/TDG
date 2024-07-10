import React, { useState } from "react";
import "../assets/styles/Contact.css";
import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/blog3.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    comment: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://tdg-backend-n1sm.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert("Failed! Try again.")
    }
  }
  return (
    <div className="contact-section">
      <div className="about-black">CONTACT</div>
      <div className="text-4">
        <div className="row my-5" style={{ margin: "0" }}>
          <div className="col-lg-4 col-md-6 px-5 mx-auto">
            <h5>ATLANTA</h5>
            <p style={{ color: "#A7A9AB" }}>
              123 Maple Street Springfield, IL 62701 United States
            </p>
          </div>
          <div className="col-lg-4 col-md-6 px-5 mx-auto">
            <h5>ATLANTA</h5>
            <p style={{ color: "#A7A9AB" }}>
              123 Maple Street Springfield, IL 62701 United States
            </p>
          </div>
          <div className="col-lg-4 col-md-6 px-5 mx-auto">
            <h5>ATLANTA</h5>
            <p style={{ color: "#A7A9AB" }}>
              123 Maple Street Springfield, IL 62701 United States
            </p>
          </div>
          <div className="col-lg-4 col-md-6 px-5 mx-auto">
            <h5>SAN FRANCISCO</h5>
            <p style={{ color: "#A7A9AB" }}>
              123 Maple Street Springfield, IL 62701 United States
            </p>
          </div>
          <div className="col-lg-4 col-md-6 px-5 mx-auto">
            <h5>SAN FRANCISCO</h5>
            <p style={{ color: "#A7A9AB" }}>
              123 Maple Street Springfield, IL 62701 United States
            </p>
          </div>
          <div className="col-lg-4 col-md-6 px-5 mx-auto">
            <h5>SAN FRANCISCO</h5>
            <p style={{ color: "#A7A9AB" }}>
              123 Maple Street Springfield, IL 62701 United States
            </p>
          </div>
        </div>
      </div>
      <div className="map-form" style={{ marginTop: "-40px" }}>
        <iframe
          className="embeded-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.8270032758523!2d88.39659447475643!3d22.548152333866998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02769db9e49f61%3A0xa2117593c10c8066!2sJW%20Marriott%20Hotel%20Kolkata!5e0!3m2!1sen!2sin!4v1719893410545!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div>
          <div className="about-signup">
            <br />
            <br />
            <form className="form-about-su mt-3" onSubmit={handleSubmit}>
              <div className="flname">
                <input
                  className="flname-text"
                  type="text"
                  placeholder="First Name"
                  style={{ border: "1px solid #C8C2C2" }}
                  name="fname"
                  onChange={(e)=>handleChange(e)}
                />
                <input
                  className="flname-text"
                  type="text"
                  placeholder="Last Name"
                  style={{ border: "1px solid #C8C2C2" }}
                  name="lname"
                  onChange={(e)=>handleChange(e)}
                />
              </div>
              <input
                className="flname-text my-4"
                style={{ width: "100%", border: "1px solid #C8C2C2" }}
                type="email"
                placeholder="Email Address"
                name="email"
                onChange={(e)=>handleChange(e)}
              />
              <textarea
                className="flname-text mt-1 mb-3 ta-text"
                style={{ width: "100%", border: "1px solid #C8C2C2" }}
                type="text"
                placeholder="Comment"
                name="comment"
                onChange={(e)=>handleChange(e)}
              />
              <br />
              <button className="btn-send-ab-su" style={{ width: "100%" }}>
                Send
              </button>
            </form>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className="blogs">
        <h4 className="mx-3" style={{ textAlign: "center", color: "#EABC7B" }}>
          Our latest news
        </h4>
        <h3 className="mx-3" style={{ textAlign: "center" }}>
          Latest articles directly from blog
        </h3>
        <br />
        <div className="blogs-contact">
          <div
            className="card mx-auto"
            style={{ width: "23rem", borderRadius: "0", border: "none" }}
          >
            <img
              src={blog1}
              className="card-img-top"
              style={{ borderRadius: "0" }}
              alt="..."
            />
            <div className="card-body" style={{ padding: "20px 0" }}>
              <h5 className="card-title">
                Product guides - How much a wall curtain cos...
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
              <p
                className="card-text mt-2"
                style={{ fontSize: "0.85rem", color: "rgba(0, 0, 0, 0.65)" }}
              >
                Curtain prices vary based on material, size, design, brand, and
                retailer. Luxurious materials like silk or velvet are pricier,
                while standard options like polyest...
              </p>
            </div>
          </div>
          <div
            className="card mx-auto"
            style={{ width: "23rem", borderRadius: "0", border: "none" }}
          >
            <img
              src={blog1}
              className="card-img-top"
              style={{ borderRadius: "0" }}
              alt="..."
            />
            <div className="card-body" style={{ padding: "20px 0" }}>
              <h5 className="card-title">
                Product guides - How much a wall curtain cos...
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
              <p
                className="card-text mt-2"
                style={{ fontSize: "0.85rem", color: "rgba(0, 0, 0, 0.65)" }}
              >
                Curtain prices vary based on material, size, design, brand, and
                retailer. Luxurious materials like silk or velvet are pricier,
                while standard options like polyest...
              </p>
            </div>
          </div>
          <div
            className="card mx-auto"
            style={{ width: "23rem", borderRadius: "0", border: "none" }}
          >
            <img
              src={blog1}
              className="card-img-top"
              style={{ borderRadius: "0" }}
              alt="..."
            />
            <div className="card-body" style={{ padding: "20px 0" }}>
              <h5 className="card-title">
                Product guides - How much a wall curtain cos...
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
              <p
                className="card-text mt-2"
                style={{ fontSize: "0.85rem", color: "rgba(0, 0, 0, 0.65)" }}
              >
                Curtain prices vary based on material, size, design, brand, and
                retailer. Luxurious materials like silk or velvet are pricier,
                while standard options like polyest...
              </p>
            </div>
          </div>
          <div
            className="card mx-auto"
            style={{ width: "23rem", borderRadius: "0", border: "none" }}
          >
            <img
              src={blog1}
              className="card-img-top"
              style={{ borderRadius: "0" }}
              alt="..."
            />
            <div className="card-body" style={{ padding: "20px 0" }}>
              <h5 className="card-title">
                Product guides - How much a wall curtain cos...
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
              <p
                className="card-text mt-2"
                style={{ fontSize: "0.85rem", color: "rgba(0, 0, 0, 0.65)" }}
              >
                Curtain prices vary based on material, size, design, brand, and
                retailer. Luxurious materials like silk or velvet are pricier,
                while standard options like polyest...
              </p>
            </div>
          </div>
          <div
            className="card mx-auto"
            style={{ width: "23rem", borderRadius: "0", border: "none" }}
          >
            <img
              src={blog1}
              className="card-img-top"
              style={{ borderRadius: "0" }}
              alt="..."
            />
            <div className="card-body" style={{ padding: "20px 0" }}>
              <h5 className="card-title">
                Product guides - How much a wall curtain cos...
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
              <p
                className="card-text mt-2"
                style={{ fontSize: "0.85rem", color: "rgba(0, 0, 0, 0.65)" }}
              >
                Curtain prices vary based on material, size, design, brand, and
                retailer. Luxurious materials like silk or velvet are pricier,
                while standard options like polyest...
              </p>
            </div>
          </div>
          <div
            className="card mx-auto"
            style={{ width: "23rem", borderRadius: "0", border: "none" }}
          >
            <img
              src={blog1}
              className="card-img-top"
              style={{ borderRadius: "0" }}
              alt="..."
            />
            <div className="card-body" style={{ padding: "20px 0" }}>
              <h5 className="card-title">
                Product guides - How much a wall curtain cos...
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
              <p
                className="card-text mt-2"
                style={{ fontSize: "0.85rem", color: "rgba(0, 0, 0, 0.65)" }}
              >
                Curtain prices vary based on material, size, design, brand, and
                retailer. Luxurious materials like silk or velvet are pricier,
                while standard options like polyest...
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Contact;
