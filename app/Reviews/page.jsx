"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import {Suspense} from "react";
import Loading from "../components/Loading/Loading"

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const page = () => {
const review =[
  {
    name:"Khushi Patel",
    ratings:<Rating name="read-only" value={5} readOnly />,
    review:"I was a student in this institute for the batch 2021-22, and my tutor was Mr. Vikram, who handled the subject Accountancy for me. He was truly a brilliant faculty and under his guidance I scored 100 in 2nd PUC. 😄 …"
  },
  {
    name:"Kenneth Ethan",
    ratings:<Rating name="read-only" value={5} readOnly />,
    review:"A very good coaching center with highly qualified and approachable mentors. regular doubt clearing sessions and proper guidance helped me a lot to reflect on my performance and work accordingly."
  },
  {
    name:"Ajay Taiwala",
    ratings:<Rating name="read-only" value={5} readOnly />,
    review:"Gyan Academy of Commerce and Science is an exceptional educational institute. The faculty is knowledgeable and passionate, the curriculum is comprehensive, and the facilities are top-notch. Personalized attention and support make it a standout choice for students. Highly recommended."
  },
  {
    name:"Jyothi John",
    ratings:<Rating name="read-only" value={5} readOnly />,
    review:"Excellent coaching center..."
  },
  {
    name:"Nickson Martin",
    ratings:<Rating name="read-only" value={5} readOnly />,
    review:"Learning is made much more interesting and interactive"
  },
  {
    name:"Annu Mittal",
    ratings:<Rating name="read-only" value={5} readOnly />,
    review:"Excellent teaching approach. One to one attention to each kid."
  },
  {
    name:"Meet Sisodia",
    ratings:<Rating name="read-only" value={5} readOnly />,
    review:"This academy is very good, I have also studied here, the teachers are very cooperative, I recommend you.💗✨"
  },
  {
    name:"Zain Huq",
    ratings:<Rating name="read-only" value={5} readOnly />,
    review:"Grateful for the invaluable knowledge and experiences gained at the academy – a transformative journey that has equipped me for success in both professional and personal endeavors."
  },
  {
    name:"Payal Yadav",
    ratings:<Rating name="read-only" value={5} readOnly />,
    review:"Best coaching centre ...very supportive teachers ....I really thankful to Gyan academy of commerce and science."
  },
  {
    name:"EHassan Abbas",
    ratings:<Rating name="read-only" value={5} readOnly />,
    review:"Excellent teaching no academy can give u this type of excellent teaching they teach u with fun and enjoyment my tutor was Vikram sir he has a excellent knowledge and thank you for sharing ur knowledge with others💕"
  },
  {
    name:"Vanisa Tania",
    ratings:<Rating name="read-only" value={5} readOnly />,
    review:"I was impressed by the professionalism of the teachers . From the moment I enrolled, they guided me through the process with patience and expertise. The instructors are knowledgeable and passionate about their subjects, which made learning enjoyable."
  }
]

  return (
    <>
    <Suspense fallback={<Loading/>}>
    {/* md:py-16 */}
    {/* py-10 */}
      <section className="bg-
        pt-[10%]
        antialiased dark:bg-gray-900 ">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Google Reviews
            </h2>
            <div className="mt-2 flex items-center gap-2 sm:mt-0">
              <Rating name="read-only" value={5} readOnly />
              <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                (25 reviews)
              </p>
            </div>
          </div>
          <div className="my-6 gap-8 sm:flex sm:items-start md:my-8">
            <div className="shrink-0 space-y-4">
              <p className="text-2xl font-semibold leading-none text-gray-900 dark:text-white">
                5 out of 5
              </p>
            </div>
            {/* <BorderLinearProgress variant="determinate" value={50} /> */}
            <div className="mt-6 min-w-0 flex-1 space-y-3 sm:mt-0">
              <div className="flex items-center gap-2">
                <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
                  5
                </p>

                <Rating name="read-only" value={5} readOnly />
                <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                  <div
                    className="h-1.5 rounded-full bg-yellow-300"
                    style={{ width: "90%" }}
                  />
                </div>
               
                <a
                  href="#"
                  className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left"
                >
                  24 <span className="hidden sm:inline">reviews</span>
                </a>
              
              </div>
              <div className="flex items-center gap-2">
                <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
                  4
                </p>

                <Rating name="read-only" value={4} readOnly />
                <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                  <div
                    className="h-1.5 rounded-full bg-yellow-300"
                    style={{ width: "10%" }}
                  />
                </div>
                <a
                  href="#"
                  className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left"
                >
                  01 <span className="hidden sm:inline">reviews</span>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
                  3
                </p>

                <Rating name="read-only" value={3} readOnly />
                <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                  <div
                    className="h-1.5 rounded-full bg-yellow-300"
                    style={{ width: "0%" }}
                  />
                </div>
                <a
                  href="#"
                  className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left"
                >
                  0 <span className="hidden sm:inline">reviews</span>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
                  2
                </p>

                <Rating name="read-only" value={2} readOnly className="dark:border-white" />
                <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                  <div
                    className="h-1.5 rounded-full bg-yellow-300"
                    style={{ width: "0%" }}
                  />
                </div>
                <a
                  href="#"
                  className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left"
                >
                  0 <span className="hidden sm:inline">reviews</span>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
                  1
                </p>

                <Rating name="read-only" value={1} readOnly />
                <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                  <div
                    className="h-1.5 rounded-full bg-yellow-300"
                    style={{ width: "0%" }}
                  />
                </div>
                <a
                  href="#"
                  className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left"
                >
                  0 <span className="hidden sm:inline">reviews</span>
                </a>
              </div>
            </div>
          </div>
         {review.map((item, index) => (
              <div key={index} className="gap-3 pb-6 sm:flex sm:items-start" style={{borderTop:"1px solid grey"}}>
              <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
                <div className="flex items-center gap-0.5 mt-2">
                    {item.ratings}
                </div>
                <div className="space-y-0.5">
                  <p className="text-base font-semibold text-gray-900 dark:text-white">
                      {item.name}
                  </p>
                  <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      {/* November 18 2023 at 15:35 */}
                  </p>
                </div>
              </div>
              <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    {item.review}
                </p>
              </div>
            </div>
            ))}

<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-auto text-center">
     <a href="https://www.google.com/maps/place/Gyan+Academy+Of+Commerce+And+Science/@12.956909,77.615909,17z/data=!4m6!3m5!1s0x3bae15504f44ccd9:0x5e34233a39f8b47!8m2!3d12.9569086!4d77.6159094!16s%2Fg%2F11qbbbf4hk?hl=en&entry=ttu" className="text-white-700 hover:underline dark:text-white-500" target="_blank">View all reviews</a>
</button>
        </div>
     
      </section>
      </Suspense>
    </>
  );
};

export default page;
