import React from "react";
import hotel1 from "../assets/hotel1.png";
import hotel2 from "../assets/hotel2.png";
import hotel3 from "../assets/hotel3.png";
import arrow from "../assets/arrow.png";

function Popular() {
  return (
    <>
      <div className='popular__container'>
        <h2 className='popular__heading'>
          Popular Hotels{" "}
          <span className='arrow'>
            <img src={arrow} alt='of' />
          </span>
        </h2>

        <div className='popular__hotels'>
          <div className='popular__hotels--photo'>
            <img src={hotel1} alt='hotel' />
          </div>
          <div className='popular__hotels--photo'>
            <img src={hotel2} alt='hotel' />
          </div>
          <div className='popular__hotels--photo'>
            <img src={hotel3} alt='hotel' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Popular;
