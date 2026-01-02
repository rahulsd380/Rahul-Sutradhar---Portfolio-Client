"use client";

import { useEffect, useState, useRef } from "react";
import Container from "@/components/Reusable/Container/Container";
import Button from "@/components/Reusable/Button/Button";
import Heading from "@/components/Reusable/Heading/Heading";
import Link from "next/link";
import { motion, useInView, animate, Variants } from "framer-motion";
import Image from "next/image";
import { ICONS } from "../../../../public/assets";

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
    { id: "projects", title: "Production Systems Shipped", value: "55+" },
    { id: "clients", title: "Businesses Worked With", value: "38+" },
    { id: "experience", title: "Years Shipping Live Software", value: "3+" },
  ];

  const containerVariants: Variants = {
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

  const itemVariants: Variants = {
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
        <motion.div variants={itemVariants} className="w-full lg:w-[35%]">
          <Heading
            subHeading="How I Build Systems That Last"
            styledHeading="Web Systems Built"
            heading="to Scale Without Rewrites"
            align="left"
          />
        </motion.div>

        {/* Right Side: Stats & Description */}
        <div className="w-full lg:w-[65%] flex flex-col gap-10">
          {/* Stats Grid */}
          <div className="grid grid-cols-3">
            {STATS.map((stat) => (
              <motion.div key={stat?.id} variants={itemVariants}>
                <p className="text-white text-2xl md:text-[40px] font-Uncut-Sans">
                  <Counter value={stat.value} />
                </p>
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
           Most web systems don’t fail at launch.
            <br />
            They fail months later — when traffic grows, features expand, or
            priorities change.
            <br />
            <br />
            That’s when performance drops, changes get expensive, and teams
            realize the system wasn’t designed for real usage.
            <br />
            My role is to prevent that by designing systems that are clear,
            realistic, and resilient from day one.
            <br/><br/>I design and ship production-ready web systems that:
          <ul className="space-y-4 ml-3">
  <li className="flex items-start gap-3">
    <Image
      src={ICONS.blueStar}
      alt="Blue Star Icon"
      className="size-3.5 mt-2 shrink-0"
    />
    <span>
      Solve the actual business problem — not just ship features
    </span>
  </li>

  <li className="flex items-start gap-3">
    <Image
      src={ICONS.blueStar}
      alt="Blue Star Icon"
      className="size-3.5 mt-2 shrink-0"
    />
    <span>
      Respect real constraints: budget, timeline, and team capacity
    </span>
  </li>

  <li className="flex items-start gap-3">
    <Image
      src={ICONS.blueStar}
      alt="Blue Star Icon"
      className="size-3.5 mt-2 shrink-0"
    />
    <span>
      Stay stable as requirements, users, and scale change
    </span>
  </li>
</ul>

            <motion.p
              variants={itemVariants}
              className="text-sm md:text-lg lg:text-sm xl:text-lg text-white font-Inter mt-3"
            >
              The result is a system that teams can extend confidently — without
              expensive rewrites six months later.
            </motion.p>
          </motion.p>

          {/* Button */}
          <motion.div variants={itemVariants}>
            <Link href={"/about-me"}>
              <Button label="See How This Works" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </Container>
  );
};

export default AboutMe;
