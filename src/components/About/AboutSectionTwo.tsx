"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const AboutSectionTwo = () => {
  const [hoveredSize, setHoveredSize] = useState<string | null>(null);

  return (
    <section id="about" className="py-16 md:py-20 lg:py-28 bg-tan">
      <div className="container">
        <div className="flex justify-center">
          <div className="w-full px-4 lg:w-2/3">
            <div className="max-w-[1000px] mx-auto">
              <div className="grid grid-cols-1 gap-4">
                {/* First Row */}
                <div className="flex items-center justify-between h-[250px]">
                  <div className="w-1/2 m-6 text-end">
                    <h3 className="font-darumadrop text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl mb-4">
                      100% Solid Hardwood
                    </h3>
                    <p className="font-outfit text-sm font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      All frames are made from solid American oak and walnut
                    </p>
                  </div>
                  <div className="w-1/2 flex justify-center">
                    <Image
                      src="/images/about/planks.png"
                      alt="Wood icon"
                      width={250}
                      height={250}
                      className="w-[250] h-[250]"
                    />
                  </div>
                </div>

                {/* Second Row */}
                <div className="flex items-center justify-between text-right h-[250px]">
                  <div className="w-1/2 flex justify-center">
                    <Image
                      src="/images/about/truck.png"
                      alt="Free delivery icon"
                      width={250}
                      height={250}
                      className="w-[250] h-[250]"
                    />
                  </div>
                  <div className="w-1/2 m-6 text-start">
                    <h3 className="font-darumadrop text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl mb-4">
                      Free Shipping
                    </h3>
                    <p className="font-outfit text-sm font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      All orders ship free within the continental US
                    </p>
                  </div>
                </div>

                {/* Third Row */}
                <div className="flex items-center justify-between h-[250px]">
                  <div className="w-1/2 m-6 text-end">
                    <h3 className="font-darumadrop text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl mb-4">
                      Frame Any Print
                    </h3>
                    <p className="font-outfit text-sm font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      Custom sizing up to 24" x 36"
                    </p>
                  </div>
                  <div className="w-1/2 flex justify-center">
                    <Image
                      src="/images/about/sizing.png"
                      alt="Sizing icon"
                      width={250}
                      height={250}
                      className="w-[250] h-[250]"
                    />
                  </div>
                </div>

                {/* Fourth Row */}
                <div className="flex items-center justify-between text-right h-[250px]">
                  <div className="w-1/2 flex justify-center">
                    <Image
                      src="/images/about/ga.png"
                      alt="Georgia"
                      width={250}
                      height={250}
                      className="w-[250] h-[250]"
                    />
                  </div>
                  <div className="w-1/2 m-6 text-start">
                    <h3 className="font-darumadrop text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl mb-4">
                      Made in the USA
                    </h3>
                    <p className="font-outfit text-sm font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      Handcrafted with love in Atlanta, GA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
