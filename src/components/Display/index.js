import React from "react";
import "./style.css";
import { slideshowText } from "./data";
import homeLogo from "../../assets/Images/58975.jpg";

function Display({ }) {
  return (
    <section className="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="slideshow-text">
              <h6></h6>
              <h3>{slideshowText.heading}</h3>
              <h5>{slideshowText.subheadering2}</h5>
              <p>{slideshowText.subheading}</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <img style={{ border: "none" }}
              src={homeLogo}
              className="img-fluid mt-5 mb-5 home_img_right"
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Display;
