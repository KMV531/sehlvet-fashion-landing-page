import Header from "@/components/Header";
import HeroSection from "@/sections/Hero";
import SummerCollection from "@/sections/Summer";
import TrendingSection from "@/sections/Trending";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <TrendingSection />
      <SummerCollection />
    </div>
  );
};

export default HomePage;
