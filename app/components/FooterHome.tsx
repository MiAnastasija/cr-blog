import React from "react";
import Image from "next/image";
import "../globals.css";
import glogo from "../images/crlogo.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export const FooterHome: React.FC = () => {
  return (
    <div className="bg-black">
      <div className="max-w-sirina mx-auto bg-black text-white py-8 px-4">
        <div className="hidden md:block">
          <div className="lg:flex justify-between items-center border-b-[1px] border-gray-400  pb-6 mb-6 lg:mx-20">
            <div className="text-center lg:text-left lg:flex-col lg:items-center lg:space-x-6">
              <Link href={"/"}>
                <Image
                  src={glogo}
                  alt="CapitalRevo Logo"
                  className="mx-auto lg:mx-10 w-full max-w-xs"
                />
              </Link>
              <p className="text-sm mt-4 lg:mt-0 lg:mx-10">
                Empower Your Trading Journey with CapitalRevo
              </p>
              <div className="social-icons flex justify-center lg:justify-start gap-4 mt-4 lg:mt-20 ">
                <a
                  className="hover:bg-tirkizna p-2 rounded-full transition duration-300 "
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-3xl" />
                </a>
                <a
                  className="hover:bg-tirkizna p-2 rounded-full transition duration-300"
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-3xl" />
                </a>
                <a
                  className="hover:bg-tirkizna p-2 rounded-full transition duration-300"
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-3xl" />
                </a>
              </div>
            </div>
            <div className=" lg:text-left  flex  justify-center space-x-12  space-y-6 lg:space-y-0 lg:space-x-12">
              <ul className="space-y-2 text-sm">
                <li className="font-bold mb-2 ">Quick Links</li>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="#Accounts">Accounts</Link>
                </li>
                <li>
                  <Link href="#TradingPlatform">Trading Platform</Link>
                </li>
                <li>
                  <Link href="#Education">Education</Link>
                </li>
                <li>
                  <Link href="#News">News</Link>
                </li>
              </ul>
              <ul className="space-y-2 text-sm">
                <li className="font-bold mb-2">Company</li>
                <li>
                  <Link href="#AboutUs">About Us</Link>
                </li>
                <li>
                  <Link href="#Contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-center lg:text-left lg:mx-20">
              © 2024, CapitalRevo
            </p>
            <div className="flex space-x-4 text-sm md:pr-20">
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms of Service</Link>
              <Link href="/">Risk Disclaimer</Link>
            </div>
          </div>
        </div>

        <div className="block md:hidden">
          <div className="  border-b-[1px] border-gray-400  pb-6 mb-6 lg:mx-20">
            <div className=" lg:text-left lg:flex-col lg:items-center lg:space-x-6">
              <Link href={"/"}>
                <Image src={glogo} alt="CapitalRevo Logo" className="" />
              </Link>
              <p className="text-sm mt-4 lg:mt-0 lg:mx-10">
                Empower Your Trading Journey with CapitalRevo
              </p>
              <div className="text-left  mt-8 mb-8 flex  ">
                <ul className="space-y-2 text-sm">
                  <li className="font-bold mb-2 ">Quick Links</li>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="#Accounts">Accounts</Link>
                  </li>
                  <li>
                    <Link href="#TradingPlatform">Trading Platform</Link>
                  </li>
                  <li>
                    <Link href="#Education">Education</Link>
                  </li>
                  <li>
                    <Link href="#News">News</Link>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li className="font-bold mb-2">Company</li>
                  <li>
                    <Link href="#AboutUs">About Us</Link>
                  </li>
                  <li>
                    <Link href="#ContactUs">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="social-icons flex lg:justify-start gap-4 mt-4 lg:mt-20 ">
            <a
              className="hover:bg-tirkizna p-2 rounded-full transition duration-300 "
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              className="hover:bg-tirkizna p-2 rounded-full transition duration-300"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              className="hover:bg-tirkizna p-2 rounded-full transition duration-300"
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-2xl" />
            </a>
          </div>
          <div className="flex flex-col lg:flex-row  space-y-4 lg:space-y-0">
            <div className="flex space-x-4 text-[13px] mt-5">
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms of Service</Link>
              <Link href="/">Risk Disclaimer</Link>
            </div>
          </div>
          <p className="text-left mt-10 lg:text-left lg:mx-20">
            © 2024, CapitalRevo
          </p>
        </div>
      </div>
    </div>
  );
};
