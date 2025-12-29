"use client";
import { motion, Variants } from "framer-motion";
import { RxArrowTopRight } from "react-icons/rx";
import { TExperience, TJobDetail } from "./WorkExperience";

const ExperienceCard = ({ experience }: { experience: TExperience }) => {
  const cardVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants:Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const lineVariants:Variants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: { duration: 1.2, ease: "easeInOut", delay: 0.5 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="pb-7 md:pb-13 relative group"
    >
      {/* Title Reveal */}
      <motion.h2 
        variants={itemVariants}
        className="text-xl md:text-[32px] font-semibold font-Uncut-Sans leading-normal text-white group-hover:text-primary-40 transition-colors duration-300"
      >
        {experience?.companyName}
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-10 xl:gap-9 2xl:gap-0 justify-between mt-5 lg:mt-10">
        
        {/* Left Side: Overview */}
        <motion.div variants={itemVariants} className="max-w-full lg:max-w-[280px] text-white font-Inter text-sm md:text-lg">
          <p className="text-neutral-35">{experience?.companyOverview}</p>
          <p className="mt-3 lg:mt-6 text-primary-40 font-medium">{experience?.employmentPeriod}</p>
        </motion.div>

        {/* Middle: Key Details */}
        <motion.dl variants={itemVariants} className="space-y-3 text-sm">
          {experience?.jobDetails?.map(({ label, value, href }: TJobDetail) => (
            <div
              key={label}
              className="flex gap-10 font-Inter text-sm md:text-lg"
            >
              <h2 className="text-neutral-35 min-w-20">{label}</h2>
              <dd className="text-white font-semibold">
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-primary-40 transition-colors"
                  >
                    {value}
                    <RxArrowTopRight className="text-lg md:text-xl font-extrabold" />
                  </a>
                ) : (
                  value
                )}
              </dd>
            </div>
          ))}
        </motion.dl>

        {/* Right Side: Description */}
        <motion.div 
            variants={itemVariants}
            className="text-sm md:text-lg lg:text-sm xl:text-lg text-neutral-35 font-Inter max-w-full lg:max-w-[300px] xl:max-w-[500px] leading-relaxed"
        >
          {experience?.description}
        </motion.div>
      </div>

      {/* Animated Bottom Border (The "Draw" Effect) */}
      <motion.div 
        variants={lineVariants}
        className="absolute bottom-0 left-0 h-px bg-neutral-60"
      />
      {/* Hover Highlight line */}
      <div className="absolute bottom-0 left-0 h-px bg-primary-40 w-0 group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
};

export default ExperienceCard;