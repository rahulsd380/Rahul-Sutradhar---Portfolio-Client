"use client";
import Image from "next/image";
import { ICONS, IMAGES } from "../../../../public/assets";
import Container from "@/components/Reusable/Container/Container";
import Link from "next/link";
import { GoStarFill } from "react-icons/go";
import { LuLaptopMinimalCheck } from "react-icons/lu";
import Button from "@/components/Reusable/Button/Button";
import { motion, Variants } from "framer-motion";

const Hero = () => {
  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const fadeInUp:Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants:Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const floatingCardRight:Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 1, duration: 0.6, type: "spring", stiffness: 100 },
    },
  };

  const floatingCardLeft:Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 1.2, duration: 0.6, type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="w-full font-Figtree">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-14 lg:gap-0 mt-20 md:mt-16 lg:mt-40"
        >
          {/* Left side contents */}
          <div className="max-w-full lg:max-w-[500px] xl:max-w-[700px]">
            <motion.div
              variants={fadeInUp}
              className="bg-white border border-neutral-25 rounded-3xl py-1.5 px-3.5 text-neutral-20 flex items-center gap-2 font-Inter text-sm md:text-base w-fit"
            >
              <Image src={ICONS.available} alt="" className="size-5" />
              <p>Available for work</p>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-white font-bold text-[32px] md:text-[48px] lg:text-[40px] xl:text-[60px] leading-10 md:leading-14 lg:leading-12 xl:leading-17 2xl:leading-20 mt-6 font-Uncut-Sans"
            >
              I Build{" "}
              <span className="font-Instrument-Serif font-normal italic">
                Digital Solutions
              </span>{" "}
              That Help Businesses Grow Faster
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-sm md:text-lg lg:text-sm xl:text-lg text-white font-Inter mt-6"
            >
              From custom websites to full automation systems, I design tools
              that save time, increase revenue, and make business easier to run.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-3 md:gap-6 mt-10"
            >
              <Link href={"/contact-me"}>
                <Button label="Start Your Project" />
              </Link>
              <Link href={"/portfolio"}>
                <Button variant="secondary" label="View Portfolio" />
              </Link>
            </motion.div>
          </div>

          {/* Right side contents (Images) */}
          <motion.div
            variants={imageVariants}
            className="w-60 md:w-[350px] xl:w-[500px] relative mt-20"
          >
            <Image src={IMAGES.profileImgBg} alt="" className="" />
            <Image
              src={IMAGES.rahulSutradhar}
              alt="Rahul Sutradhar"
              className="absolute -top-16 right-0 w-[400px]"
            />

            {/* Right Card (Rating) */}
            <motion.div
              variants={floatingCardRight}
              className="border border-neutral-30 rounded-[10px] pl-1.5 py-1.5 pr-4 flex items-center gap-2.5 w-fit bg-neutral-30 shadow-stat-card absolute top-20 lg:top-40 -right-10 md:-right-20 lg:-right-10 2xl:-right-20"
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

            {/* Left Card (Services) */}
            <motion.div
              variants={floatingCardLeft}
              className="border border-neutral-30 rounded-[10px] pl-1.5 py-1.5 pr-4 flex items-center gap-2.5 w-fit bg-neutral-30 shadow-stat-card absolute -left-12 md:-left-1 bottom-0 2xl:bottom-20"
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

      {/* Background Image with subtle fade */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-0 w-full h-screen z-0"
      >
        <Image
          src={IMAGES.heroBg}
          alt=""
          fill
          priority
          className="object-cover"
        />
      </motion.div>
    </div>
  );
};

export default Hero;