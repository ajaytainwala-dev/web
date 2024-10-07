import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import "./Foot.css"

const Footer = () => {
  const imageStyle = {
    borderRadius: "10px",
  };
  return (
    <>
      {/* <div
        class=" inset-0  bg-white [background:radial-gradient(125%_125%_at_50%_100%,#fff_40%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_100%,#000_40%,#63e_100%)]"
></div> */}
      <footer
        // className="p-4 bg-white sm:p-6 dark:bg-gray-800"
        className="p-4 inset-0  bg-slate-200 dark:bg-gray-800 [background:radial-gradient(125%_125%_at_50%_100%,#e2e8f0_40%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_100%,#000_40%,#63e_100%)]"
        style={{ position: "relative", bottom: 0, width: "100%" }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center">
                <Image
                  className="mr-3 "
                  width={50}
                  height={50}
                  //   sizes="100vw"
                  style={{ ...imageStyle }}
                  src="/Logo/GACS_Logo.webp"
                  alt="Personalised Learning image"
                  loading="lazy"
                />

                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-wrap footer-heading">
                  Gyan Academy of Commerce & Science
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <Link href="/" className="hover:underline">
                      Home
                    </Link>
                  </li>

                  <li className="mb-4">
                    <Link href="/About" className="hover:underline">
                      About
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/Students" className="hover:underline">
                      Students Corner
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/Courses" className="hover:underline">
                      Courses offered
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/Register" className="hover:underline">
                      Register
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">
                  About
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <Link href="/Gallery" className="hover:underline">
                      Gallery
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/Reviews" className="hover:underline">
                      Reviews
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/FAQs" className="hover:underline">
                      FAQs
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/Contact" className="hover:underline">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">
                  Students Corner
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <Link href="/Updates" className="hover:underline">
                      Updates
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/Links" className="hover:underline">
                      Useful Links
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/Calendar" className="hover:underline">
                      Academic Calendar
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" className="hover:underline">
                Gyan Academy of Commerce & Science{" "}
              </Link>
              . || All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <Link
                href="https://www.instagram.com/gyan_academy_cs/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <FaInstagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.facebook.com/gyanacademyacs"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <FaFacebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://wa.me/918088263376?text=Hi%20GACS%20I%20want%20to%20learn!"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <FaWhatsapp className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="flex  items-center mt-4 space-x-4 justify-between">
            <Link href="/Privacy" className=" text-gray-500 hover:underline">
              Privacy Policy
            </Link>

            <Link href="/Terms" className=" text-gray-500 hover:underline">
              Terms &amp; Conditions
            </Link>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between text-center m-auto">
            <span className="text-sm text-gray-800 text-center dark:text-gray-400">
              Designed & Developed by{" "}
              <Link
                href="https://ajaytainwala-dev.github.io"
                className="hover:underline dark:text-white text-gray-900 underline "
              >
                Ajay Tainwala
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
