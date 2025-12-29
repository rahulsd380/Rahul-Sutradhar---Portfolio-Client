import Image from "next/image";
import { ICONS, IMAGES } from "../../../../public/assets";
import Container from "@/components/Reusable/Container/Container";
import Link from "next/link";
import { GoStarFill } from "react-icons/go";
import { LuLaptopMinimalCheck } from "react-icons/lu";
import Button from "@/components/Reusable/Button/Button";

const Hero = () => {
  return (
    <div className="w-full font-Figtree">
      <Container>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-14 lg:gap-0 mt-20 md:mt-16 lg:mt-40">
          {/* Left side contents */}
          <div className="max-w-full lg:max-w-[500px] xl:max-w-[700px]">
            <div className="bg-white border border-neutral-25 rounded-3xl py-1.5 px-3.5 text-neutral-20 flex items-center gap-2 font-Inter text-sm md:text-base w-fit">
              <Image src={ICONS.available} alt="" className="size-5" />
              <p>Available for work</p>
            </div>
            <h1 className="text-white font-bold text-[32px] md:text-[48px] lg:text-[40px] xl:text-[60px] leading-10 md:leading-14 lg:leading-12 xl:leading-17 2xl:leading-20 mt-6 font-Uncut-Sans">
              I Build{" "}
              <span className="font-Instrument-Serif font-normal italic">
                Digital Solutions
              </span>{" "}
              That Help Businesses Grow Faster
            </h1>
            <p className="text-sm md:text-lg lg:text-sm xl:text-lg text-white font-Inter mt-6">
              From custom websites to full automation systems, I design tools
              that save time, increase revenue, and make business easier to run.
            </p>

            <div className="flex items-center gap-3 md:gap-6 mt-10">
              <Link href={"/"}>
                <Button label="Start Your Project" />
              </Link>
              <Link href={"/"}>
                <Button variant="secondary" label="View Portfolio" />
              </Link>
            </div>
          </div>

          <div className="w-60 md:w-[350px] xl:w-[500px] relative mt-20">
            <Image src={IMAGES.profileImgBg} alt="" className="" />
            <Image
              src={IMAGES.rahulSutradhar}
              alt=""
              className="absolute -top-16 right-0 w-[400px]"
            />

            <div className="border border-neutral-30 rounded-[10px] pl-1.5 py-1.5 pr-4 flex items-center gap-2.5 w-fit bg-neutral-30 shadow-stat-card absolute top-20 lg:top-40 -right-10 md:-right-20 lg:-right-10 2xl:-right-20">
              <div className="bg-gradient-primary size-9 md:size-[50px] text-white font-Inter font-semibold rounded-xl flex items-center justify-center text-sm md:text-base">
                50+
              </div>
              <div>
                <p className="text-white font-medium text-sm md:text-base">
                  4.9/5 Rating{" "}
                </p>
                <div className="flex items-center gap-1 mt-1.5">
                  {[1, 2, 3, 4, 5]?.map((_, index) => (
                    <GoStarFill
                      key={index}
                      className="text-orange-500 text-sm md:text-base"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="border border-neutral-30 rounded-[10px] pl-1.5 py-1.5 pr-4 flex items-center gap-2.5 w-fit bg-neutral-30 shadow-stat-card absolute -left-12 md:-left-1 bottom-0 2xl:bottom-20">
              <div className="bg-gradient-primary size-9 md:size-[50px] text-white font-Inter font-semibold rounded-xl flex items-center justify-center">
                <LuLaptopMinimalCheck className="text-2xl font-bold" />
              </div>
              <div className="text-sm md:text-base">
                <p className="text-white font-medium">Web + AI </p>
                <p className="text-white font-medium">Automation </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* Bg img */}
      <Image
        src={IMAGES.heroBg}
        alt=""
        className="w-full h-screen absolute top-0"
      />
    </div>
  );
};

export default Hero;
