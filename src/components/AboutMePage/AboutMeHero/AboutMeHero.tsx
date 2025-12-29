import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import { IMAGES } from "../../../../public/assets";
import Heading from "@/components/Reusable/Heading/Heading";

const AboutMeHero = () => {
  return (
    <div className="w-full font-Figtree ">
      <Container>
        <div className="relative z-10 flex items-center justify-center mt-20 md:mt-16 lg:mt-28">
          <Heading
            subHeading="About Me"
            styledHeading="Building Technology"
            heading="That Empowers Businesses"
            description="Our goal is to make digital growth accessible for every brand simple, effective, and built to scale."
          />
        </div>
      </Container>
      {/* Bg img */}
      <Image
        src={IMAGES.aboutMeHero}
        alt=""
        className="w-full absolute top-0 h-[500px] lg:h-[700px]"
      />
    </div>
  );
};

export default AboutMeHero;