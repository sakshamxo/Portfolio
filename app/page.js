"use client";
import Background from "./components/background";
import Customcursor from "./components/Customcursor";
import Header from "./components/header/Header";
import Loading from "./components/loading";
import { useState } from "react";
import Mainhomepage from "./components/Mainhomepage";
import Footer from "./components/footer/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
export default function Home() {
  const [isLoading, setIsloading] = useState(true);

  return (
    <>
     <SpeedInsights/>
      <Background />
      <Customcursor />
      {isLoading ? (
        <Loading duration={2000} onComplete={() => setIsloading(false)} />
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
