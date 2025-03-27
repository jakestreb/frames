"use client";

import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-red pb-16 pt-[120px] md:pb-[80px] md:pt-[150px] xl:pb-[120px] xl:pt-[180px] 2xl:pb-[160px] 2xl:pt-[210px] min-h-[100vh]"
      >
        <div className="absolute inset-0 z-20 flex justify-center mt-[60px]">
          <Image
            src="/images/hero/sun.png"
            alt="sun decoration"
            width={400}
            height={400}
            className="absolute top-[5%] right-[10%] z-20"
          />
          <Image
            src="/images/hero/plant-1.png"
            alt="plant decoration"
            width={350}
            height={350}
            className="absolute left-[calc(50%-400px)] md:left-[calc(50%-400px)] lg:left-[5%] xl:left-[10%] 2xl:left-[15%] top-[75%] -translate-y-1/2 z-20"
          />
          <Image
            src="/images/hero/plant-2.png"
            alt="plant decoration"
            width={400}
            height={400}
            className="absolute right-[calc(50%-400px)] md:right-[calc(50%-400px)] lg:right-[5%] xl:right-[10%] 2xl:right-[15%] top-[80%] -translate-y-1/2 z-20"
          />
          <div className="relative w-[500px] z-30 mt-[250px]">
            <Image
              src="/images/about/frame_fake.png"
              alt="frame"
              width={500}
              height={500}
              className="w-full"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[5000px] h-[250px] z-10">
          <Image
            src="/images/hero/ground-border.png"
            alt="ground border"
            width={10000}
            height={500}
            unoptimized
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
