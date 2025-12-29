"use client";
import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import ExperienceCard from "./ExperienceCard";
import { ReactNode } from "react";
import { motion } from 'framer-motion';

export type TJobDetail = {
  label: string;
  value: string;
  href?: string;
};

export type TExperience = {
  id: number;
  companyName: string;
  companyOverview: string;
  employmentPeriod: string;
  jobDetails: TJobDetail[];
  description: ReactNode | string;
};
const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      companyName: "NeonShark",
      companyOverview: "Award-winning client projects and scalable systems.",
      employmentPeriod: "Jan 2025 — Present",
      jobDetails: [
        { label: "Position", value: "Full Stack Developer" },
        { label: "Location", value: "India (Remote)" },
        { label: "Industry", value: "Consulting · Software" },
        {
          label: "Website",
          value: "www.mitrconsultancy.com",
          href: "https://www.mitrconsultancy.com",
        },
      ],
      description: (
        <span>
          I build responsive front-end interfaces and back-end services. I focus
          on performance, accessibility, and automation, shipping maintainable
          features that enhance user experience.
          <br />
          <br />I work with Next.js and Express.js, integrating REST APIs.
        </span>
      ),
    },
  ];
  return (
    <div className="py-[100px] relative overflow-hidden">
      {/* Pulsing Background Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="size-[250px] md:size-[344px] rounded-full bg-primary-10 left-0 top-20 absolute blur-[100px] -z-10"
      />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heading styledHeading="Work" heading="Experience" />
        </motion.div>

        <div className="flex flex-col gap-10 relative mt-13 lg:mt-[70px]">
          {experiences?.map((experience) => (
            <ExperienceCard key={experience?.id} experience={experience} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default WorkExperience;
