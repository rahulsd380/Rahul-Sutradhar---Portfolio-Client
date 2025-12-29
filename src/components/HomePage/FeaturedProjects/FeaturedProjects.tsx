"use client";
import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import ProjectCard from "./ProjectCard";
import Image from "next/image";
import { GRADIENTS } from "../../../../public/assets";
import Button from "@/components/Reusable/Button/Button";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const FeaturedProjects = () => {
  const itemVariants:Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <div className="relative py-7 lg:py-[100px] overflow-hidden">
      {/* Background Gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <Image
          src={GRADIENTS.featuredProjectGradient}
          alt=""
          className="w-full absolute -top-[800px] -z-10"
        />
      </motion.div>

      <Container>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Heading
            subHeading="Portfolio"
            styledHeading="Featured"
            heading="Projects"
            description="A few examples of how I build digital experiences that are simple, scalable, and built for impact."
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mt-13 lg:mt-[70px]">
          {[1, 2, 3, 4]?.map((_, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard />
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center justify-center mt-10 relative"
        >
          <Link href={"/portfolio"}>
            <Button variant="secondary" label="View All" />
          </Link>
        </motion.div>
      </Container>
    </div>
  );
};

export default FeaturedProjects;