import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"


export const metadata = {
  title: "Saksham Soni - Full Stack Developer",
  description:
    "Hello, I am Saksham, a software developer skilled in developing on React.js, Next.js, Node.js, WordPress, Shopify, and the MERN stack. In the last 1.5 years, I have focused on creating seamless web applications and dynamic user interfaces, building scalable MERN stack solutions",
    keywords: ["Saksham Soni", "Full Stack Developer", "Software Developer","Next.js", "React.js", "MERN", "Shopify Development", "Web Development", "Full-Stack Web Developer", "Node.js", "Express.js", "MongoDB"],
    author: "Saksham Soni" ,
    creator: 'Saksham Soni',
    alternates:{
      canonical: '/',
      languages:{
        'en-US': 'en-US',
        'en-UK': 'en-UK',
      }
    },
    openGraph: {
      title: "Saksham Soni | Portfolio",
      description: "Explore Saksham Soni's portfolio and projects.",
    },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SpeedInsights/>
      <body
        id="top"
        className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10 xl:px-16 overflow-x-hidden scroll-smooth"
      >
        {children}
      </body>
    </html>
  );
}
