"use client";
import { useRef } from "react";
import Image from "next/image";
import { GRADIENTS, ICONS } from "../../../../public/assets";
import Container from "../Container/Container";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";

const CTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // --- Mouse Tracking for Parallax ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const bgMoveX = useTransform(smoothX, [0, 1000], [-20, 20]);
  const bgMoveY = useTransform(smoothY, [0, 1000], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants:Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <Container>
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative py-24 px-6 rounded-[40px] overflow-hidden group"
      >
        <motion.div
          style={{ x: bgMoveX, y: bgMoveY }}
          className="absolute inset-0 pointer-events-none"
        >
          <Image
            src={GRADIENTS.ctaGradientAbove}
            alt=""
            className="absolute top-0 w-full opacity-60 scale-110"
          />
          <Image
            src={GRADIENTS.ctaGradientAbove}
            alt=""
            className="absolute bottom-0 w-full rotate-180 opacity-60 scale-110"
          />
        </motion.div>

        <div className="flex flex-col items-center justify-center z-10 relative">
          <motion.div
            variants={itemVariants}
            className="bg-white border border-neutral-25 rounded-3xl py-1.5 px-3.5 text-neutral-20 flex items-center gap-2 font-Inter w-fit shadow-sm"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Image src={ICONS.available} alt="" className="size-5" />
            </motion.div>
            <p>Available for work</p>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full">
            <Heading
              styledHeading="Ready to Grow"
              heading="Your Business With Smart Tech?"
              align="center"
              description="Let’s talk about what’s slowing you down and build the system that fixes it."
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center gap-3 md:gap-6 mt-9"
          >
            <Link href="book-call" className="relative">
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-primary-40/20 blur-xl rounded-xl"
              />
              <Button variant="primary" label="Schedule a Free Call" />
            </Link>

            <Link href="/services">
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Button variant="secondary" label="See All Services" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </Container>
  );
};

export default CTA;