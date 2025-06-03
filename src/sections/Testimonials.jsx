import Image from "next/image";
import React from "react";

const TestimonialSection = () => {
  return (
    <section className="container mx-auto px-5 py-8">
      <div className="py-8 flex flex-col items-end justify-end">
        <h1 className="heading text-2xl">
          What our{" "}
          <span className="md:text-3xl lg:text-5xl font-bold">
            Customers says
          </span>
        </h1>
        <hr className="bg-[#2f2f2f] w-[23%] my-3" />
        <p className="sub-heading text-lg md:text-xl">
          We value our customer&apos;s feedback to provide the best service.
        </p>
      </div>
      <div className="flex flex-col space-y-8 md:flex-row md:items-center md:justify-center md:space-x-20">
        <div>
          <Image
            src={"/assets/images/Rectangle 23.png"}
            alt="the image of a fashion girl"
            width={284}
            height={348}
          />
        </div>
        <div className="flex flex-col space-y-8 items-start justify-between">
          <Image
            src={"/assets/icons/Group.png"}
            alt="inverted comas open"
            width={54}
            height={47.62}
          />
          <p className="sub-heading text-lg md:text-xl max-w-[872px]">
            Ladiesvibe provided me the exact quality product I wanted. I’m very
            much satisfied by their quick delivery process. They delivered my
            dress within a day.
          </p>
          <div className="flex items-center space-x-48 justify-between">
            <div>
              <p className="sub-heading text-lg md:text-xl font-bold">
                Jane Bennet
              </p>
              <p className="sub-heading text-sm">Fashion Model</p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Image
                src={"/assets/icons/Group 61.png"}
                alt="previous button"
                width={60}
                height={60}
                className="cursor-pointer"
              />
              <Image
                src={"/assets/icons/Group 60.png"}
                alt="next button"
                width={60}
                height={60}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
