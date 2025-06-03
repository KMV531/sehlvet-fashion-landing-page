"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const categories = [
    { name: "Home", path: "/" },
    { name: "Collections", path: "/" },
    { name: "Brands", path: "/" },
    { name: "About Us", path: "/" },
  ];
  return (
    <header className="container mx-auto px-5 p-10">
      <div className="flex items-center justify-between">
        <div>
          <Image
            src={"/assets/images/Sehlvet.png"}
            alt="Sehlvet logo"
            width={120}
            height={48}
          />
        </div>
        <nav className="hidden md:flex items-center justify-center space-x-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.path}
              className="text-2xl sub-heading"
            >
              {category.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center justify-center space-x-8">
          <Image
            src={"/assets/icons/Bookmark.png"}
            alt="Bookmark Icon"
            width={24.52}
            height={30}
            className="cursor-pointer"
          />
          <div className="relative cursor-pointer">
            <Image
              src={"/assets/icons/Bag.png"}
              alt="Bag Icon"
              width={28.36}
              height={30}
            />
            <span className="text-white sub-heading absolute top-0 left-0 bg-[#754F23] text-sm rounded-full px-1.5">
              6
            </span>
          </div>
        </div>
        <button
          variant="ghost"
          size="icon"
          className="md:hidden cursor-pointer"
          onClick={toggleMobileMenu}
        >
          <Menu size={24} />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-5 z-50 bg-[#f0eadc]">
          <div className="container-custom py-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold heading">Menu</h2>
              <button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                className="cursor-pointer"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex items-center justify-between flex-col space-y-8">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.path}
                  className="text-lg sub-heading"
                  onClick={toggleMobileMenu}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
