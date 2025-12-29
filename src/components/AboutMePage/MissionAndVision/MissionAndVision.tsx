import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import { IMAGES } from "../../../../public/assets";
import Button from "@/components/Reusable/Button/Button";

const MissionAndVision = () => {
  const stats = [
    {
      value: "100+",
      title: "Projects Completed",
    },
    {
      value: "20+",
      title: "Industries Served",
    },
    {
      value: "600+",
      title: "Happy client",
    },
    {
      value: "3+",
      title: "Years of Experience",
    },
  ];
  return (
    <div className="py-[100px] relative">
      <div className="size-[344px] rounded-full bg-primary-10 right-0 top-20 absolute blur-[100px]"></div>
      <Container>
        <h3 className="text-white text-[32px] md:text-[48px] lg:text-[40px] xl:text-[55px] mt-[30px] font-Uncut-Sans leading-10 md:leading-14 lg:leading-12 xl:leading-16 text-center">
          <span className="font-Instrument-Serif font-normal italic">
            Mission
          </span>{" "}
          & Vision
        </h3>

        <div className="font-Inter flex gap-12 mt-16">
          <div className="w-[286px] relative">
            <Image
              src={IMAGES.mission}
              alt=""
              className="w-[266px] h-[284px] rounded-xl relative z-10"
            />
            <div className="size-[200px] rounded-full bg-primary-10 right-4 top-[-30px] absolute blur-[100px]"></div>
          </div>
          <div className="flex flex-col gap-6 max-w-[600px]">
            <div>
              <h2 className="text-lg text-white font-bold">Mission:</h2>
              <p className="text-sm md:text-lg lg:text-sm xl:text-lg text-neutral-35 mt-3">
                To empower businesses through digital systems that drive
                measurable growth by combining strategy, design, and automation
                into one seamless experience.
              </p>
            </div>

            <div>
              <h2 className="text-lg text-white font-bold">Vision:</h2>
              <p className="text-sm md:text-lg lg:text-sm xl:text-lg text-neutral-35 mt-3">
                To build a world where digital transformation feels human where
                every tool, website, and workflow helps people work smarter,
                connect better, and achieve more.
              </p>
            </div>
          </div>
          <Image
            src={IMAGES.vision}
            alt=""
            className="w-[266px] h-[284px] rounded-xl"
          />
        </div>
        <div className="flex justify-center mt-10">
          <Button label="Contact Me" />
        </div>

        <div className="grid grid-cols-4 gap-7 mt-13 lg:mt-[70px]">
          {stats?.map((item) => (
            <div
              key={item?.title}
              className="border border-neutral-30 shadow-stat-card p-6 rounded-xl relative overflow-hidden"
            >
              <div className="w-[150px] h-20 blur-[80px] bg-primary-15 absolute top-0 left-32"></div>
              <h2 className="text-white text-[40px] font-semibold font-Uncut-Sans">
                {item?.value}
              </h2>
              <p className="text-white text-2xl font-medium font-Inter mt-6">
                {item?.title}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MissionAndVision;
