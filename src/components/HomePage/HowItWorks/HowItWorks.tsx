"use client";
import { motion, Variants } from "framer-motion";
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
        "We dig into your business goals, users, constraints, and technical risks to define what should be built — and just as importantly, what shouldn’t.",
    },
    {
      id: "02.",
      title: "Planning & System Design",
      description:
        "Architecture, data flow, integrations, and future expansion are planned upfront so your product doesn’t collapse when traffic, features, or priorities change.",
    },
    {
      id: "03.",
      title: "Design & Development",
      description:
        "You get fast-loading, SEO-ready, and maintainable systems — built with performance, clarity, and real usage in mind. Progress is visible through regular previews",
    },
    {
      id: "04.",
      title: "Review, Launch & Stability Checks",
      description:
        "Before going live, we test performance, edge cases, and handover clarity. I handle the technical setup so you can focus on running the business.",
    },
  ];

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const leftSideVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const stepVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const circleVariants: Variants = {
    hidden: { scale: 0, rotate: -45 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 200, damping: 12 },
    },
  };

  const lineVariants: Variants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <div className="relative py-[100px] overflow-hidden">
      {/* Background Gradient */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute left-0 -top-32 md:-top-96 -z-10"
      >
        <Image src={GRADIENTS.howItWorksGradient} alt="" priority />
      </motion.div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16 xl:gap-0 z-10 relative"
        >
          {/* Left Content */}
          <motion.div variants={leftSideVariants} className="w-full lg:w-1/2">
            <Heading
              subHeading="How It Work"
              styledHeading="Build Systems "
              heading="That Stay Fast, Stable, and Scalable After Launch"
              align="left"
              description="A clear, proven development process designed to prevent rewrites, performance issues, and costly surprises as your product grows."
            />
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="mt-10"
            >
              <Image src={IMAGES.howItWorks} alt="How it works illustration" />
            </motion.div>
          </motion.div>

          {/* Right Content: Steps */}
          <div className="flex flex-col gap-10 lg:gap-14 2xl:gap-18 w-full lg:w-1/2">
            {processSteps?.map((step, index) => (
              <motion.div
                key={step?.id}
                variants={stepVariants}
                className="flex gap-8 items-start relative"
              >
                {/* Connecting Line Animation */}
                {index !== processSteps?.length - 1 && (
                  <motion.div
                    variants={lineVariants}
                    style={{ originY: 0 }}
                    className="border border-dashed border-primary-15 w-0.5 h-24 absolute left-5 top-12 -z-10"
                  />
                )}

                {/* Number Circle */}
                <motion.div
                  variants={circleVariants}
                  className="min-w-10 h-10 border border-neutral-30 bg-gradient-primary rounded-full flex items-center justify-center text-white font-Inter font-medium z-10 shadow-lg"
                >
                  {step?.id}
                </motion.div>

                {/* Text Content */}
                <div className="flex-1">
                  <h2 className="text-white font-Uncut-Sans text-lg md:text-xl font-medium">
                    {step?.title}
                  </h2>
                  <p className="text-neutral-35 font-Inter mt-2 text-xs md:text-base leading-relaxed">
                    {step?.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default HowItWorks;
