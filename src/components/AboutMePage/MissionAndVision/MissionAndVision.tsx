"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useInView, animate, Variants } from "framer-motion";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import { IMAGES } from "../../../../public/assets";
import Button from "@/components/Reusable/Button/Button";
import Heading from "@/components/Reusable/Heading/Heading";
import Link from "next/link";

// --- Counter Animation ---
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

const MissionAndVision = () => {
  const stats = [
    { value: "55+", title: "Projects Completed" },
    { value: "5+", title: "Industries Served" },
    { value: "38+", title: "Clients Served" },
    { value: "3+", title: "Years of Experience" },
  ];

  const fadeInUp:Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageLeft:Variants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageRight:Variants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  return (
    <div className="py-7 lg:py-[100px] relative overflow-hidden">
      {/* Background Glows */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="size-[250px] lg:size-[344px] rounded-full bg-primary-10 right-0 md:right-40 top-56 lg:top-20 absolute blur-[100px] -z-10" 
      />

      <Container>
        <div className="relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <Heading styledHeading="Mission" heading="& Vision" />
          </motion.div>

          {/* Content Row */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="font-Inter flex flex-col lg:flex-row items-center lg:items-start gap-12 mt-16"
          >
            {/* Mission Image */}
            <motion.div variants={imageLeft} className="w-[286px] relative">
              <Image
                src={IMAGES.mission}
                alt="Mission"
                className="w-[266px] h-[284px] rounded-xl relative z-10 object-cover shadow-2xl"
              />
              <div className="size-[200px] rounded-full bg-primary-10 right-4 top-[-30px] absolute blur-[100px]"></div>
            </motion.div>

            {/* Text Center */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-6 max-w-[400px] lg:max-w-[500px] 2xl:max-w-[600px]">
              <div>
                <h3 className="text-lg text-white font-bold">My Focus:</h3>
                <p className="text-sm md:text-lg lg:text-sm xl:text-lg text-neutral-35 mt-3 leading-relaxed">
                 I help businesses avoid expensive rewrites, slow systems, and unclear technical decisions by designing software that works in the real world — not just on launch day.
                </p>
              </div>

              <div>
                <h2 className="text-lg text-white font-bold">How I Measure Success:</h2>
                <p className="text-sm md:text-lg lg:text-sm xl:text-lg text-neutral-35 mt-3 leading-relaxed">
                 A project is successful when:
                 <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>performance stays stable as traffic grows</li>
                  <li>the system supports business goals, not fights them</li>
                  <li>changes don’t require starting over</li>
                 </ul>


                </p>
              </div>
            </motion.div>

            {/* Vision Image */}
            <motion.div variants={imageRight}>
              <Image
                src={IMAGES.vision}
                alt="Vision"
                className="w-[266px] h-[284px] rounded-xl object-cover shadow-2xl"
              />
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-10"
          >
            <Link href="/contact-me">   <Button label="Contact Me" /></Link>
         
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-7 mt-13 lg:mt-[70px]"
          >
            {stats?.map((item) => (
              <motion.div
                key={item?.title}
                variants={fadeInUp}
                whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.3)" }}
                className="border border-neutral-30 shadow-stat-card p-4 lg:p-6 rounded-xl relative overflow-hidden bg-neutral-90/20 backdrop-blur-sm"
              >
                {/* Decorative glow inside card */}
                <div className="w-[150px] h-20 blur-[80px] bg-primary-10 absolute top-0 -right-10 pointer-events-none"></div>
                
                <h2 className="text-white text-3xl lg:text-[40px] font-semibold font-Uncut-Sans">
                  <Counter value={item.value} />
                </h2>
                <p className="text-white text-lg lg:text-2xl font-medium font-Inter mt-6">
                  {item?.title}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default MissionAndVision;