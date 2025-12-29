"use client";
import { motion, Variants } from "framer-motion";
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
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.21, 0.45, 0.32, 0.9],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full font-Figtree overflow-hidden"
    >
      <Container>
        <motion.div
          variants={contentVariants}
          className="relative z-10 flex items-center justify-center mt-20 md:mt-16 lg:mt-28"
        >
          <Heading
            subHeading={subHeading}
            styledHeading={styledHeading}
            heading={heading}
            description={description}
          />
        </motion.div>
      </Container>

      {/* Animated Background Image */}
      <div className="w-full absolute top-0 left-0 h-[500px] xl:h-[700px] -z-10">
        <Image
          src={IMAGES.aboutMeHero}
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </div>
    </motion.div>
  );
};

export default HeroSection;
