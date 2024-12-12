import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaChevronRight,
} from "react-icons/fa";

const Foot = () => {
  return (
    <footer className="footer">
      <div className="footer__row grid md:grid-cols-3 gap-8 px-4 py-10">
        <div className="footer__column w-full px-4 flex flex-col gap-4">
          <img
            src="/assets/footer-logo.png"
            alt="footer-logo"
            className="w-[268px]"
          />
          <p className="text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            ipsam nesciunt quo.
          </p>
          <div className="social-icons flex space-x-4">
            <FaFacebookF className="text-2xl text-gray-700 hover:text-blue-600 cursor-pointer" />
            <FaTwitter className="text-2xl text-gray-700 hover:text-blue-400 cursor-pointer" />
            <FaInstagram className="text-2xl text-gray-700 hover:text-pink-600 cursor-pointer" />
          </div>
        </div>

        <div className="footer__column w-full px-4 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <FaPhone className="text-xl text-gray-700" />
            <span>+91-8853923455</span>
          </div>
          <div className="flex items-center gap-3">
            <FaWhatsapp className="text-xl text-green-500" />
            <span>+91-4567895478</span>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-xl text-gray-700" />
            <span>patientgrid@gmail.com</span>
          </div>
        </div>

        <div className="footer__column w-full px-4 flex flex-col gap-4">
          <p className="text-lg font-semibold">Subscribe Newsletter</p>
          <form>
            <div className="form-group flex w-full lg:w-full bg-white rounded-full">
              <input
                type="email"
                placeholder="Your Email..."
                className="w-full rounded-full focus:outline-none py-3 px-4 text-[#282828]"
              />
              <button className="h-12 w-12 lg:h-10 lg:w-10 bg-blue-600 flex items-center justify-center rounded-full text-white">
                <FaChevronRight />
              </button>
            </div>
          </form>
        </div>
      </div>

      <nav className="py-4 border-t border-b border-gray-200">
        <ul className="flex items-center justify-center gap-10">
          <li>
            <a href="#" className="hover:text-blue-600">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Plans
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              More
            </a>
          </li>
        </ul>
      </nav>

      <p className="copyright py-4 text-center text-gray-600">
        &copy; Copyright 2023, All Rights Reserved.
      </p>
    </footer>
  );
};

export default Foot;
