"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useInView, animate, Variants } from "framer-motion";
import Image from "next/image";
import Heading from "../../Reusable/Heading/Heading";
import { IMAGES } from "../../../../public/assets";
import Button from "../../Reusable/Button/Button";
import ContactUsForm from "./ContactUsForm";
import Container from "../../Reusable/Container/Container";

const Counter = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");

  // Determine if it's a decimal (4.8) or integer (600)
  const isDecimal = value.includes(".");
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, numericValue, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(
            isDecimal ? latest.toFixed(1) : Math.floor(latest).toLocaleString()
          );
        },
      });
      return () => controls.stop();
    }
  }, [isInView, numericValue, isDecimal]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

const ContactMe = () => {
  const stats = [
    { value: "600+", title: "Projects Delivered" },
    { value: "20+", title: "Industries Served" },
    { value: "4.8", title: "Average Rating" },
  ];

  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants:Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const formVariants:Variants = {
    hidden: { opacity: 0, scale: 0.95, x: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <Container>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-primary-30 backdrop-blur-[300px] rounded-4xl p-4 lg:p-[50px] flex flex-col-reverse lg:flex-row items-center gap-10 mt-14 overflow-hidden"
      >
        <div className="w-full lg:w-1/2">
          {/* Animated Heading */}
          <motion.div variants={itemVariants}>
            <Heading
              subHeading="Let's Connect"
              styledHeading="Let’s Collaborate"
              heading="and Begin the work"
              description="Direct and easy to understand, with a focus on practical impact."
              align="left"
            />
          </motion.div>

          <div className="mt-6 space-y-6">
            {/* Stats Cards Section */}
            <div className="flex gap-3 flex-wrap md:flex-nowrap">
              {stats?.map((stat) => (
                <motion.div
                  key={stat?.title}
                  variants={itemVariants}
                  className="bg-neutral-80 hover:bg-primary-10 group h-fit flex-1 rounded-xl border border-neutral-35/30 p-4 font-Inter text-white flex flex-col items-center justify-center text-center transition-colors duration-300"
                >
                  <h2 className="text-2xl font-medium">
                    <Counter value={stat.value} />
                  </h2>
                  <p className="text-sm opacity-70">{stat?.title}</p>
                </motion.div>
              ))}
            </div>

            {/* Bio Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ x: 5 }}
              className="bg-neutral-80 rounded-xl border border-neutral-35/30 p-4 font-Inter text-white flex flex-col justify-center"
            >
              <div className="flex gap-5">
                <div className="relative size-[60px] rounded-full overflow-hidden border border-primary-15">
                  <Image
                    src={IMAGES.rahulSutradhar}
                    alt="Rahul Sutradhar"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-medium">Rahul Sutradhar</h2>
                  <p className="text-sm text-primary-40">Developer</p>
                </div>
              </div>

              <p className="text-sm text-neutral-35 font-Inter mt-6 leading-relaxed">
                I’m Rahul, a developer who blends technology with business
                thinking. I help brands build systems that grow revenue and
                simplify work.
              </p>
            </motion.div>

            {/* CTA Box */}
            <motion.div 
              variants={itemVariants}
              className="p-6 bg-primary-35 rounded-2xl flex flex-col md:flex-row gap-4 items-center justify-between border border-white/5"
            >
              <h2 className="font-Uncut-Sans text-xl md:text-2xl font-semibold text-white">
                Prefer to book a call?
              </h2>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="secondary"
                  label="Book A Call"
                  className="w-full md:w-fit px-8"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Form Reveal */}
        <motion.div variants={formVariants} className="w-full lg:w-1/2">
          <ContactUsForm />
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default ContactMe;