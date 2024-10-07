"use client";
import Image from "next/image";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Class9And10 from "./Class9And10";
import Class11And12 from "./Class11And12";
import Degree from "./Degree";
import Professional from "./Professional";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ width: "100%", borderRadius: "10px" }}
      className="bg-gray-700 shadow-lg shadow-white-500/60 my-5"
    >
      <Box sx={{ borderBottom: 2, borderColor: "black", p: "5px" }}>
        <Tabs
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable auto tabs example"
          value={value}
          onChange={handleChange}
          sx={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
          }}
        >
          <Tab
            label="Class 9 & 10"
            className="text-white  font-bold"
            {...a11yProps(0)}
          />

          <Tab
            label="Class 11 & 12"
            className="text-white font-bold"
            {...a11yProps(1)}
          />

          <Tab
            label="Degree Programs"
            className="text-white  font-bold"
            {...a11yProps(2)}
          />
          <Tab
            label="CA | CMA | CS Foundation"
            className="text-white  font-bold"
            {...a11yProps(3)}
          />
          {/* <Tab
            label="Other Programs"
            className="text-white   font-bold"
            {...a11yProps(2)}
          /> */}
        </Tabs>
      </Box>
      {/* Class 9 & 10 */}
      <CustomTabPanel value={value} index={0}>
        <Class9And10 />
      </CustomTabPanel>
      {/* Class 11 & 12 */}
      <CustomTabPanel value={value} index={1}>
        <Class11And12 />
      </CustomTabPanel>
      {/* Degree Programs */}
      <CustomTabPanel value={value} index={2}>
        <Degree />
      </CustomTabPanel>
      {/* Professional Courses */}
      <CustomTabPanel value={value} index={3}>
        <Professional />
      </CustomTabPanel>
    </Box>
  );
}

const page = () => {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font mx-auto">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-12 flex flex-col md:items-center md:text-left mb-16 md:mb-0 justify-center items-center text-center">
            <h1 className="title-font  font-bold dark:text-gray-300 py-3 text-[1.5rem] ">
              Before they Choose your path to success at Gyan Academy
            </h1>
            <p className="mb-8 leading-relaxed ">
              Best education for classes 9-10, 11-12, CA, CS, CMA, BCom, MCom,
              MBA, and more.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              width={300}
              height={200}
              alt="Courses Start Image"
              src="/Placeholder/Courses01.webp"
              loading="lazy"
              style={{ borderRadius: "10px" }}
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      <div className=" px-5 dark:bg-gray-900 md:pt-1 py-5">
        <BasicTabs />
      </div>

      <div className="dark:bg-gray-900 py-4 px-5">
        <h5 className="text-center font-bold text-indigo-400">
          *If you don&apos;t find the related course or subject, please contact the administrator.
        </h5>
      </div>
    </>
  );
};

export default page;
