import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/sections/Hero";
import SummerCollection from "@/sections/Summer";
import TestimonialSection from "@/sections/Testimonials";
import TrendingSection from "@/sections/Trending";
import WinterCollection from "@/sections/Winter";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <TrendingSection />
      <SummerCollection />
      <WinterCollection />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default HomePage;
