import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const categories = [
    { name: "Home", path: "/" },
    { name: "Collections", path: "/" },
    { name: "Brands", path: "/" },
    { name: "About Us", path: "/" },
  ];

  return (
    <footer className="bg-[#754F23] text-white p-10">
      <section className="container mx-auto px-5">
        <div className="flex flex-col space-y-8 lg:flex-row lg:items-center lg:justify-between lg:space-x-8">
          <div className="flex flex-col space-y-4 items-start">
            <Image
              src={"/assets/images/Sehlvet_white.png"}
              alt="logo white"
              width={80}
              height={32}
            />
            <span className="text-lg">
              © {new Date().getFullYear()} Sehlvet. All rights reserved.
            </span>
            <div className="flex items-center justify-center space-x-4">
              <Image
                src={"/assets/icons/facebookIcon.png"}
                alt="facebook icon"
                width={11}
                height={20}
                className="cursor-pointer"
              />
              <Image
                src={"/assets/icons/linkedInIcon.png"}
                alt="linked In icon"
                width={20}
                height={19}
                className="cursor-pointer"
              />
              <Image
                src={"/assets/icons/twitterIcon.png"}
                alt="twitter icon"
                width={22}
                height={17.94}
                className="cursor-pointer"
              />
              <Image
                src={"/assets/icons/instagramIcon.png"}
                alt="instagram icon"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </div>
          </div>
          <nav className="flex flex-col items-start justify-center space-y-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.path}
                className="text-xl sub-heading"
              >
                {category.name}
              </Link>
            ))}
          </nav>
          <div className="sub-heading flex flex-col items-start justify-center space-y-4 text-xl">
            <span>Contact Us</span>
            <span>525-252-4244</span>
            <span>sehlvet@gmail.com</span>
            <span>www.sehlvet.com</span>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
