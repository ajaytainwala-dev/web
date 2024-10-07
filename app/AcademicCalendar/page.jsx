"use client";
import React from "react";

const page = () => {
  return (
    <>
      <div className="p-4 dark:bg-gray-800 dark:text-gray-300">
        <p className="text-center text-2xl dark:text-gray-300 font-bold pt-2">
          Academic Calendar
        </p>

        <section className="flex items-center justify-center pt-4 overflow-auto p-4">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23039BE5&ctz=Asia%2FKolkata&title=GYAN%20ACADEMY%20-%20LIST%20OF%20HOLIDAYS%202023&src=ZTdmNWU1NjViNWM3ZTMzMmE3ZGQwMjE2Y2NkMGM3YjlmN2Y1NDIyMDZjMmM3ZGQ5ZWMwMmEwYzhkYjE3YTlhMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23AD1457"
            style={{ padding: "10px", borderRadius: "8px" }}
            width="800"
            height="600"
            frameborder="0"
          ></iframe>
        </section>

          <div className="flex flex-wrap items-center justify-center ">
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-3 mt-4">
              {/* <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt=""> */}
              <div className="flex flex-col justify-between p-2 leading-normal">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  26 January 2024
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Republic Day
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-3 mt-4">
              {/* <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt=""> */}
              <div className="flex flex-col justify-between p-2 leading-normal">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  26 January 2024
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Republic Day
                </p>
              </div>
            </div>
          </div>
          
        </div>
    </>
  );
};

export default page;
