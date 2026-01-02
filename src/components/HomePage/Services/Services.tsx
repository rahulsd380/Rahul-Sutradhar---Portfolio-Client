"use client";
import { motion } from "framer-motion";
import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import ServiceCard from "./ServiceCard";
import { IMAGES } from "../../../../public/assets";
import Link from "next/link";
import Button from "@/components/Reusable/Button/Button";

const Services = () => {
  const services = [
    {
      heading: "Web Development",
      subHeading: "Conversion-focused, performance-ready websites designed to scale — not redesign.",
      description:
        "I build fast, SEO-ready websites and internal web systems that are clear to maintain, easy to extend, and aligned with real business goals — not just visual polish.",
      pointers: [
        "Built for real traffic, not demos",
        "SEO-ready structure from day one",
        "Designed to evolve without rewrites",
      ],
      image: IMAGES.webDevelopmentService,
    },
    {
      heading: "App Development",
      subHeading: "Apps built for real users, real workflows, and long-term stability.",
      description:
        "From internal tools to customer-facing apps, I design and ship applications that stay reliable as usage grows and requirements change.",
      pointers: [
        "Clear system architecture before code",
        "Scalable APIs and data models",
        "Production-ready, not MVP shortcuts",
      ],
      image: IMAGES.appDevelopmentService,
    },
    {
      heading: "SEO & Digital Visibility",
      subHeading: "SEO built into the system — not added later as a patch.",
      description:
        "I focus on technical SEO, site structure, and performance foundations that help your website rank, convert, and stay competitive over time.",
      pointers: [
        "Clean architecture & crawlability",
        "Performance-first approach",
        "Conversion-aware SEO strategy",
      ],
      image: IMAGES.seoService,
    },
    {
      heading: "AI & Automation",
      subHeading: "Reduce manual work with practical AI — not gimmicks.",
      description:
        "I integrate AI and automation into existing systems to streamline operations, improve decision-making, and remove repetitive tasks.",
      pointers: [
        "Workflow automation",
        "AI-assisted dashboards & tools",
        "Integrations that fit your system",
      ],
      image: IMAGES.aiIntegrationService,
    },
  ];

  return (
    <Container>
      <div className="py-0 lg:py-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heading
            subHeading="Services"
            styledHeading="Practical Web & Software Solutions"
            heading="for Growing Businesses"
            description="I don’t offer isolated services. I design and build systems that help businesses launch faster, scale reliably, and avoid expensive rebuilds later.
"
          />
        </motion.div>

        <div className="flex flex-col gap-10 mt-[70px]">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex  flex-col items-center justify-center gap-4 mt-10"
        >
          <Link href="/services">
            <Button variant="secondary" label="See All Service" />
          </Link>
          <p className="text-neutral-50">Most projects use more than one of these — because real systems aren’t built in silos.
</p>
        </motion.div>
      </div>
    </Container>
  );
};

export default Services;
