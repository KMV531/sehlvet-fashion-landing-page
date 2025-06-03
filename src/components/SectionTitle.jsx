import React from "react";

const SectionTitle = ({ title1, title2, subTitle }) => {
  return (
    <div className="py-8">
      <h1 className="heading text-2xl md:text-3xl lg:text-5xl font-bold">
        {title1} <span className="heading text-2xl">{title2}</span>
      </h1>
      <hr className="bg-[#2f2f2f] w-[23%] my-3" />
      <p className="sub-heading text-lg md:text-xl">{subTitle}</p>
    </div>
  );
};

export default SectionTitle;
