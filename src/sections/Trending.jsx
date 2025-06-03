import React from "react";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";

const TrendingSection = () => {
  return (
    <section className="container mx-auto px-5 py-8">
      <SectionTitle
        title1={"Trending"}
        title2={"Collections"}
        subTitle={"Have a look on what's trending now!"}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-8">
        <Image
          src={"/assets/images/card.png"}
          alt="card showing fashion girls"
          width={340}
          height={513}
        />
        <Image
          src={"/assets/images/card (1).png"}
          alt="card showing fashion girls"
          width={444}
          height={691}
        />
        <div className="flex flex-col space-y-8 lg:items-end">
          <Image
            src={"/assets/images/card (2).png"}
            alt="card showing fashion girls"
            width={340}
            height={513}
          />
          <button className="border border-[#754F23] text-[#754F23] text-lg md:text-xl rounded-xl py-2 px-6 cursor-pointer flex items-center w-max">
            View All
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

export default TrendingSection;
