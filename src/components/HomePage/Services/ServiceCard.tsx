"use client";
import { motion, Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { GRADIENTS, ICONS } from "../../../../public/assets";
import Link from "next/link";
import Button from "@/components/Reusable/Button/Button";

type TServiceCardProps = {
  service: {
    heading: string;
    subHeading: string;
    description: string;
    pointers: string[];
    image: StaticImageData;
  };
  index?: number;
};

const ServiceCard = ({ service }: TServiceCardProps) => {
  const cardVariants:Variants = {
    hidden: { y: 60, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.215, 0.61, 0.355, 1],
      } 
    }
  };

  const bgVariants:Variants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 1.2, ease: "easeOut" } 
    }
  };

  const contentVariants:Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  };
  const imageVariants:Variants = {
    hidden: { opacity: 0, x: 40, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const pointerVariants:Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="p-4 md:p-6 lg:p-10 rounded-2xl lg:rounded-4xl border border-primary-20 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden bg-neutral-900/20"
    >
      <motion.div variants={bgVariants} className="absolute inset-0 -z-10">
        <Image
          src={GRADIENTS.serviceCardGradient}
          alt={"Service Card Gradient"}
          fill
          className="object-cover opacity-80 lg:opacity-100"
        />
      </motion.div>
      
      {/* Left side Content */}
      <motion.div variants={contentVariants} className="flex flex-col gap-7 md:gap-9 lg:gap-14 z-10">
        <div>
          <motion.h2 className="text-xl md:text-[32px] font-semibold font-Uncut-Sans leading-normal text-white">
            {service.heading}
          </motion.h2>
          
          <motion.div className="flex items-center gap-2.5 mt-3">
            <Image
              src={ICONS.blueStar}
              alt="Blue Star Icon"
              className="w-[22px] h-[22px]"
            />
            <h3 className="font-Inter font-semibold text-white text-sm md:text-base">
              {service.subHeading}
            </h3>
          </motion.div>

          <motion.p className="text-sm text-neutral-35 font-Inter max-w-[698px] mt-5">
            {service.description}
          </motion.p>

          <div className="grid grid-cols-1 gap-x-8 gap-y-4 mt-5 md:mt-8 max-w-[400px]">
            {service?.pointers?.map((item: string) => (
              <motion.p
                key={item}
                variants={pointerVariants}
                className="text-sm text-neutral-35 font-Inter max-w-[698px]"
              >
                ↳ {item}
              </motion.p>
            ))}
          </div>
        </div>
        
        <motion.div variants={pointerVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-fit">
          <Link href={"/"}>
            <Button variant="primary" label="See More" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Right side Image */}
      <motion.div variants={imageVariants} className="z-10 h-full">
        <Image 
            src={service.image} 
            alt={service.heading} 
            className="h-full object-contain"
        />
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;