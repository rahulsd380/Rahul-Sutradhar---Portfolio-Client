"use client";
import { motion, Variants } from "framer-motion";
import Heading from "@/components/Reusable/Heading/Heading";
import Marquee from "react-fast-marquee";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const marqueeRowRight: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.2 },
    },
  };

  const marqueeRowLeft: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.4 },
    },
  };

  const blurVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
  };

  return (
    <div className="relative overflow-hidden py-10 lg:py-20">
      {/* Heading */}
      <motion.div
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Heading
          subHeading="Testimonials"
          styledHeading="What My"
          heading="Clients Say"
          description="We help businesses grow with design, strategy, and genuine care but don’t just take our word for it."
        />
      </motion.div>

      <div className="mt-13 lg:mt-[70px] space-y-6 relative">
        {/* Left Gradient Blur */}
        <div className="absolute left-0 top-0 w-32 h-full bg-linear-to-r from-neutral-10 to-transparent z-10 pointer-events-none hidden md:block"></div>

        {/* Right Gradient Blur */}
        <div className="absolute right-0 top-0 w-32 h-full bg-linear-to-l from-neutral-10 to-transparent z-10 pointer-events-none hidden md:block"></div>

        {/* Top Marquee */}
        <motion.div
          variants={marqueeRowRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <Marquee
            direction="left"
            speed={50}
            gradient={false}
            pauseOnHover={true}
          >
            <div className="flex items-center">
              {[1, 2, 3, 4, 5]?.map((_, index) => (
                <div key={index} className="px-3">
                  <TestimonialCard />
                </div>
              ))}
            </div>
          </Marquee>
        </motion.div>

        {/* Bottom Marquee */}
        <motion.div
          variants={marqueeRowLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <Marquee
            direction="right"
            speed={50}
            gradient={false}
            pauseOnHover={true}
          >
            <div className="flex items-center">
              {[1, 2, 3, 4, 5]?.map((_, index) => (
                <div key={index} className="px-3">
                  <TestimonialCard />
                </div>
              ))}
            </div>
          </Marquee>
        </motion.div>

        {/* Decorative Blur Elements: Fade in slowly */}
        <motion.div
          variants={blurVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute -top-10 -right-10 w-64 h-64 bg-primary-50/5 rounded-full blur-3xl -z-10"
        ></motion.div>
        <motion.div
          variants={blurVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary-30/5 rounded-full blur-3xl -z-10"
        ></motion.div>
      </div>
    </div>
  );
};

export default Testimonial;
