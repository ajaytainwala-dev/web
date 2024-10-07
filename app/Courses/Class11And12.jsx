"use client";
import React from "react";
import Image from "next/image";
import { TbMathSymbols, TbBusinessplan } from "react-icons/tb";
import { MdScience, MdBiotech } from "react-icons/md";
import { FaPeopleGroup, FaComputer } from "react-icons/fa6";
import { IoLanguage, IoBusiness, IoLogoElectron } from "react-icons/io5";
import { BsGraphUpArrow } from "react-icons/bs";
import { SlChemistry } from "react-icons/sl";

const ICSE_Com = [
  {
    icon: <TbBusinessplan />,
    title: "Accountancy",
  },
  {
    icon: <IoBusiness />,
    title: "Commerce / Business Studies",
  },
  {
    icon: <BsGraphUpArrow />,
    title: "Economics",
  },
  {
    icon: <FaComputer />,
    title: "Computer Applications",
  },
];

const ICSE_SCI = [
  {
    icon: <IoLogoElectron />,
    title: "Physics",
  },
  {
    icon: <SlChemistry />,
    title: "Chemistry",
  },
  {
    icon: <MdBiotech />,
    title: "Biology",
  },
  {
    icon: <TbMathSymbols />,
    title: "Mathematics",
  },
];

const CBSE_Com = [
  {
    icon: <TbBusinessplan />,
    title: "Accountancy",
  },
  {
    icon: <IoBusiness />,
    title: "Business Studies",
  },
  {
    icon: <BsGraphUpArrow />,
    title: "Economics",
  },
  {
    icon: <FaComputer />,
    title: "Computer Science",
  },
];

const CBSE_SCI = [
  {
    icon: <IoLogoElectron />,
    title: "Physics",
  },
  {
    icon: <SlChemistry />,
    title: "Chemistry",
  },
  {
    icon: <MdBiotech />,
    title: "Biology",
  },
  {
    icon: <TbMathSymbols />,
    title: "Mathematics",
  },
];

const Lang = [
  {
    icon: <IoLanguage />,
    title: "Language Hindi",
  },
  {
    icon: <IoLanguage />,
    title: "Language Kannada",
  },
];
const Class11And12 = () => {
  return (
    <section className="text-gray-400  body-font">
      <h5 className="mb-2 text-xl sm:text-md font-bold tracking-tight text-gray-900 dark:text-gray-200 pt-3 text-center">
        Class 11th and 12th
      </h5>
      <div className="container px-5  py-15 pb-20 mx-auto flex flex-wrap">
        {/* ICSE Commerce */}
        <div className="m-auto">
          <h5 className="mb-2 text-xl sm:text-md font-bold tracking-tight text-gray-900 dark:text-gray-200 pt-3">
            ICSE Commerce
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 m-auto">
            {ICSE_Com.map((subject) => (
              <div
                key={subject.title}
                className="flex items-center justify-start border-2 border-gray-800 p-4 rounded-2 shadow-lg shadow-purple-500/60 min-w-[300px] gap-2 bg-gray-900"
                style={{ borderRadius: "8px" }}
              >
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                  >
                    {subject.icon}
                  </svg>
                </div>
                <h1 className="font-bold">{subject.title}</h1>
              </div>
            ))}
          </div>
        </div>
        {/* ICSE Science */}
        <div className="m-auto">
          <h5 className="mb-2 text-xl sm:text-md font-bold tracking-tight text-gray-900 dark:text-gray-200 pt-3">
            ICSE Science
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 m-auto">
            {ICSE_SCI.map((subject) => (
              <div
                key={subject.title}
                className="flex items-center justify-start border-2 border-gray-800 p-4 rounded-2 shadow-lg shadow-purple-500/60 min-w-[300px] gap-2 bg-gray-900"
                style={{ borderRadius: "8px" }}
              >
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                  >
                    {subject.icon}
                  </svg>
                </div>
                <h1 className="font-bold">{subject.title}</h1>
              </div>
            ))}
          </div>
        </div>
         {/* CBSE Commerce */}
        <div className="m-auto">
          <h5 className="mb-2 text-xl sm:text-md font-bold tracking-tight text-gray-900 dark:text-gray-200 pt-3">
            CBSE & States Board
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 m-auto">
            {CBSE_Com.map((subject) => (
              <div
                key={subject.title}
                className="flex items-center justify-start border-2 border-gray-800 p-4 rounded-2 shadow-lg shadow-purple-500/60   min-w-[300px] gap-2 bg-gray-900"
                style={{ borderRadius: "8px" }}
              >
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                  >
                    {subject.icon}
                  </svg>
                </div>
                <h1 className="font-bold flex-grow-2">{subject.title}</h1>
              </div>
            ))}
          </div>
        </div>
         {/* CBSE Science */}
        <div className="m-auto">
          <h5 className="mb-2 text-xl sm:text-md font-bold tracking-tight text-gray-900 dark:text-gray-200 pt-3">
            CBSE Science
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 m-auto">
            {CBSE_SCI.map((subject) => (
              <div
                key={subject.title}
                className="flex items-center justify-start border-2 border-gray-800 p-4 rounded-2 shadow-lg shadow-purple-500/60 min-w-[300px] flex-grow gap-2 bg-gray-900"
                style={{ borderRadius: "8px" }}
              >
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                  >
                    {/* <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path> */}
                    {/* {sub.icon} */}
                    {subject.icon}
                  </svg>
                </div>
                <h1 className="font-bold">{subject.title}</h1>
              </div>
            ))}
          </div>
        </div>
        {/* Languages */}
        <div className="m-auto">
          <h5 className="mb-2 text-xl sm:text-md font-bold tracking-tight text-gray-900 dark:text-gray-200 pt-3">
            Languages
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 m-auto">
            {Lang.map((subject) => (
              <div
                key={subject.title}
                className="flex items-center justify-start border-2 border-gray-800 p-4 rounded-2 shadow-lg shadow-purple-500/60 min-w-[300px] flex-grow gap-2 bg-gray-900"
                style={{ borderRadius: "8px" }}
              >
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                  >
                    {/* <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path> */}
                    {/* {sub.icon} */}
                    {subject.icon}
                  </svg>
                </div>
                <h1 className="font-bold">{subject.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Class11And12;
