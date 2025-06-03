import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-5">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center">
        {/* hero left */}
        <div className="order-2 lg:order-none space-y-8">
          <h1 className="text-3xl md:text-5xl lg:text-7xl heading">
            Elevate Style <br /> Embrace Story
          </h1>
          <p className="sub-heading text-lg md:text-xl max-w-[539px]">
            We provide the largest clothing collection for any season. You can
            choose trendy or classy design according to your preferences. Our
            services are super fast and we update within 24 hours.
          </p>
          <button className="bg-[#754F23] text-white text-lg md:text-xl rounded-xl py-2 px-6 cursor-pointer flex items-center">
            Explore
            <Image
              src={"/assets/icons/Group 54.png"}
              alt="arrow right icon"
              width={34}
              height={14}
              className="ml-4"
            />
          </button>
        </div>

        {/* hero right */}
        <div className="order-1 lg:order-none">
          <Image
            src={"/assets/images/hero_image_2.png"}
            alt="image of a fashion girl"
            width={600}
            height={900}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
