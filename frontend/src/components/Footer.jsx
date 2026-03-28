import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div>
      <div>
        {/*--------------Left Side--------------*/}
        <div>
          <img src={assets.logo} alt="" />
          <p>
            With a strong foundation in trusted healthcare practices, we have
            evolved to make doctor appointments simple, fast, and accessible.
            Our platform connects patients with experienced doctors, ensuring
            quality care while embracing modern convenience
          </p>
        </div>
        {/*--------------Center Side--------------*/}
        <div>
          <p>Company</p>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/*--------------Right Side--------------*/}
        <div>
          <p>Get in Touch</p>
          <ul>
            <li>+94-77-111-2224</li>
            <li>prescripto@gmail.com</li>
          </ul>
        </div>
      </div>
      {/*--------------Copy Right--------------*/}
      <div>
        <hr />
        <p>
          © 2026 Prescripto. All rights reserved. Your trusted partner in
          healthcare.
        </p>
      </div>
    </div>
  );
};

export default Footer;
