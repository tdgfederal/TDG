import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import Blog from "./pages/Blog";
import Career from "./pages/Career";
import JobPost from "./pages/JobPost";
import Schedule from "./pages/Schedule";
import Control from "./pages/Home_Control/Control";
import RTI from "./pages/Home_Control/RTI";
import URC from "./pages/Home_Control/URC";
import Product from "./pages/Entertainment_&_Lifestyle/Product";
import Golf from "./pages/Entertainment_&_Lifestyle/Golf";
import HomeTheatre from "./pages/Entertainment_&_Lifestyle/HomeTheatre";
import Multi from "./pages/Entertainment_&_Lifestyle/Multi";
import Gaming from "./pages/Entertainment_&_Lifestyle/Gaming";
import Speakers from "./pages/Entertainment_&_Lifestyle/Speakers";
import Relaxing from "./pages/Entertainment_&_Lifestyle/Relaxing";
import Climate from "./pages/Comfort/Climate";
import Motorization from "./pages/Comfort/Motorization";
import Cameras from "./pages/Security/Cameras";
import Monitoring from "./pages/Security/Monitoring";
import Entry from "./pages/Security/Entry";
import Smart from "./pages/Lighting/Smart";
import Fixtures from "./pages/Lighting/Fixtures";
import Keypads from "./pages/Lighting/Keypads";
import Products from "./pages/Products";
import CreateBlog from "./pages/CreateBlog";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App" id="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<Career />} />
        <Route path="/job" element={<JobPost />} />
        <Route path="/consultation" element={<Schedule />} />
        <Route path="/product/Entertainment_&_Lifestyle" element={<Product />} />
        <Route path="/product/Lighting" element={<Products />} />
        <Route path="/product/home_control/control4" element={<Control />} />
        <Route path="/product/home_control/RTI" element={<RTI />} />
        <Route path="/product/home_control/URC" element={<URC />} />
        <Route path="/product/Entertainment_&_Lifestyle/home-theatre" element={<HomeTheatre />} />
        <Route path="/product/Entertainment_&_Lifestyle/multi-and-whole-home-audio" element={<Multi />} />
        <Route path="/product/Entertainment_&_Lifestyle/golf-simulation" element={<Golf />} />
        <Route path="/product/Entertainment_&_Lifestyle/gaming" element={<Gaming />} />
        <Route path="/product/Entertainment_&_Lifestyle/speakers" element={<Speakers />} />
        <Route path="/product/Entertainment_&_Lifestyle/relaxing-outdoors" element={<Relaxing />} />
        <Route path="/product/comfort/climate-control" element={<Climate />} />
        <Route path="/product/comfort/motorization" element={<Motorization />} />
        <Route path="/product/Secuity_&_Surveillance/cameras" element={<Cameras />} />
        <Route path="/product/Secuity_&_Surveillance/monitoring" element={<Monitoring />} />
        <Route path="/product/Secuity_&_Surveillance/entry-services" element={<Entry />} />
        <Route path="/product/Lighting/smart-lighting" element={<Smart />} />
        <Route path="/product/Lighting/fixtures" element={<Fixtures />} />
        <Route path="/product/Lighting/keypads" element={<Keypads />} />
        <Route path="/create" element={localStorage.getItem('loggedIn')?<CreateBlog />:<Navigate to='/login'/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
