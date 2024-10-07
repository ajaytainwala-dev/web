"use client";

import React from "react";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const itemData = [
  {
    img: "/Logo/GACS.svg",
    caption: "GACS Logo",
    height: "200",
    width: "300",
  },
  
  {
    img: "/Gallery/Students.webp",
    caption: "Students Writing Exam",
    height: "400",
    width: "300",
  },
  {
    img: "/Gallery/OurClassroom1.webp",
    caption: "GACS Classroom",
    height: "500",
    width: "300",
  },
  {
    img: "/Gallery/ClassRoom.webp",
    caption: "GACS Classroom",
    height: "300",
    width: "300",
  },
  {
    img: "/Gallery/AcademyFR.webp",
    caption: "GACS Classroom",
    height: "300",
    width: "300",
  },
  {
    img: "/Gallery/DiwaliCeleb.webp",
    caption: "Diwali Celebrations",
    height: "250",
    width: "300",
  },
];
export default function MyGallery() {
  const imageStyle = {
    borderRadius: "10px",
    border: "1px solid #fff",
    width: "100%",
    height: "auto",
    objectFit: "cover",
    objectPosition: "center",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
  };
  const options = {
     
      bgOpacity: 0.9,
     
    }
  return (
    <>
    <Box className="dark:bg-gray-900 pt-[7%]">
      <Typography className="bg-white dark:bg-gray-900 text-primary font-bold pt-2 pb-2 dark:text-gray-200"
 variant="h4" align="center" gutterBottom>
        Our Moments
      </Typography>
      <Box
      className="bg-white dark:bg-gray-900"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          p: "1rem",
          bgcolor: "background.paper",
        }}
      >
        <Box className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 min-h-[300px]">
          <Gallery options={options} withCaption>
            {itemData.map((item, index) => (
              <Item
              
                // id={index}
                key={index}
                caption={item.caption}
                original={item.img}
                thumbnail={item.img}
                width={item.width}
                height={item.height}
                className="cursor-pointer my-4"
              >
                {({ ref, open }) => (
                  <Image
                    className="cursor-pointer"
                    ref={ref}
                    onClick={open}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ ...imageStyle }}
                    src={item.img}
                    alt={item.caption}
                    loading="lazy"
                  />
                )}
               
              </Item>
            ))}
          </Gallery>
         
        </Box>
      </Box>
      </Box>
    </>
  );
}
