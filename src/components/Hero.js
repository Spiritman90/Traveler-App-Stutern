import React from "react";
import HeroImage from "../assets/newhero.png";

function Hero() {
  return (
    <div
      className='hero'
      style={{
        backgroundImage: `url(${HeroImage})`,
      }}
    >
      <div className='hero__container'>
        <h1 className='hero__header'>
          Discover the <span>world</span>
          <br /> differently
        </h1>

        <p className='hero__text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          justo, justo, mauris neque. Mattis ut ornare senectus consectetur.
          Lectus blandit sed nec varius scelerisque in. In et libero bibendum
          amet lobortis.
        </p>
      </div>
      <div className='hero__button'>
        <button className='hero__button--colored'>Plan a Trip</button>
        <button className='hero__button--transparent'>Preview</button>
      </div>

      <div className='hero__trips'>
        <div className='hero__baecation'>
          <h2>Baecation </h2>
          <p>5-star hotels, 2 persons, 3 nights</p>
          <small>$250</small>
        </div>
        <div className='hero__baecation'>
          <h2>Tour for Travellers </h2>
          <p>5-star hotels, 2 persons, 3 nights</p>
          <small>$350</small>
        </div>
        <div className='hero__baecation'>
          <h2>Weekend Getaway</h2>
          <p>5-star hotels, 2 persons, 3 nights</p>
          <small>$150</small>
        </div>
      </div>
    </div>
  );
}

export default Hero;
