import Image from "next/image";
import { GRADIENTS, ICONS } from "../../../../public/assets";
import Container from "../Container/Container";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";

const CTA = () => {
  return (
    <Container>
      <div className="relative py-24">
        <Image
          src={GRADIENTS.ctaGradientAbove}
          alt=""
          className="absolute top-0 w-full"
        />
        <Image
          src={GRADIENTS.ctaGradientAbove}
          alt=""
          className="absolute bottom-0 w-full rotate-180"
        />
        <div className="flex flex-col items-center justify-center z-10 relative">
          <div className="bg-white border border-neutral-25 rounded-3xl py-1.5 px-3.5 text-neutral-20 flex items-center gap-2 font-Inter w-fit">
            <Image src={ICONS.available} alt="" className="size-5" />
            <p>Available for work</p>
          </div>

          <Heading
            styledHeading="Ready to Grow"
            heading="Your Business With Smart Tech?"
            align="center"
            description="Let’s talk about what’s slowing you down  and build the system that fixes it."
          />

          <div className="flex items-center gap-6 mt-9">
            <Button variant="primary" label="Schedule a Free Call" />
            <Button variant="secondary" label="See All Services" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CTA;
