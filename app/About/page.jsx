"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import CardMedia from "@mui/material/CardMedia";
import Head from "next/head";
import Image from "next/image";
import { Suspense, lazy } from "react";
import Loading from "../components/Loading/Loading";

const AboutSec = () => {
  return (
    <Box>
      <Box className="bg-white dark:bg-gray-800 dark:text-gray-300 ">
        <Box className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light ">
            <Typography
              sx={{
                // color: "black",
                fontSize: "1.875rem",
                lineHeight: " 2.25rem ",
                fontWeight: "800",
              }}
            >
              &ldquo;We Welcome Student&apos;s to the world of Knowledge&rdquo;
            </Typography>
            <p className="mb-4">
              Welcome to Gyan Academy of Commerce and Science, an online
              educational platform established in 2022 with the aim of providing
              quality education to students across the globe. Our platform
              offers a wide range of courses in commerce and science streams,
              including accounting, economics, mathematics, biology, physics,
              and chemistry. Our expert faculty members are highly qualified and
              experienced in their respective fields, ensuring that students
              receive the best possible education.
            </p>
            <p>
              Our interactive and innovative teaching methodologies make
              learning engaging and effective. At Gyan Academy of Commerce and
              Science, we are committed to empowering students with knowledge
              and skills that will help them succeed in their academic and
              professional lives.
            </p>
          </div>
          <Box className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

  const Mission = () => {
  return (
    <>
      <Box
        sx={{
          height: { md: "93vh", xs: "auto", sm: "auto", lg: "93vh" },
          zIndex: "1",
        }}
        id="mission"
      >
        <Typography
          className="max-w-3xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl "
          gutterBottom
        >
          Our Mission
        </Typography>

        <Grid container spacing={2} sx={{ py: 4 }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ height: 300, overflow: "hidden", borderRadius: "10px" }}>
              <CardMedia
                component="img"
                image="https://img.freepik.com/premium-photo/concept-mission-with-network-business-symbols_220873-12797.jpg"
                alt="Our Mission Image"
                sx={{ height: 300, objectFit: "cover" }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: "auto",
              mb: 4,
            }}
          >
            <Typography
              variant="body1"
              sx={{ mb: 4 }}
              // className="text-black-400"
            >
              Our vision is to become the leading educational platform, where
              students can acquire the skills and knowledge they need to succeed
              in the ever-changing world. We strive to foster a community of
              lifelong learners who are passionate about personal growth and
              development. By providing high-quality education, innovative
              technology, and expert guidance, we aim to empower individuals to
              achieve their goals and make a positive impact on the world.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

  const Services = () => {
  const imageStyle = {
    borderRadius: "10px",
    border: "1px solid #fff",
    width: "100%",
    height: "auto",
  };

  return (
    <Box
      sx={{
        height: { md: "auto", xs: "auto", sm: "auto", lg: "auto" },
        zIndex: "1",
      }}
      id="services"
    >
      <section>
        <div className="py-8 pt-4 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold ">
              Our Services
            </h2>
            <p className="sm:text-xl ">
              We offer a variety of services to help students achieve their
              academic and career goals.
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <div className="flex justify-center items-center mb-4 ">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ ...imageStyle }}
                  src="/Placeholder/PersonalisedLearn.webp"
                  alt="Personalised Learning image"
                  loading="lazy"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold ">Personalised Tutoring</h3>
              <p className=" ">
                Get one on one attention and tailored lesson plans to help you
                suceed in any subject.
              </p>
            </div>

            <div>
              <div className="flex justify-center items-center mb-4  ">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ ...imageStyle }}
                  src="/Placeholder/ExamPrep.webp"
                  alt="Personalised Learning image"
                  loading="lazy"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold ">Exam Prep</h3>
              <p className="">
                Our Experienced tutors will help you prepare for upcoming exams
                and achieve your goals.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4  ">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ ...imageStyle }}
                  src="/Placeholder/GroupStudy.webp"
                  alt="Personalised Learning image"
                  loading="lazy"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold ">Group Classes</h3>
              <p className="">
                Join our group classes to learn and grow with peers in a
                supportive environment.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 ">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ ...imageStyle }}
                  src="/Placeholder/Career.webp"
                  alt="Personalised Learning image"
                  loading="lazy"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold ">
                Carrirer Guidance Coaching
              </h3>
              <p className=" ">
                Navigate your carrer path with confidence and recieve valuable
                guidance from our experienced Coaches.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Box>
  );
};

  const Team = () => {
  const TeamMembers = [
    {
      name: "Vikram Tainwala",
      role: "Founder of Gyan Academy of Commerce & Science",
      image: "/Team/vikram.webp",
      description: "Dept. of Accountancy & Commerce.",
    },
    {
      name: "Suvarnalatha",
      role: "Lecturer of Kannada",
      image: "/Team/suvarnalatha.webp",
      description: "Dept. of Kannada",
    },
    {
      name: "Saniya Fathima",
      role: "Lecturer of Mathematics & Science",
      image: "/Team/Saniya.webp",
      description: "Dept. of Mathematics & Science",
    },
    {
      name: "Meharain Fathima",
      role: "Lecturer of Economics & Statistics",
      image: "/Team/Mehrain.webp",
      description: "Dept. of Economics & Statistics",
    },
    {
      name: "Shruthi",
      role: "Lecturer of Computer Science",
      image: "/Team/Shruthi.webp",
      description: "Dept. of Computer Science",
    },
    {
      name: "Ajay Tainwala",
      role: "Admin & Co-ordinator",
      image: "/Team/Ajay.webp",
      description: "",
    },
  ];

  return (
    <Box
      className="bg-white dark:bg-gray-800 dark:text-gray-300"
      sx={{ height: "auto" }}
    >
      <Box
        sx={{
          py: 8,
          px: 2,
          mx: 2,
          lg: { py: 16, px: 6 },
        }}
      >
        <Box
          sx={{
            mx: "auto",
            lg: { py: 16, px: 6 },
            textAlign: "center",
            mb: 8,
            lg: { mb: 16 },
          }}
        >
          <Typography className="mb-4 text-4xl tracking-tight font-extrabold  ">
            Our Team
          </Typography>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl ">
            Meet our dedicated team of educators and professionals who are
            passionate about empowering students with the knowledge and skills
            they need to succeed.
          </p>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(2, 1fr)",
            },
            gap: 6,
            mb: 6,
            lg: { mb: 16 },
          }}
        >
          {TeamMembers.map((team, index) => {
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow p-4  sm:flex sm:items-center"
              >
                <div className="w-full sm:w-1/3 mb-4 sm:mb-0 sm:mr-4">
                  <Image
                    className="w-full rounded-lg"
                    src={team.image}
                    width={0}
                    height={0}
                    sizes="100vw"
                    loading="lazy"
                    alt={team.name}
                  />
                </div>
                <div className="w-full sm:w-2/3">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-2">
                    {team.name}
                  </h3>
                  <span className="text-gray-500 mb-2">{team.role}</span>
                  <p className="mt-3 mb-4 font-light text-gray-500">
                    {team.description}
                  </p>
                </div>
              </div>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

 export default function About() {
  return (
    <>
      <Head>
        <title>GACS - About Us</title>
        <meta property="og:title" content="GACS - About Us" key="title" />
        <meta
          property="og:description"
          content="GACS - About Us"
          key="description"
        />
      </Head>

      <Suspense fallback={<Loading />}>
        <Box
          className="bg-white dark:bg-gray-800 dark:text-gray-300"
          sx={{
            p: "18px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: { lg: "8%", md: "8%", sm: "10%", xs: "11%" },
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            About Us
          </Typography>
          <AboutSec />
          <Mission />
          <Services style={{ display: "block", overflow: "none" }} />
          <p> </p>
          <Team />
        </Box>
      </Suspense>
    </>
  );
}
