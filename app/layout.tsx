import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import NextTopLoader from 'nextjs-toploader';
import "./globals.css";
import localFont from 'next/font/local';


// const inter = Inter({ subsets: ["latin"] 
export const metadata: Metadata = {
  title: "Gyan Academy - GACS",
  description:
    "An educational institution providing commerce and science courses for students at Gyan Academy of Commerce and Science.",
    icons: {
      icon: [
        { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
      ],
    },
    // links: [
    //   { rel: "preconnect", href: "https://fonts.gstatic.com" },
    //   { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" },
    // ],                  
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body 
     
      >
       <NextTopLoader 
       height={5}
       showSpinner={false}

       />
        <NavBar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
