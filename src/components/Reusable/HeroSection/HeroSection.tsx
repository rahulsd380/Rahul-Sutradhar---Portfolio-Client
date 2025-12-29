import Image from "next/image";
import Container from "../Container/Container";
import Heading from "../Heading/Heading";
import { IMAGES } from "../../../../public/assets";

const HeroSection = ({
  subHeading,
  styledHeading,
  heading,
  description,
}: {
  subHeading: string;
  styledHeading: string;
  heading: string;
  description?: string;
}) => {
  return (
    <div className="w-full font-Figtree">
      <Container>
        <div className="relative z-10 flex items-center justify-center mt-20 md:mt-16 lg:mt-28">
          <Heading
            subHeading={subHeading}
            styledHeading={styledHeading}
            heading={heading}
            description={description}
          />
        </div>
      </Container>
      {/* Bg img */}
      <Image
        src={IMAGES.aboutMeHero}
        alt=""
        className="w-full absolute top-0 h-[500px] xl:h-[700px]"
      />
    </div>
  );
};

export default HeroSection;
