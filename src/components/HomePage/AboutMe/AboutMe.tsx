import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import { ICONS } from "../../../../public/assets";
import Button from "@/components/Reusable/Button/Button";

const AboutMe = () => {
  const STATS = [
    { id: "projects", title: "Projects Delivered", value: "300+" },
    { id: "clients", title: "Happy Clients", value: "300+" },
    { id: "experience", title: "Experience (Years)", value: "3+" },
  ];
  return (
    <Container>
      <div className="py-[100px] flex gap-9 mt-28">
        <div className="w-[30%]">
          <div className="flex items-center gap-2.5">
            <Image
              src={ICONS.blueStar}
              alt="Blue Star Icon"
              className="size-[22px]"
            />
            <h3 className="font-Inter text-xl font-semibold text-white">
              About me
            </h3>
          </div>
          <h3 className="text-white text-[55px] mt-[30px] font-Uncut-Sans leading-16">
            <span className="font-Instrument-Serif font-normal italic">
              Building digital
            </span>{" "}
            solutions with purpose
          </h3>
        </div>

        <div className="w-[70%] flex flex-col gap-10">
          <div className="grid grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat?.id}>
                <h2 className="text-white text-[40px] font-Uncut-Sans">
                  {stat?.value}
                </h2>
                <p className="text-neutral-35 font-Inter mt-3">{stat?.title}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-white font-Inter">
            I’m Rahul a developer who loves solving real business problems with
            smart software. I build digital systems that make work simple, help
            teams grow faster, and turn ideas into results.
            <br />
            <br />
            My focus isn’t just design or code it’s impact. Every project I take
            on aims to save time, boost revenue, and keep your business running
            smoother.
          </p>
          <Button label="Read More" />
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;
