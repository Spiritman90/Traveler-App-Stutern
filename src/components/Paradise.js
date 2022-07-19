import React from "react";
import paradiseImage from "../assets/tree_and_canoe.png";
import Calender from "./customicons/Calender";
import Family from "./customicons/Family";
import Location from "./customicons/Location";
import Vector from "../assets/Vector.svg";

function Paradise() {
  return (
    <>
      <div className='paradise'>
        <div className='paradise__find'>
          <div className='paradise__find--heading'>
            {" "}
            <h3>Find Your Stay</h3>
          </div>

          <div className='paradise__find--tropicana'>
            <div className='paradise__find--icon'>
              {" "}
              <Location />
            </div>

            <p>La Campagne Tropicana</p>
          </div>
          <div className='paradise__find--tropicana'>
            <div className='paradise__find--icon'>
              {" "}
              <Calender />
            </div>

            <p>Check-in</p>
          </div>
          <div className='paradise__find--tropicana'>
            <div className='paradise__find--icon'>
              {" "}
              <Family />
            </div>

            <p>1 Adult, 4 Kids</p>
          </div>
          <div className='paradise__find--tropicana'>
            <img src={Vector} alt='svg' className='icon' />
          </div>
        </div>

        <div className='paradise__find--photo'>
          <div className='paradise__find--text'>
            <h2 className='paradise__find--heading2'>
              Paradise <br /> on Earth
            </h2>
            <button className='paradise__find--button'>Plan a Trip</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Paradise;
