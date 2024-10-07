"use client";
import React from 'react'
import { TbBusinessplan } from "react-icons/tb";
import { FaPeopleGroup, FaComputer } from "react-icons/fa6";
import { SlChemistry } from "react-icons/sl";

const Programs_Course = [
    {
      icon: <TbBusinessplan />,
      title: "Charted Accountant-CA (Foundation)",
    },
    {
      icon: <FaPeopleGroup />,
      title: "Cost Management Accountant-CMA (Foundation)",
    },
    {
      icon: <SlChemistry />,
      title: "Company Secretiat -CS (Foundation)"
    }
  ];

const Programs = () => {
  return (
    <>
      <section className="text-gray-400  body-font">
        <h5 className="mb-2 text-xl sm:text-md font-bold tracking-tight text-gray-900 dark:text-gray-200 pt-3 text-center">
          CA | CMA | CS
        </h5>
        <div className="container px-5  py-15 pb-20 mx-auto flex flex-wrap">
          <div className="m-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 m-auto">
              {Programs_Course.map((subject) => (
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
        </div>
      </section>   
    </>
  )
}

export default Programs
