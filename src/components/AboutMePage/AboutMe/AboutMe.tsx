"use client";
import { motion, Variants } from "framer-motion";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import { GRADIENTS, IMAGES } from "../../../../public/assets";
import Heading from "@/components/Reusable/Heading/Heading";
import { GoStarFill } from "react-icons/go";
import { LuLaptopMinimalCheck } from "react-icons/lu";

const AboutMe = () => {
  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageAreaVariants: Variants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardRightVariants: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 10, delay: 0.8 },
    },
  };

  const cardLeftVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 10, delay: 1 },
    },
  };

  return (
    <div className="py-[100px] relative mt-28 lg:mt-40 overflow-hidden">
      {/* Background Gradient Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute left-0 -top-32 md:-top-96 -z-10"
      >
        <Image src={GRADIENTS.aboutMeGradient} alt="" />
      </motion.div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16 xl:gap-0 z-10 relative"
        >
          {/* Left Side: Content */}
          <motion.div variants={textVariants} className="w-full lg:w-1/2">
            <Heading
              subHeading="About me"
              styledHeading="Building digital"
              heading="solutions with purpose"
              align="left"
            />
            <motion.p
              variants={textVariants}
              className="text-sm md:text-lg lg:text-sm xl:text-lg text-white font-Inter mt-8 leading-relaxed"
            >
              I’m Rahul a developer who loves solving real business problems
              with smart software. I build digital systems that make work
              simple, help teams grow faster, and turn ideas into results.
              <br />
              <br />
              My focus isn’t just design or code—it’s impact. Every project I
              take on aims to save time, boost revenue, and keep your business
              running smoother.
            </motion.p>
          </motion.div>

          {/* Right Side: Interactive Image Section */}
          <motion.div
            variants={imageAreaVariants}
            className="w-60 md:w-[350px] xl:w-[500px] relative mt-20"
          >
            {/* SPINNING ORB: Isolated rotation */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="w-full"
            >
              <Image src={IMAGES.profileImgBg} alt="" className="w-full" />
            </motion.div>

            {/* Static Portrait */}
            <Image
              src={IMAGES.rahulSutradhar}
              alt="Rahul Sutradhar"
              className="absolute -top-16 right-0 w-[400px] z-10 pointer-events-none"
            />

            {/* Floating Card: Rating */}
            <motion.div
              variants={cardRightVariants}
              className="border border-neutral-30 rounded-[10px] pl-1.5 py-1.5 pr-4 flex items-center gap-2.5 w-fit bg-neutral-30 shadow-stat-card absolute top-20 lg:top-40 -right-10 md:-right-20 lg:-right-10 2xl:-right-20 z-20"
            >
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
            </motion.div>

            {/* Floating Card: Skills */}
            <motion.div
              variants={cardLeftVariants}
              className="border border-neutral-30 rounded-[10px] pl-1.5 py-1.5 pr-4 flex items-center gap-2.5 w-fit bg-neutral-30 shadow-stat-card absolute -left-12 md:-left-1 bottom-0 2xl:bottom-20 z-20"
            >
              <div className="bg-gradient-primary size-9 md:size-[50px] text-white font-Inter font-semibold rounded-xl flex items-center justify-center">
                <LuLaptopMinimalCheck className="text-2xl font-bold" />
              </div>
              <div className="text-sm md:text-base">
                <p className="text-white font-medium">Web + AI </p>
                <p className="text-white font-medium">Automation </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default AboutMe;