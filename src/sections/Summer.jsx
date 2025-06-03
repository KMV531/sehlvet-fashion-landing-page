import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import React from "react";

const SummerCollection = () => {
  return (
    <section className="container mx-auto px-5 py-8">
      <SectionTitle
        title1={"Summer"}
        title2={"Collections"}
        subTitle={"We consider  your look and comfort on scorching weather."}
      />
      <div className="flex flex-col space-y-8 lg:flex-row lg:items-center lg:justify-center lg:space-x-8">
        {/* left section */}
        <div className="flex flex-col space-y-8">
          <Image
            src={"/assets/images/Rectangle 14.png"}
            alt="three fashion girls standing"
            width={410}
            height={521}
          />
          <p className="sub-heading max-w-[543px] text-lg md:text-xl">
            Our main aim is to serve our customer with better quality product.
            We try to understand their needs and provide them within a short
            period of time.
          </p>
        </div>

        {/* right section */}
        <div className="flex flex-col space-y-8 items-end">
          <p className="sub-heading max-w-[543px] text-lg md:text-xl order-2 lg:order-none">
            We provide the largest clothing collection for any season. You can
            choose trendy or classy design according to your preferences. Our
            services are super fast and we update within 24 hours.
          </p>
          <Image
            src={"/assets/images/Group 58.png"}
            alt="fashion girls standing"
            width={525}
            height={547}
            className="order-1 lg:order-none pb-2"
          />
          <button className="order-2 lg:order-none border border-[#754F23] text-[#754F23] text-lg md:text-xl rounded-xl py-2 px-6 cursor-pointer flex items-center w-max">
            Explore All
            <Image
              src={"/assets/icons/Group 1.png"}
              alt="arrow right icon"
              width={34}
              height={14}
              className="ml-4"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SummerCollection;
