"use client";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
// import MenuIcon from '@mui/icons-material/Menu';
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import { RiMenu4Fill as MenuIcon } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";
import { GrGallery } from "react-icons/gr";
import { MdOutlinePerson2, MdOutlineRateReview } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { LiaLinkSolid } from "react-icons/lia";
import { MdTipsAndUpdates } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { FaArrowsToEye, FaDoorClosed } from "react-icons/fa6";
import Link from "next/link";
import "./Nav.css"


const menuBtn = [
  {
    name: "About Us",
    icon: (
      <IoInformationCircle
        style={{ padding: "8px", width: "40px", height: "40px" }}
      />
    ),
    link: "/About",
  },
  {
    name: "Gallery",
    icon: (
      <GrGallery style={{ padding: "8px", width: "40px", height: "40px" }} />
    ),
    link: "/Gallery",
  },
  {
    name: "Reviews",
    icon: (
      <MdOutlineRateReview
        style={{ padding: "8px", width: "40px", height: "40px" }}
      />
    ),
    link: "/Reviews",
  },
  {
    name: "Contact Us",
    icon: (
      <IoMdCall style={{ padding: "8px", width: "40px", height: "40px" }} />
    ),
    link: "/Contact",
  },
  {
    name: "FAQs",
    icon: (
      <FaQuestionCircle
        style={{ padding: "8px", width: "40px", height: "40px" }}
      />
    ),
    link: "/FAQs",
  },
];

const stuMenu = [
  {
    name: "Career Guidance",
    icon: (
      <FaArrowsToEye
        style={{ padding: "8px", width: "40px", height: "40px" }}
      />
    ),
    link: "/Career",
  },
  // {
  //   name: "Study Material",
  //   icon: (
  //     <IoBookSharp style={{ padding: "8px", width: "40px", height: "40px" }} />
  //   ),
  //   link: "/StudyMaterial",
  // },
  {
    name: "Updates",
    icon: (
      <MdTipsAndUpdates
        style={{ padding: "8px", width: "40px", height: "40px" }}
      />
    ),
    link: "/Updates",
  },
  {
    name: "Useful Links",
    icon: (
      <LiaLinkSolid style={{ padding: "8px", width: "40px", height: "40px" }} />
    ),
    link: "/Links",
  },
  {
    name: "Academic Calendar",
    icon: (
      <SlCalender style={{ padding: "8px", width: "40px", height: "40px" }} />
    ),
    link: "/AcademicCalendar",
  },
];

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchor, setAnchor] = React.useState(null);
  const doOpen = Boolean(anchor);
  const doClick = (event) => {
    setAnchor(event.currentTarget);
  };
  const doClose = () => {
    setAnchor(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

// const style ={
//   @font-face {
//     font-family: 'Edo';
//     font-style: normal;
//     font-weight: normal;
//     src: url('edo.woff');
//   }
// }

const GoldenColor="#FFD700"
  return (
    // <div className="bg-white dark:bg-gray-800 p-4 relative h-auto">
      <AppBar
        position="fixed"
        sx={{
          // bgcolor: "#478CCF",
          width:"95%",
          p:"5px",
          mx:"auto",
          top:"10px",
          left:"5px",
          right:"5px",
          borderTopLeftRadius: "50px",
          borderTopRightRadius: "50px",
          borderBottomLeftRadius: "50px",
          borderBottomRightRadius: "50px",
          // bgcolor: " rgba( 255, 255, 255, 0.2 )",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: " blur( 3.5px )",
          webkitBackdropFilter: " blur( 3.5px )",
            // border: "1px solid rgba( 255, 255, 255, 0.18 )",
          }}
          className="bg-[rgba(120,104,237,0.25)] dark:bg-white/20   "
          >
          <Container 
        // maxWidth="xl"
        >
          <Toolbar >
            {/* Navbar Icon */}
            <IconButton>
              <Image
                src="/Logo/GACS_Logo.webp"
                width={50}
                height={50}
                alt="GACS Logo"
                priority="true"
              />
            </IconButton>
            {/* Full Screen Name */}
            <Link href="/">
              <Typography
                variant="p"
                sx={{
                  cursor: "pointer",
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  maxWidth: "300px",
                  // fontFamily: "monospace",
                  fontWeight: 600,
                  // color:GoldenColor,
                  // color: "inherit",
                  textDecoration: "none",
                  textWrap: "wrap",
                }}
                className="text-gray-900 dark:text-gray-300 navbar-heading"
              >
                Gyan Academy of Commerce & Science
              </Typography>
            </Link>
            {/* small screeen name */}
            <Link href="/">
              <Typography
                variant="p"
                sx={{
                  cursor: "pointer",
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  // fontFamily: "monospace",
                  fontWeight: 600,
                  fontSize: { xs: 20, md: 24 },
                  lineHeight: { xs: 1 },
                  color: "inherit",
                  textDecoration: "none",
                  textWrap: "wrap",
                }}
                 className="text-gray-900 dark:text-gray-300 navbar-heading"
              >
                Gyan Academy of Commerce & Science
              </Typography>{" "}
            </Link>
            {/* DESKTOP VERSION NAVBAR */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
                alignItems: "center",
                gap:"3px"
              }}
            >
              <Button
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="contained"
                disableElevation
                onClick={open ? handleClose : handleClick}
                endIcon={<FaAngleDown />}
                sx={{
                  // color:GoldenColor,
                  fontWeight:"bolder",
                  bgcolor: "transparent",
                  fontSize:"0.8rem",
                  "&:hover":{
                    bgcolor: "transparent" ,
                    borderRadius:"20px",
                    border:"1px solid white",
                    color:GoldenColor,
                  }
                }}
                 className="text-gray-900 dark:text-gray-300"
              >
                About
              </Button>
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                {menuBtn.map((item) => (
                  <Link key={item.name} href={item.link}>
                    <MenuItem
                      key={item.name}
                      onClick={handleClose}
                      disableRipple
                    >
                      {item.icon}
                      {item.name}
                    </MenuItem>
                  </Link>
                ))}
              </StyledMenu>
              <Button
                id="demo-customized-button"
                aria-controls={doOpen ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={doOpen ? "true" : undefined}
                variant="contained"
                disableElevation
                onClick={doOpen ? doClose : doClick}
                endIcon={<FaAngleDown />}
                sx={{
                  // color:GoldenColor,
                  bgcolor: "transparent",
                   fontSize:"0.8rem",
                   fontWeight:'bolder',
                   "&:hover":{
                    bgcolor: "transparent" ,
                    borderRadius:"20px",
                    border:"1px solid white",
                    color:GoldenColor,
                  }
                }}
                 className="text-gray-900 dark:text-gray-300"
              >
                Students Corner
              </Button>
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchor}
                open={doOpen}
                onClose={doClose}
              >
                {stuMenu.map((item) => (
                  <Link href={item.link} key={item.name}>
                    <MenuItem key={item.name} onClick={doClose} disableRipple>
                      {item.icon}
                      {item.name}
                    </MenuItem>
                  </Link>
                ))}
              </StyledMenu>
              <Link href="/Courses">
                <Button
                  sx={{
                    m: "2px",
                    height: "50px",
                    width: "100%",
                    //  color:GoldenColor,
                    color: "white",
                    fontWeight:"bolder",
                    "&:hover":{
                      bgcolor: "transparent" ,
                      borderRadius:"20px",
                      border:"1px solid white",
                      color:GoldenColor,
                    }
                  }}
                   className="text-gray-900 dark:text-gray-300 hover:border-black dark:hover:border-white"
                >
                  Courses Offered
                </Button>
              </Link>
              <Link href="/Register">
                <Button
                  variant="contained"
                  sx={{
                    // bgcolor: "#074173",
                    fontWeight:"bolder",
                    py:"6px",
                    px:"8px",
                    height: "50px",
                    fontSize:"0.8rem",
                    borderRadius:"8px",
                    // fontSize: { md:"0.8rem",sm: "1rem", xs: "0.8rem" },
                  }}
                   className="bg-indigo-600 text-white dark:text-gray-300"
                >
                  Register Now
                </Button>{" "}
              </Link>
            </Box>
            {/* MOBILE VERSION NAVBAR */}
            <Box
              sx={{ display: { xs: "flex", md: "none" }, marginLeft: "auto" }}
            >
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <Box
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    p: "20px",
                  }}
                >
                  <Button
                    id="demo-customized-button"
                    aria-controls={open ? "demo-customized-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    variant="contained"
                    disableElevation
                    onClick={open ? handleClose : handleClick}
                    endIcon={<FaAngleDown />}
                    sx={{
                      bgcolor: "white",
                      color: "black",
                      m: "10px",
                      "&:hover": {
                        color: "white",
                      },
                    }}
                     className="text-gray-900 dark:text-gray-300"
                  >
                    About
                  </Button>
                  <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                      "aria-labelledby": "demo-customized-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    {menuBtn.map((item) => (
                      <Link key={item.name} href={item.link}>
                        <MenuItem
                          key={item.name}
                          onClick={handleClose}
                          disableRipple
                        >
                          {item.icon}
                          {item.name}
                        </MenuItem>
                      </Link>
                    ))}
                  </StyledMenu>
                  <Button
                    id="demo-customized-button"
                    aria-controls={doOpen ? "demo-customized-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={doOpen ? "true" : undefined}
                    variant="contained"
                    disableElevation
                    onClick={doOpen ? doClose : doClick}
                    endIcon={<FaAngleDown />}
                    sx={{
                      bgcolor: "white",
                      color: "black",
                      m: "10px",
                      "&:hover": {
                        color: "white",
                      },
                    }}
                     className="text-gray-900 dark:text-gray-300"
                  >
                    Students Corner
                  </Button>
                  <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                      "aria-labelledby": "demo-customized-button",
                    }}
                    anchorEl={anchor}
                    open={doOpen}
                    onClose={doClose}
                  >
                    {stuMenu.map((item) => (
                      <Link key={item.name} href={item.link}>
                        <MenuItem
                          key={item.name}
                          onClick={doClose}
                          disableRipple
                        >
                          {item.icon}
                          {item.name}
                        </MenuItem>
                      </Link>
                    ))}
                  </StyledMenu>
                  {/* {pages.map((page) => (
                  <Link
                    href={"/Courses"}
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      olor: "black",
                      display: "block",
                      "&:hover": {
                        bgcolor: "primary.main",
                        color: "white",
                      },
                    }}
                  >
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {page}
                    </Button>
                  </Link>
                ))} */}
                  
                  <Link href="/Courses">
                    <Button
                      sx={{
                        // fontWeight: "bold",
                        m: "2px",
                        height: "50px",
                        width: "100%",
                        color: "black",
                      }}
                       className="text-gray-900 dark:text-gray-300"
                    >
                      Courses Offered
                    </Button>
                  </Link>
                  <Link href="/Register">
                    <Button
                      variant="contained"
                      sx={{ bgcolor: "#074173", height: "50px", width: "100%" }}
                    >
                      Register Now
                    </Button>
                  </Link>
                </Box>
              </Menu>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    // </div>
  );
}
export default ResponsiveAppBar;
