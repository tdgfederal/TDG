import React, {useState} from "react";
import "../assets/styles/Schedule.css";

const Schedule = () => {
    const [c, setC] = useState(false);
  return (
    <div className="schedule-section" style={{ color: "white" }}>
      <div className="sch row" style={{ margin: "0" }}>
        <div className="left-sch col-lg-6" style={{ position: "relative" }}>
          <div className="top-job-post d-flex align-items-center"></div>
          <h3 className="mb-4" style={{ textTransform: "uppercase" }}>
            SCHEDULE a consultation
          </h3>
          <div className="job-desc my-3">
            <p style={{ fontWeight: "600" }}>
              Welcome to Our Consultation Booking Page!
            </p>
            <p style={{ color: "white" }}>
              At TDG SMART, we understand the importance of personalized advice
              and solutions tailored to your unique needs. Whether you're
              looking for expert guidance, strategic planning, or simply have
              some questions, we're here to help. Booking a consultation with
              our team is quick and easy. Follow the steps below to get started!
            </p>
          </div>
          <div className="job-resp my-2">
            <p style={{ fontWeight: "600" }}>
              Why Book a Consultation with Us?
            </p>
            <ul>
              <li>
                <strong>Expert Advice:</strong> Our experienced professionals
                are ready to provide you with insights and solutions.
              </li>
              <li>
                <strong>Personalized Service:</strong> Every consultation is
                tailored to address your specific needs and goals.
              </li>
              <li>
                <strong>Flexible Scheduling:</strong> Choose a time that works
                best for you with our easy online booking system.
              </li>
              <li>
                <strong>Confidentiality Assured:</strong> Your privacy is our
                priority. All consultations are conducted with the utmost
                discretion.
              </li>
            </ul>
          </div>
          <div className="job-resp my-2">
            <p style={{ fontWeight: "600" }}>How It Works</p>
            <ul>
              <li>
                <strong>Fill Out the Form:</strong> Provide us with some basic
                information about yourself and your needs.
              </li>
              <li>
                <strong>Choose a Time:</strong> Select a date and time that
                suits your schedule.
              </li>
              <li>
                <strong>Confirm Your Booking:</strong> Receive a confirmation
                email with all the details.
              </li>
              <li>
                <strong>Consultation Day:</strong> Meet with our expert at your
                scheduled time, either in-person or virtually.
              </li>
            </ul>
          </div>
          <p>
            Ready to get started? Fill out the form below to book your
            consultation now!
          </p>
        </div>
        <div className="right-sch col-lg-6">
          <form action="" className="form-sch">
            <div className="d-flex" style={{ gap: "10px" }}>
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="number" placeholder="+1 | Enter your mobile number" />
            <br />
            <input type="date" placeholder="Preferred Consultation Date" />
            <br />
            <input type="time" placeholder="Preferred Consultation Time" />
            <br />
            <label className="mt-1" htmlFor="">Mode of Consultation</label>
            <br />
            <div className="d-flex align-items-center mt-2">
              <input
                type="checkbox"
                name="mode"
                style={{ width: "max-content" }}
              />
              <label htmlFor="" className="mx-2">
                In-Person
              </label>
            </div>
            <div className="d-flex align-items-center mt-2 mb-1">
              <input
                type="checkbox"
                name="mode"
                style={{ width: "max-content" }}
              />
              <label htmlFor="" className="mx-2">
                Virtual (via Zoom, Skype, etc.)
              </label>
            </div>
            <textarea
              type="text"
              placeholder="Please provide a brief description of the reason for your consultation"
              style={{width:"100%", height:'70px', padding:'5px 10px', borderRadius:'5px'}}
            />
            <br />
            <textarea
              type="text"
              placeholder="Specific questions or topics you would like to cover"
              style={{width:"100%", height:'50px', padding:'5px 10px', borderRadius:'5px'}}
            />
            <br />
            <select name="about" onChange={(e)=>setC(true)} style={{color:c?"black":"grey"}}>
              <option value="" disabled selected>
                How did you hear about us?
              </option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
            <br />
            <textarea
              type="text"
              placeholder="Any additional comments or requirements"
              style={{width:"100%", height:'50px', padding:'5px 10px', borderRadius:'5px'}}
            />
            <br />
            <div className="d-flex align-items-center mt-2">
              <input type="checkbox" style={{ width: "max-content" }} />
              <label htmlFor="" className="mx-2">
                I agree to the Terms and Conditions and Privacy Policy.
              </label>
            </div>
            <br />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
