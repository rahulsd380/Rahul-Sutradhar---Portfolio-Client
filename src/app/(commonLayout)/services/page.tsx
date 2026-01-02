import ProfileOverview from "@/components/AboutMePage/ProfileOverview/ProfileOverview";
import FAQ from "@/components/ContactMePage/FAQ/FAQ";
import HowItWorks from "@/components/HomePage/HowItWorks/HowItWorks";
import HeroSection from "@/components/Reusable/HeroSection/HeroSection";
import AllServices from "@/components/ServicesPage/AllServices/AllServices";
import { servicesFaq } from "@/data/faqData";
// import Testimonial from "@/components/Shared/Testimonial/Testimonial";

export const metadata = {
  title: "Web, App & SEO Services for Growing Businesses",
  description:
    "Explore web development, app development, SEO, and system integration services built for performance, scalability, and long-term growth.",
  alternates: {
    canonical: "https://rahulsutradhar.com/services",
  },
};

const Services = () => {
  return (
    <div>
      <HeroSection
        subHeading="Services"
        styledHeading="Web Development, App Development & SEO Services "
        heading="for Growing Businesses"
        description="Performance-focused websites, scalable applications, and SEO systems built to convert — not just look good."
      />
      <AllServices/>
      <HowItWorks />
      <FAQ
  data={servicesFaq}
  heading="Service & Pricing Questions"
/>
      {/* <Testimonial /> */}
      <ProfileOverview />
    </div>
  );
};

export default Services;
