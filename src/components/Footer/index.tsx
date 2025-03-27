"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-tan pt-16 lg:pt-24">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-12 flex flex-wrap items-center justify-center gap-8">
            <Link
              href="/"
              className="text-base font-medium text-body-color duration-300 hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/order"
              className="text-base font-medium text-body-color duration-300 hover:text-primary"
            >
              Order
            </Link>
            <Link
              href="/contact"
              className="text-base font-medium text-body-color duration-300 hover:text-primary"
            >
              Contact
            </Link>
          </div>
          <div className="py-8 text-center">
            <p className="text-base text-body-color">
              © {new Date().getFullYear()} All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
