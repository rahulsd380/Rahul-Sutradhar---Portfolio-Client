"use client";

import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { motion, AnimatePresence, Variants } from "framer-motion";

// types/faq.ts
export interface FAQItem {
  title: string;
  description: string;
}

interface FAQProps {
  data: FAQItem[];
  subHeading?: string;
  styledHeading?: string;
  heading?: string;
  description?: string;
}

const FAQ = ({
  data,
  subHeading = "FAQ",
  styledHeading = "Frequently",
  heading = "Asked Questions",
  description = "Have questions? You’re not alone. Here are answers to common inquiries.",
}: FAQProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <Container>
      <div className="pt-[100px] lg:pt-[150px] pb-[100px]">
        <Heading
          subHeading={subHeading}
          styledHeading={styledHeading}
          heading={heading}
          description={description}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-neutral-85 border border-neutral-35/20 p-5 md:p-8 lg:p-12 rounded-xl mt-13 lg:mt-[70px] relative overflow-hidden"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute inset-0 bg-primary-30/40 blur-[100px]"
          />

          <div className="flex flex-col gap-5 relative z-10">
            {data.map((item, index) => {
              const isOpen = activeIndex === index;

              return (
                <motion.article
                  key={index}
                  variants={itemVariants}
                  className={`border rounded-xl px-5 py-3 transition-colors ${
                    isOpen
                      ? "border-primary-10 bg-primary-10"
                      : "border-neutral-90 bg-neutral-95"
                  }`}
                >
                  <button
                    onClick={() =>
                      setActiveIndex(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between py-2 text-left"
                  >
                    <h2 className="font-semibold text-white text-sm md:text-base">
                      {item.title}
                    </h2>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FaPlus
                        className={`text-xl ${
                          isOpen ? "text-primary-10" : "text-white"
                        }`}
                      />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <p className="text-neutral-35 text-xs md:text-base pb-4 pt-2">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default FAQ;
