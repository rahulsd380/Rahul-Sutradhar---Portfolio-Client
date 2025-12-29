import Container from "@/components/Reusable/Container/Container";
import Button from "@/components/Reusable/Button/Button";
import Heading from "@/components/Reusable/Heading/Heading";

const AboutMe = () => {
  const STATS = [
    { id: "projects", title: "Projects Delivered", value: "300+" },
    { id: "clients", title: "Happy Clients", value: "300+" },
    { id: "experience", title: "Experience (Years)", value: "3+" },
  ];
  return (
    <Container>
      <div className="py-[100px] flex flex-col lg:flex-row gap-9 mt-10 lg:mt-28">
        <div className="w-full lg:w-[30%]">
          <Heading
            subHeading="About me"
            styledHeading="Building digital"
            heading="solutions with purpose"
            align="left"
          />
        </div>

        <div className="w-full lg:w-[70%] flex flex-col gap-10">
          <div className="grid grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat?.id}>
                <h2 className="text-white text-2xl md:text-[40px] font-Uncut-Sans">
                  {stat?.value}
                </h2>
                <p className="text-neutral-35 font-Inter mt-3 text-sm md:text-base">
                  {stat?.title}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm md:text-lg lg:text-sm xl:text-lg text-white font-Inter">
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
