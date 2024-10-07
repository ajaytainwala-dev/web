"use client";
import React from "react";
import Image from "next/image";
import AxiosInstance from "../../utils/AxiosInstance";
import { useForm } from "react-hook-form";
const Page = () => {
  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitting, isSubmitSuccessful, submittedData },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    const finalData = JSON.stringify(data);
    const result = await AxiosInstance.post("api/SendMail",finalData);
    // console.log(result);
  };



  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ email: "", subject: "", message: "" });
    }
  }, [formState, submittedData, reset]);
  return (
    <>
      <section className="bg-white dark:bg-gray-900 pt-[5%] sm:pt-[8%]">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <h3 className="text-center text-lg font-semibold leading-8 text-gray-900 dark:text-white py-5">
            Follow and Reach Us at
          </h3>
          <div className="mx-auto flex items-center py-6">
            <a
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              href="https://www.instagram.com/gyan_academy_cs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Instagram Icon"
                src="/Logo/Instagram.webp"
                width={138}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                loading="lazy"
              />
            </a>

            <a
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              href="https://www.facebook.com/gyanacademyacs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Facebook Icon"
                src="/Logo/Facebook.webp"
                width={138}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                loading="lazy"
              />
            </a>
            <a
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              href="https://wa.me/918088263376?text=Hello%20Gyan%20Academy%!%20I%20wanted%20enquire%20about %20your%20courses."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Tuple"
                src="/Logo/Whatsapp.webp"
                width={138}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                loading="lazy"
              />
            </a>
          </div>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a question ? Want to send feedback ? Need details about our
            courses offered ? Let us know.
          </p>

          <form
            method="POST"
            className="space-y-8"
            onSubmit={handleSubmit(onSubmit)}
          >
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
                name="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@email.com"
                required
                {...register("email", { required: true })}
              />
            </div>
            {errors.email && (
              <p className="text-red-500">Email I&apos;D is required.</p>
            )}
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
                name="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                {...register("subject", { required: true })}
              />
            </div>
            {errors.subject && (
              <p className="text-red-500">Subject is required.</p>
            )}
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
                {...register("message", { required: true })}
              ></textarea>
            </div>
            {errors.message && (
              <p className="text-red-500">Descripton is required.</p>
            )}
            {isSubmitting ? (
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Send message
              </button>
            ) : (
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Send message
              </button>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default Page;
