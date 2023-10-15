import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";
import { MdEmail, MdLocationOn } from "react-icons/md";

function Footer() {
  return (
    <div className="footer-container mt-10 md:mt-16 lg:mt-28 py-16 md:py-28 grid md:grid-cols-2 gap-6 md:gap-14 justify-center md:justify-between items-center px-4 lg:px-10 xl:px-60 2xl:px-72">
      <div className="left">
        <div className="logo">
          <img
            className="w-16"
            src={"https://i.ibb.co/Btsrkg5/logo1.png"}
            alt="logo"
          />
          <h1 className="text-3xl md:text-5xl font-normal font-rancho text-[#331A15]">
            Espresso Emporium
          </h1>
        </div>
        <p className="text-xl text-[#1B1A1A] my-6">
          Always ready to be your friend. Come & Contact with us to share your
          memorable moments, to share with your best companion.
        </p>
        <div className="social-icons text-4xl flex gap-6 items-center">
          <FaFacebook className="text-4xl cursor-pointer text-[#331A15] hover:text-blue-500" />
          <FaTwitter className="text-4xl cursor-pointer text-[#331A15] hover:text-blue-400" />
          <FaInstagram className="text-4xl cursor-pointer text-[#331A15] hover:text-orange-600" />
          <FaLinkedin className="text-4xl cursor-pointer text-[#331A15] hover:text-blue-600" />
        </div>

        <div className="getInTouch">
          <h2 className="text-3xl md:text-5xl font-normal font-rancho text-[#331A15] py-8">
            Get in Touch
          </h2>
          <div className="mobile flex gap-6 items-center text-xl text-[#331A15] py-1">
            <FaPhoneAlt />
            <p className="text-xl text-[#331A15]">+88 01533 333 333</p>
          </div>
          <div className="mail flex gap-6 items-center text-xl text-[#331A15] py-1">
            <MdEmail />
            <p className="text-xl text-[#331A15]">info@gmail.com</p>
          </div>
          <div className="location flex gap-6 items-center text-xl text-[#331A15] py-1">
            <MdLocationOn />
            <p className="text-xl text-[#331A15]">
              72, Wall street, King Road, Dhaka
            </p>
          </div>
        </div>
      </div>
      <div className="right">
        <h2 className="text-3xl md:text-5xl font-normal font-rancho text-[#331A15] py-8">
          Connect with Us
        </h2>
        <input
          type="text"
          name="name"
          className="w-full py-4 px-3 placeholder:text-[#1b1a1a99] rounded my-2"
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          className="w-full py-4 px-3 placeholder:text-[#1b1a1a99] rounded my-2"
          placeholder="Email"
        />
        <textarea
          className="w-full py-4 px-3 placeholder:text-[#1b1a1a99] rounded my-2"
          name="message"
          cols="20"
          rows="4"
          placeholder="Message"
        ></textarea>
      </div>
    </div>
  );
}

export default Footer;
