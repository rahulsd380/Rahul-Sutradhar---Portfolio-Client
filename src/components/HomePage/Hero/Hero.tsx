import Image from "next/image";
import { IMAGES } from "../../../../public/assets";

const Hero = () => {
  return (
    <div className="absolute top-0 w-full">
      <Image src={IMAGES.heroBg} alt="" className="w-full h-screen" />
    </div>
  );
};

export default Hero;
