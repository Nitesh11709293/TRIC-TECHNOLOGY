import React from "react";
import "./style.css";
export default function Footer() {
  return (
    <div>
      {/* header 7 newletter */}
      <div className="footer">
        <div className="container footer-text">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <h3>About Us</h3>
              <p>Our core values of innovation, excellence, and integrity drive everything we do. We are proud to have helped many businesses achieve their goals through our custom software solutions. Contact us today to learn how we can help your business reach new heights with innovative technology.
              </p>
            </div>

            <div className="col-lg-2 col-md-6 col-12">
              <h3>Links</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/aboutUs">About Us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/projects">Projects</a></li>

              </ul>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <h3>Address</h3>
              <ul>
                <h4>Registered Office</h4>
                <li>Ostra Esolanaden 7C, Almhult-34331, Sweden</li>
                <li>+46734896102</li>
                <li>info@trictechnology.com</li>
              </ul>
              <ul>
                <h4>India Office</h4>
                <li>1367 Sector-2, Ballabgarh</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-end">
        <h6 className="text-center">@Copyright TricTechnology. All Rights Reserved</h6>
      </div>

    </div>
  );
}
