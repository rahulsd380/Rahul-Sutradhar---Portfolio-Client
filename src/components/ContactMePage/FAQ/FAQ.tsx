"use client";
import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

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

  return (
    <Container>
      <div className="pt-[100px] lg:pt-[150px] pb-[100px]">
        <Heading
          subHeading="FAQ"
          styledHeading="Frequently"
          heading="Asked Questions"
          description="Have questions? You’re not alone. Here are answers to common inquiries. If you need more help, reach out!"
        />

        <div className="bg-neutral-85 border border-neutral-35/20 p-5 md:p-8 lg:p-12 rounded-xl font-Inter mt-13 lg:mt-[70px] relative">
          <div className="w-full h-full bg-primary-30/60 blur-[100px] absolute top-0 right-0 left-0 bottom-0"></div>
          <div className="flex gap-5 flex-col w-full relative">
            {accordingData?.map((according, index) => (
              <article
                key={index}
                className="border border-neutral-90 bg-neutral-95 rounded-xl px-5 py-3"
              >
                <div
                  className="flex gap-2 cursor-pointer items-center justify-between w-full"
                  onClick={() => handleBorderClick(index)}
                >
                  <h2 className="text-white font-semibold text-sm md:text-base">
                    {according.title}
                  </h2>
                  <p>
                    <FaPlus
                      className={`text-xl text-white transition-all duration-300 ${
                        isPlusAccording === index &&
                        "rotate-45 text-primary-10!"
                      }`}
                    />
                  </p>
                </div>
                <div
                  className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
                    isPlusAccording === index
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="text-neutral-35 overflow-hidden text-xs md:text-base">
                    {according.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FAQ;
