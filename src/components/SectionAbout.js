import React from "react";
import img1 from "../assets/about-1.png";
import img2 from "../assets/about-2.png";
import img3 from "../assets/about-3.png";

const SectionAbout = () => {
  return (
    <section className="section-about">
      <div className="about-container">
        <div className="about-row">
          <figure className="about-image">
            <img src={img1} alt="about-1" />
          </figure>
          <div className="about-content">
            <h3>Bring new business in by getting more online reviews.</h3>
            <p>94% Use review to choose new doctor.</p>
          </div>
        </div>

        <div className="about-row">
          <div className="about-content">
            <h3>Save time with collaborative tools and automations.</h3>
            <p>15+ Staff hours saved per week.</p>
          </div>
          <figure className="about-image">
            <img src={img2} alt="about-2" />
          </figure>
        </div>

        <div className="about-row">
          <figure className="about-image">
            <img src={img3} alt="about-3" />
          </figure>
          <div className="about-content">
            <h3>Improve patient experience engaging the way they want.</h3>
            <p>90% People prefer texts to phone calls.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
