"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-tan pt-16 lg:pt-24">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-8">
            <Link
              href="/"
              className="font-outfit text-base font-medium text-body-color hover:text-dark"
            >
              Home
            </Link>
            <Link
              href="/order"
              className="font-outfit text-base font-medium text-body-color hover:text-dark"
            >
              Order
            </Link>
            <Link
              href="/contact"
              className="font-outfit text-base font-medium text-body-color hover:text-dark"
            >
              Contact
            </Link>
          </div>
          <div className="py-8 text-center">
            <p className="font-outfit text-base text-body-color">
              © {new Date().getFullYear()} All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
