"use client";
import Background from "./components/background";
import Customcursor from "./components/Customcursor";
import Header from "./components/header/Header";
import Loading from "./components/loading";
import { useEffect, useState } from "react";
import Mainhomepage from "./components/Mainhomepage";
import Footer from "./components/footer/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem("visited");
    if (hasVisited) {
      setIsLoading(false); // Skip loading screen if visited before
    } else {
      localStorage.setItem("visited", "true"); // Store the flag in localStorage
      setTimeout(() => {
        setIsLoading(false); // Hide loading screen after 2 seconds
      }, 2000);
    }
  }, []);

  return (
    <>
     <SpeedInsights/>
      <Background />
      <Customcursor />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Mainhomepage />
          <Footer />
        </>
      )}
    </>
  );
}
