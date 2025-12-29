"use client";
import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { motion, AnimatePresence, Variants } from "framer-motion";

const FAQ = () => {
  const accordingData = [
    {
      title: "What is the purpose of wireframing in design?",
      description:
        "Wireframing outlines the basic structure and layout of a design, serving as a visual guide before detailed development.",
    },
    {
      title: "Why is user-centered design important?",
      description:
        "User-centered design ensures products meet the needs and preferences of the end-users, enhancing usability and satisfaction.",
    },
    {
      title: "What role does contrast play in graphic design?",
      description:
        "Contrast in graphic design emphasizes differences, making elements stand out and improving visual hierarchy.",
    },
    {
      title: `Define the term "responsive design" in web development.`,
      description:
        "Responsive design ensures web pages adapt to various screen sizes, providing an optimal user experience on different devices.",
    },
    {
      title: "What is the significance of color theory in design?",
      description:
        "Color theory guides the selection and combination of colors to evoke specific emotions, enhance readability, and create visually appealing designs.",
    },
  ];

  const [isPlusAccording, setIsPlusAccording] = useState<number | null>(null);

  const handleBorderClick = (index: number) => {
    setIsPlusAccording((prevIndex) => (prevIndex === index ? null : index));
  };

  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants:Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <Container>
      <div className="pt-[100px] lg:pt-[150px] pb-[100px]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heading
            subHeading="FAQ"
            styledHeading="Frequently"
            heading="Asked Questions"
            description="Have questions? You’re not alone. Here are answers to common inquiries. If you need more help, reach out!"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-neutral-85 border border-neutral-35/20 p-5 md:p-8 lg:p-12 rounded-xl font-Inter mt-13 lg:mt-[70px] relative overflow-hidden"
        >
          {/* Pulsing background glow */}
          <motion.div 
            animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.6, 0.4] 
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="w-full h-full bg-primary-30/40 blur-[100px] absolute inset-0 pointer-events-none"
          ></motion.div>

          <div className="flex gap-5 flex-col w-full relative z-10">
            {accordingData?.map((according, index) => {
              const isOpen = isPlusAccording === index;
              
              return (
                <motion.article
                  key={index}
                  variants={itemVariants}
                  className={`border transition-colors duration-300 rounded-xl px-5 py-3 ${
                    isOpen ? "border-primary-10 bg-primary-10" : "border-neutral-90 bg-neutral-95"
                  }`}
                >
                  <div
                    className="flex gap-2 cursor-pointer items-center justify-between w-full py-2"
                    onClick={() => handleBorderClick(index)}
                  >
                    <h2 className={`font-semibold text-sm md:text-base transition-colors duration-300 text-white`}>
                      {according.title}
                    </h2>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <FaPlus
                        className={`text-xl transition-colors duration-300 ${
                          isOpen ? "text-primary-10" : "text-white"
                        }`}
                      />
                    </motion.div>
                  </div>

                  {/* SMOOTH ACCORDION REVEAL */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <p className="text-neutral-35 text-xs md:text-base pb-4 pt-2">
                          {according.description}
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