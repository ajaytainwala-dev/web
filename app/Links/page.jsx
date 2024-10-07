"use client";
import React from "react";

const page = () => {
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <p className="dark:text-white text-gray-900 font-semibold text-lg">
                {" "}
                Useful Links
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      Department name
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Website Links
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {" "}
                      KSEAB
                    </th>
                    <td className="px-4 py-3">
                      <a
                        href="https://www.kseab.karnataka.gov.in/english"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        www.kseab.karnataka.gov.in/english
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {" "}
                      PUC
                    </th>
                    <td className="px-4 py-3">
                      <a
                        href="https://www.pue.karnataka.gov.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        www.pue.karnataka.gov.in
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      CET Karnataka
                    </th>
                    <td className="px-4 py-3">
                      <a
                        href="https://www.cetonline.karnataka.gov.in/kea/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                       www.cetonline.karnataka.gov.in/kea
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      JEE(Main)
                    </th>
                    <td className="px-4 py-3">
                      <a
                        href="https://www.jeemain.nic.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                      www.jeemain.nic.in
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      JEE (Adv)
                    </th>
                    <td className="px-4 py-3">
                      <a
                        href="https://www.jeeadv.ac.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                    www.jeeadv.ac.in
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      NEET
                    </th>
                    <td className="px-4 py-3">
                      <a
                        href="https://www.nta.ac.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
               www.nta.ac.in
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
