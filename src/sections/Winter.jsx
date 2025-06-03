import Image from "next/image";
import React from "react";

const WinterCollection = () => {
  return (
    <section className="container mx-auto px-5 py-8">
      <div className="py-8 flex flex-col items-end justify-end">
        <h1 className="heading text-2xl md:text-3xl lg:text-5xl font-bold">
          Winter <span className="heading text-2xl">Collections</span>
        </h1>
        <hr className="bg-[#2f2f2f] w-[23%] my-3" />
        <p className="sub-heading text-lg md:text-xl">
          We consider your look and comfort on cold weather.
        </p>
      </div>
      <div className="flex flex-col space-y-8 lg:flex-row lg:items-center lg:justify-center lg:space-x-8">
        {/* left */}
        <div className="flex flex-col space-y-4">
          <p className="sub-heading text-lg md:text-xl max-w-[586px]">
            We provide the largest clothing collection for any season. You can
            choose trendy or classy design according to your preferences. Our
            services are super fast and we update within 24 hours.
          </p>
          <Image
            src={"/assets/images/Group 59.png"}
            alt="fashion girld"
            width={575}
            height={405}
          />
        </div>

        {/* right */}
        <div className="flex flex-col space-y-4 items-end justify-end">
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
          <p className="sub-heading text-lg md:text-xl max-w-[586px]">
            Our main aim is to serve our customer with better quality product.
            We try to understand their needs and provide them within a short
            period of time. We provide the largest clothing collection for any
            season. You can choose trendy or classy design according to your
            preferences. Our services are super fast and we update within 24
            hours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WinterCollection;
