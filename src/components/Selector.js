import React from "react";
import img1 from "../../src/assets/about-1.png";

const Selector = () => {
  return (
    <div className="w-full min-h-screen">
      {/* <div> */}
      <section class="section-about">
        <div class="about-container">
          <div class="about-row">
            <figure class="about-image">
              <img src={img1} alt="about-1" />
            </figure>
            <div class="about-content">
              <h3>Bring new business in by getting more online reviews.</h3>
              <p>94% Use review to choose new doctor.</p>
            </div>
          </div>

          <div class="about-row">
            <div class="about-content">
              <h3>Save time with collaborative tools and automations.</h3>
              <p>15+ Staff hours saved per week.</p>
            </div>
            <figure class="about-image">
              <img src={img1} alt="about-2" />
            </figure>
          </div>

          <div class="about-row">
            <figure class="about-image">
              <img src={img1} alt="about-3" />
            </figure>
            <div class="about-content">
              <h3>Improve patient experience engaging the way they want.</h3>
              <p>90% People prefer texts to phone calls.</p>
            </div>
          </div>
        </div>
      </section>
      {/* </div> */}
    </div>
  );
};

export default Selector;
