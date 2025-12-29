import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import { GRADIENTS, IMAGES } from "../../../../public/assets";
import Heading from "@/components/Reusable/Heading/Heading";
import { GoStarFill } from "react-icons/go";
import { LuLaptopMinimalCheck } from "react-icons/lu";

const AboutMe = () => {
  return (
    <div className="py-[100px] relative mt-40">
      <Image
        src={GRADIENTS.aboutMeGradient}
        alt=""
        className="absolute left-0 -top-32 md:-top-96"
      />
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16 xl:gap-0 z-10 relative">
          <div className="w-full lg:w-1/2">
            <Heading
              subHeading="About me"
              styledHeading="Building digital"
              heading="solutions with purpose"
              align="left"
            />
            <p className="text-sm md:text-lg lg:text-sm xl:text-lg text-white font-Inter mt-8">
              I’m Rahul a developer who loves solving real business problems
              with smart software. I build digital systems that make work
              simple, help teams grow faster, and turn ideas into results.
              <br />
              <br />
              My focus isn’t just design or code it’s impact. Every project I
              take on aims to save time, boost revenue, and keep your business
              running smoother.
            </p>
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
    </div>
  );
};

export default AboutMe;
