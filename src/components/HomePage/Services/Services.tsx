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
      subHeading: "Websites That Work, Not Just Look Good",
      description:
        "I design and develop modern websites that load fast, convert visitors, and reflect your brand’s story. Whether it’s a portfolio or a full business site, I focus on performance and growth.",
      pointers: [
        "Responsive Design",
        "SEO Optimization",
        "Client Training",
        "CMS Integration",
        "Full Website Design",
        "E-commerce Setup",
      ],
      image: IMAGES.webDevelopmentService,
    },
    {
      heading: "App Development",
      subHeading: "Apps That Simplify Daily Work and Drive Growth",
      description:
        "I build web and mobile apps that solve real problems—from booking and tracking to managing teams and payments. Each app is designed for smooth performance and scalability.",
      pointers: [
        "Cross-Platform",
        "iOS & Android",
        "Cloud Sync",
        "Secure Login System",
        "Admin Dashboard",
        "Real-Time Database",
      ],
      image: IMAGES.appDevelopmentService,
    },
    {
      heading: "SEO & Digital Visibility",
      subHeading: "Get Found Faster, Rank Higher, and Stay Visible",
      description:
        "I help businesses grow organically through SEO and digital strategy. From keyword planning to content structure, everything is designed to boost search rankings and brand trust.",
      pointers: [
        "Keyword Optimization",
        "Technical SEO",
        "Content Strategy",
        "Google Console Setup",
        "Analytics & Reporting",
        "Local SEO Setup",
      ],
      image: IMAGES.seoService,
    },
    {
      heading: "AI Integration",
      subHeading: "Smarter Systems Through Automation and AI",
      description:
        "I integrate AI-powered solutions that streamline operations, automate workflows, and improve decision-making—helping your business scale faster with intelligent systems.",
      pointers: [
        "ChatGPT Integration",
        "Workflow Automation",
        "CRM Connection",
        "Email & WhatsApp Bots",
        "Data Processing",
        "Dashboard Reporting",
      ],
      image: IMAGES.aiIntegrationService,
    },
  ];

  return (
    <Container>
      <div className="py-[100px]">
        <Heading
          subHeading="Services"
          styledHeading="Smart Digital"
          heading="Solutions for Growing Businesses"
          description="I help brands turn ideas into fast, reliable, and growth-focused systems from websites to full automation platforms."
        />
        <div className="flex flex-col gap-10 mt-[70px]">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
        <Link
          href="/services"
          className="flex items-center justify-center mt-10"
        >
          <Button variant="secondary" label="See All Service" />
        </Link>
      </div>
    </Container>
  );
};

export default Services;
