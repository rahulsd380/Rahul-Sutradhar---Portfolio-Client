import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import { GRADIENTS, IMAGES } from "../../../../public/assets";
import Heading from "@/components/Reusable/Heading/Heading";

const HowItWorks = () => {
  const processSteps = [
    {
      id: "01.",
      title: "Discovery & Strategy",
      description:
        "We start with a short call to understand your goals, audience, and what's slowing growth. Together, we map out what actually moves.",
    },
    {
      id: "02.",
      title: "Plan & Prototype",
      description:
        "You'll get a clear roadmap and a quick prototype so you can see the direction early. This helps make smart decisions before we start building.",
    },
    {
      id: "03.",
      title: "Design & Build",
      description:
        "Clean design meets reliable code built for performance, SEO, and easy updates. You'll see real progress through live previews every step.",
    },
    {
      id: "04.",
      title: "Review & Launch",
      description:
        "Once it's ready, we test everything together and go live. I handle all the tech setup so you can focus on running your business.",
    },
  ];

  return (
    <div className="relative py-[100px] overflow-hidden">
      <Image
        src={GRADIENTS.howItWorksGradient}
        alt=""
        className="absolute left-0 -top-32 md:-top-96"
      />
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16 xl:gap-0 z-10 relative">
          <div className="w-full lg:w-1/2">
            <Heading
              subHeading="How It Work"
              styledHeading="Building digital"
              heading="solutions with purpose"
              align="left"
            />
            <Image src={IMAGES.howItWorks} alt="" className="mt-10" />
          </div>

          <div className="flex flex-col gap-10 lg:gap-14 2xl:gap-18 w-full lg:w-1/2">
            {processSteps?.map((step, index) => (
              <div key={step?.id} className="flex gap-8 items-start relative">
                {index !== processSteps?.length - 1 && (
                  <div className="border border-dashed border-primary-15 w-0.5 h-25 absolute left-5 top-12"></div>
                )}
                <div className="min-w-10 h-10 border border-neutral-30 bg-gradient-primary rounded-full flex items-center justify-center text-white font-Inter font-medium">
                  {step?.id}
                </div>
                <div className="flex-1">
                  <h2 className="text-white font-Uncut-Sans text-lg md:text-xl font-medium">
                    {step?.title}
                  </h2>
                  <p className="text-neutral-35 font-Inter mt-2 text-xs md:text-base">
                    {step?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HowItWorks;
