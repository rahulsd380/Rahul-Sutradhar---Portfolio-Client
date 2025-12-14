import Image from "next/image";
import { ICONS, IMAGES } from "../../../../public/assets";
import Container from "@/components/Reusable/Container/Container";
import Link from "next/link";
import { RxArrowTopRight } from "react-icons/rx";
import { GoStarFill } from "react-icons/go";
import { LuLaptopMinimalCheck } from "react-icons/lu";

const Hero = () => {
  return (
    <div className="absolute top-0 w-full font-Figtree">
      <Container>
        <div className="relative z-10 flex items-center justify-between mt-64">
          {/* Left side contents */}
          <div className="max-w-[700px]">
            <div className="bg-white border border-neutral-25 rounded-3xl py-1.5 px-3.5 text-neutral-20 flex items-center gap-2 font-Inter w-fit">
              <Image src={ICONS.available} alt="" className="size-5" />
              <p>Available for work</p>
            </div>
            <h1 className="text-white font-bold text-[60px] leading-20 mt-6 font-Uncut-Sans">
              Hi, I’m Rahul I Build <span className="font-Instrument-Serif font-normal italic">Digital Solutions</span> That Help Businesses Grow
              Faster
            </h1>
            <p className="text-lg text-white font-Inter mt-6">
              From custom websites to full automation systems, I design tools
              that save time, increase revenue, and make business easier to run.
            </p>

            <div className="flex items-center gap-6 mt-10">
              <Link
                href={"/"}
                className="bg-primary-10 border border-primary-15 rounded-lg shadow-button px-7 py-[13px] text-white font-semibold font-Figtree flex items-center gap-2 w-fit"
              >
                Start Your Project
                <RxArrowTopRight className="text-xl font-extrabold" />
              </Link>
              <Link
                href={"/"}
                className="bg-white border border-white rounded-lg shadow-button px-7 py-[13px] text-neutral-15 font-semibold font-Figtree flex items-center gap-2 w-fit"
              >
                See Our Work
                <RxArrowTopRight className="text-xl font-extrabold" />
              </Link>
            </div>
          </div>

          <div className="w-[500px] relative mt-20">
            <Image src={IMAGES.profileImgBg} alt="" className="" />
            <Image
              src={IMAGES.rahulSutradhar}
              alt=""
              className="absolute -top-16 right-0 w-[400px]"
            />

            <div className="border border-neutral-30 rounded-[10px] pl-1.5 py-1.5 pr-4 flex items-center gap-2.5 w-fit bg-neutral-30 shadow-stat-card absolute top-20 -right-20">
              <div className="bg-gradient-primary size-[50px] text-white font-Inter font-semibold rounded-xl flex items-center justify-center">
                50+
              </div>
              <div>
                <p className="text-white font-medium">4.9/5 Rating </p>
                <div className="flex items-center gap-1 mt-1.5">
                  {[1, 2, 3, 4, 5]?.map((_, index) => (
                    <GoStarFill key={index} className="text-orange-500" />
                  ))}
                </div>
              </div>
            </div>

            <div className="border border-neutral-30 rounded-[10px] pl-1.5 py-1.5 pr-4 flex items-center gap-2.5 w-fit bg-neutral-30 shadow-stat-card absolute -left-1 bottom-20">
              <div className="bg-gradient-primary size-[50px] text-white font-Inter font-semibold rounded-xl flex items-center justify-center">
                <LuLaptopMinimalCheck className="text-2xl font-bold" />
              </div>
              <div>
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
