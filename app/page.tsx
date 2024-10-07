import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
// import Loading from "./components/Loading/Loading";
import { FaRegLightbulb, FaRocket, FaArrowRight } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { RiFocus3Line } from "react-icons/ri";
import { GiTeacher } from "react-icons/gi";
import { GrUserExpert } from "react-icons/gr";
import { ImBooks } from "react-icons/im";
import Rating from "@mui/material/Rating";
import Contact from "./components/Contact/Contact";
import { IoMdSchool } from "react-icons/io";
import { FaSchoolFlag } from "react-icons/fa6";
import { MdOutlineAutoGraph } from "react-icons/md";

// Hero&apos;s Section
  const Hero = () => {
  return (
    <>
      <Box
        className=" inset-0  bg-slate-200  [background:radial-gradient(125%_125%_at_50%_10%,#e2e8f0_40%,#3391ee_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"
        sx={{
          pt: {
            lg: "3%",
            xs: "15%",
            md: "7%",
            sm: "12%",
          },
        }}
      >
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 ">
          <Link
            href="/Courses"
            className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            role="alert"
          >
            <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
              New
            </span>{" "}
            <span className="text-sm font-medium">Check our Courses!</span>
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Empowering Minds, Shaping Futures{" "}
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Unlock your potential with our expert-led courses, comprehensive
            study materials, and interactive learning experiences. Join a
            community of learners dedicated to achieving academic excellence and
            personal growth. Start your journey to success today!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 text-gray-500">
            <div className="flex flex-col mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400 items-center">
              <FaRegLightbulb style={{ fontSize: "1.5rem" }} />
              <Typography
                variant="h6"
                component="h6"
                sx={{ mt: 2, fontWeight: "bold", textAlign: "center" }}
              >
                Unlock Your True Potential
              </Typography>
            </div>
            <div className="flex flex-col mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400 items-center">
              <FaRocket style={{ fontSize: "1.5rem" }} />
              <Typography
                variant="h6"
                component="h6"
                sx={{ mt: 2, fontWeight: "bold", textAlign: "center" }}
              >
                Achieve Academic Excellence
              </Typography>
            </div>
            <div className="flex flex-col mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-300 items-center">
              <GiConfirmed style={{ fontSize: "1.5rem" }} />
              <Typography
                variant="h6"
                component="h6"
                sx={{
                  mt: 2,
                  fontWeight: "bold",
                  textAlign: "center",
                  textWrap: "wrap",
                }}
              >
                Ignite Passion for Learning
              </Typography>
            </div>
          </div>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 mt-4">
            <Link
              href={"/Register"}
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Register Now <FaArrowRight style={{ margin: "5px" }} />
            </Link>
          </div>
        </div>
      </Box>
    </>
  );
};

// About Section
  const About = () => {
  return (
    <>
      <section className="bg-slate-200 dark:bg-gray-900">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-300 p-5 text-center font-mono ">
          About Us
        </h2>
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <Image
            className="w-[80%] m-auto"
            src="/Logo/GACS_Logo.webp"
            height={300}
            width={400}
            alt="GACS Logo"
            loading="lazy"
          />

          <div className="mt-4 md:mt-0">
            <p className="mb-6 font-light text-gray-800 md:text-lg dark:text-gray-400">
              At Gyan Academy, we are committed to providing high-quality
              education and resources to students worldwide. Our team of
              experienced educators and industry professionals works tirelessly
              to create engaging and effective learning experiences. Whether
              you&apos;re preparing for exams, looking to enhance your skills, or
              pursuing a passion, we offer a wide range of courses and materials
              to help you succeed. Join us in our mission to empower learners
              and transform education.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Link
                href="/About"
                className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Why Choose Us Section
  const WhyChooseUs = () => {
  const WhyUs = [
    {
      name: "Experienced Faculties",
      icon: <GrUserExpert />,
    },
    {
      name: "Comprehensive Curriculum",
      icon: <ImBooks />,
    },
    {
      name: "Career-Oriented Programs",
      icon: <RiFocus3Line />,
    },
    {
      name: "Individualized Learning",
      icon: <GiTeacher />,
    },
  ];

  return (
    <>
      <section className="text-gray-400 bg-slate-200 dark:bg-gray-900 body-font">
        <div className="container px-5 py-24 pt-16  mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 dark:text-white text-gray-900">
              Why Choose Us?
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500 dark:text-gray-400">
              At Gyan Academy, we prioritize quality education, innovative
              teaching methods, and a supportive learning environment. Our
              dedicated team ensures that every student achieves their full
              potential.
            </p>
          </div>

          <div className="flex flex-wrap -m-4 text-center">
            {WhyUs.map((reason) => (
                <div key={reason.name} className="p-4 w-full sm:w-1/2 md:w-1/4 relative">
                <div className="border-2 border-gray-800 px-4 py-6 rounded-lg h-full">
                  <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-indigo-400 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                  >
                  {reason.icon}
                  </svg>
                  <h2 className="title-font font-medium md:text-[0.8rem] sm:text-[0.6rem] dark:text-white text-gray-900 text-center">
                  {reason.name}
                  </h2>
                </div>
                </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

  const FeaturedCourses = () => {
  const courseList = [
    {
      icon: <IoMdSchool />,
      heading: "School Education",
      classification: "Classes 9-12 (All Boards)",
      l1: "ICSE, CBSE, State Boards ",
      l2: "Science & Commerce streams",
      l3: "Comprehensive study materials",
      l4: "Expert faculty guidance",
    },
    {
      icon: <FaSchoolFlag />,
      heading: "Higher Education",
      classification: "Degree and Professional Courses",
      l1: "Undergraduate Programs",
      l2: "CA (Charted Accountant)",
      l3: "CMA (Cost Management Accountant)",
      l4: "CS (Company Secretary)",
    },
    {
      icon: <MdOutlineAutoGraph />,
      heading: "Specialized Courses",
      classification: "Skill Enhancement and Certifications",
      l1: "Competitive exam preparation.",
      l2: "Skill development workshops",
      l3: "Language Proficiency courses",
      l4: "Career counseling services",
    },
  ];
  return (
    <>
      <section className="text-gray-600 body-font bg-slate-200 dark:bg-gray-900">
        <div className="container px-5 py-11 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font dark:text-gray-300 text-gray-900">
              Featured Courses
            </h1>
          </div>
            <div className="flex flex-wrap -m-1">
            {courseList.map((lists) => (
              <div className="p-4 pt-1 w-full sm:w-1/2 md:w-1/3 h-auto" key={lists.heading}>
              <div className="flex rounded-lg h-full bg-gray-100 dark:bg-gray-800 p-8 flex-col">
                <div className="flex flex-col items-center mb-3 justify-center">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5 flex items-center justify-center"
                  viewBox="0 0 24 24"
                  >
                  {lists.icon}
                  </svg>
                </div>
                <h2 className="text-gray-900 dark:text-gray-300 text-lg title-font font-medium block text-center">
                  {lists.heading}
                </h2>
                <h4 className="dark:text-indigo-500 font-bold">
                  {lists.classification}
                </h4>
                </div>
                <div className="flex-grow h-auto">
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 flex flex-col space-y-2 text-sm">
                  <li>{lists.l1}</li>
                  <li>{lists.l2}</li>
                  <li>{lists.l3}</li>
                  <li>{lists.l4}</li>
                </ul>
                </div>
              </div>
              </div>
            ))}
            </div>
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end my-5">
            <Link
              href="/Courses"
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full text-center font-bold"
              style={{ borderRadius: "8px" }}
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
// Call to Action (CTA)
  const CTA = () => {
  return (
    <>
      <section className="text-gray-600 dark:text-gray-300 bg-slate-200 dark:bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-gray-300">
              Register Now for Exclusive Courses
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Join our exclusive courses designed to provide you with the best
              learning experience. Our expert instructors and comprehensive
              curriculum ensure that you gain the knowledge and skills needed to
              excel in your field. Don&apos;t miss out on this opportunity to enhance
              your education and career prospects.
            </p>
          </div>
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <Link
              href="/Register"
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full text-center font-bold"
              style={{ borderRadius: "8px" }}
            >
              Register Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

type rev = {
  name: string;
  review: string;
};

// Review Section
  const Review = () => {
  const Reviews: rev[] = [
    {
      name: "Khushi Patel",
      review:
        "I was a student in this institute for the batch 2021-22, and my tutor was Mr. Vikram, who handled the subject Accountancy for me. He was truly a brilliant faculty and under his guidance I scored 100 in 2nd PUC. 😄",
    },
    {
      name: "Kenneth Ethan",
      review:
        "A very good coaching center with highly qualified and approachable mentors. regular doubt clearing sessions and proper guidance helped me a lot to reflect on my performance and work accordingly.",
    },
    {
      name: "Meet Sisodia",
      review:
        "This academy is very good, I have also studied here, the teachers are very cooperative, I recommend you.💗✨",
    },
    {
      name: "Annu Mittal",
      review: "Excellent teaching approach. One to one attention to each kid.",
    },
  ];
  return (
    <>
      <section className="text-gray-400 dark:bg-gray-900 bg-slate-200 body-font">
        <div className="container px-5 py-15 pb-8 pt-10 mx-auto">
          <h1 className="text-3xl font-bold title-font dark:text-white text-gray-900 mb-12 text-center">
            Testimonials
          </h1>
          <div className="flex flex-wrap -m-4 px-2">
            {Reviews.map((reviews) => (
              <div className="p-4 md:w-1/2 w-full" key={reviews.name}>
                <div className="h-full bg-white dark:bg-gray-800 bg-opacity-40 p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-500 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6 text-gray-900">{reviews.review}</p>
                  <a className="inline-flex items-center">
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-bold dark:text-white text-indigo-700">
                        {reviews.name}
                      </span>
                      <Rating name="read-only" value={5} readOnly />
                      {/* <span className="text-gray-500 text-sm">UI DEVELOPER</span> */}
                    </span>
                  </a>
                </div>
              </div>
            ))}
            <div className=" m-auto w-[80%] mt-4 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Link
                href="/Reviews"
                className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 w-full"
              >
                Reviews
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};



export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      <FeaturedCourses />
      <CTA />
      <Review />
      <Contact />
    </>
  );
}
