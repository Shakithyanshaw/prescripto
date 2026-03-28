import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/*--------------Left Side--------------*/}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            With a strong foundation in trusted healthcare practices, we have
            evolved to make doctor appointments simple, fast, and accessible.
            Our platform connects patients with experienced doctors, ensuring
            quality care while embracing modern convenience
          </p>
        </div>
        {/*--------------Center Side--------------*/}
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/*--------------Right Side--------------*/}
        <div>
          <p className="text-xl font-medium mb-5">Get in Touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+94-77-111-2224</li>
            <li>prescripto@gmail.com</li>
          </ul>
        </div>
      </div>
      {/*--------------Copy Right--------------*/}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          © 2026 Prescripto. All rights reserved. Your trusted partner in
          healthcare.
        </p>
      </div>
    </div>
  );
};

export default Footer;
