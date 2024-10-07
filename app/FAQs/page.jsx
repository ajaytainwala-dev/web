"use client";
import React from "react";
import { Suspense } from "react";
import Loading from "../components/Loading/Loading";
import { useForm, Form } from "react-hook-form";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Haven&apos;t found the right help?
        </h2>
        <span className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Have a question that wasn&apos;t answered? Let us know!
          </p>
        </span>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Name{" "}
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Enter your name"
              required
              {...register("name", {
                required: "This Field is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
            />
            {errors.name && (
              <span className="text-red-500 text-xs">
                {errors.name.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@example.com"
              required
              {...register("email", {
                required: "Email is Required!",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}

          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
              {...register("subject", { required: "Subject is required" })}
              
            />
{errors.subject && (
              <span className="text-red-500 text-xs">
                {errors.subject.message}
              </span>
            )}


          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Enter your message here..."
              {...register("messages", { required: "Message is required" })}

            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-xs">
                {errors.messages.message}
              </span>
            )}

          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

const page = () => {
  const FAQ = [
    {
      question:
        " Q: What programs and courses does your educational academy offer?",
      answer:
        "A: We offer a wide range of programs and courses, including academic subjects, test preparation, language learning, professional development, and enrichment classes.",
    },
    {
      question: "Q: Who can enroll in your educational academy?",
      answer:
        "A: Our academy is open to students of all ages, from preschoolers to adults. We provide tailored programs for different age groups and learning needs.",
    },
    {
      question: "Q: How can I enroll in a course at your academy?",
      answer:
        "A: To enroll in a course, you can visit our website and complete the online registration form. Alternatively, you can also visit our campus and register in person at our admissions office.",
    },
    {
      question: "Q: Are your instructors qualified and experienced?",
      answer:
        "A: Yes, we take great pride in our team of qualified and experienced instructors. They are subject matter experts and skilled educators who are dedicated to providing high-quality instruction",
    },
    {
      question: " Q: What teaching methods does your academy use?",
      answer:
        "A: We employ a variety of teaching methods, including interactive lectures, group discussions, hands-on activities, and multimedia resources. Our aim is to create an engaging and effective learning environment.",
    },
    {
      question: "Q: How are the class sizes at your academy?",
      answer:
        "A: We strive to maintain small class sizes to ensure personalized attention and effective student-teacher interaction. The specific class sizes may vary depending on the program and age group.",
    },
    {
      question: "Q: Can I get a refund if I need to cancel my enrollment?",
      answer:
        "A: Our refund policy varies depending on the program and the timing of the cancellation. Please refer to our enrollment terms and conditions or contact our admissions office for more information.",
    },
    {
      question: "Q: Is financial aid or scholarships available for students?",
      answer:
        "A: We have various financial aid and scholarship options available for eligible students. These opportunities are typically based on merit or financial need. Please inquire with our admissions office for more details.",
    },
    {
      question: "Q: Do you offer online courses or distance learning programs?",
      answer:
        "A: Yes, we offer online courses and distance learning programs for individuals who prefer flexible learning options or cannot attend classes on campus. These courses are designed to provide a comparable learning experience to our in-person classes.",
    },
    {
      question:
        "Q: Are there any extracurricular activities or events organized by the academy?",
      answer:
        "A: Yes, we encourage the holistic development of our students and organize extracurricular activities, workshops, seminars, and events throughout the year. These events provide opportunities for students to showcase their talents, develop new skills, and engage with their peers.",
    },
  ];

  return (
    <>
      <Suspense fallback={<Loading />}>
        <section className="bg-white dark:bg-gray-900 ">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white ">
              Frequently asked questions
            </h2>
            <div className="grid pt-8 text-left  md:gap-16  md:grid-cols-1">
              <div>
                {FAQ.map((item, index) => (
                  <div
                    className="border-t border-gray-200 dark:border-gray-700 py-8 mb-10"
                    key={index}
                  >
                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white   ">
                      <svg
                        className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      {item.question}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400   ">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Contact />
      </Suspense>
    </>
  );
};

export default page;
