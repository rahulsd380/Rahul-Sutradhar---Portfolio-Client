"use client";

import { useEffect, useState, useRef } from "react";
import Container from "@/components/Reusable/Container/Container";
import Button from "@/components/Reusable/Button/Button";
import Heading from "@/components/Reusable/Heading/Heading";
import Link from "next/link";
import { motion, useInView, animate, Variants } from "framer-motion";

// Helper component for the counting animation
const Counter = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");

  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, numericValue, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.floor(latest).toLocaleString());
        },
      });
      return () => controls.stop();
    }
  }, [isInView, numericValue]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

const AboutMe = () => {
  const STATS = [
    { id: "projects", title: "Projects Delivered", value: "300+" },
    { id: "clients", title: "Happy Clients", value: "300+" },
    { id: "experience", title: "Experience (Years)", value: "3+" },
  ];

  const containerVariants:Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants:Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Container>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-[100px] flex flex-col lg:flex-row gap-9 mt-10 lg:mt-28"
      >
        {/* Left Side: Heading */}
        <motion.div variants={itemVariants} className="w-full lg:w-[30%]">
          <Heading
            subHeading="About me"
            styledHeading="Building digital"
            heading="solutions with purpose"
            align="left"
          />
        </motion.div>

        {/* Right Side: Stats & Description */}
        <div className="w-full lg:w-[70%] flex flex-col gap-10">
          {/* Stats Grid */}
          <div className="grid grid-cols-3">
            {STATS.map((stat) => (
              <motion.div key={stat?.id} variants={itemVariants}>
                <h2 className="text-white text-2xl md:text-[40px] font-Uncut-Sans">
                  <Counter value={stat.value} />
                </h2>
                <p className="text-neutral-35 font-Inter mt-3 text-sm md:text-base">
                  {stat?.title}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Paragraph Text */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-lg lg:text-sm xl:text-lg text-white font-Inter"
          >
            I’m Rahul, a developer who loves solving real business problems with
            smart software. I build digital systems that make work simple, help
            teams grow faster, and turn ideas into results.
            <br />
            <br />
            My focus isn’t just design or code—it’s impact. Every project I take
            on aims to save time, boost revenue, and keep your business running
            smoother.
          </motion.p>

          {/* Button */}
          <motion.div variants={itemVariants}>
            <Link href={"/about-me"}>
              <Button label="Read More" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </Container>
  );
};

export default AboutMe;
