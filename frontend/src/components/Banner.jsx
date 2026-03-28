import React from 'react';
import { assets } from '../assets/assets';

const Banner = () => {
  return (
    <div>
      {/*--------------Left Side--------------*/}
      <div>
        <div>
          <p>Book Appointment With </p>
          <p>100+ Trusted Doctors</p>
        </div>
        <button>Create Account</button>
      </div>
      {/*--------------Right Side--------------*/}
      <div>
        <img src={assets.appointment_img} alt="" />
      </div>
    </div>
  );
};

export default Banner;
