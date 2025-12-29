import ProfileOverview from "@/components/AboutMePage/ProfileOverview/ProfileOverview";
import HowItWorks from "@/components/HomePage/HowItWorks/HowItWorks";
import HeroSection from "@/components/Reusable/HeroSection/HeroSection";
import AllServices from "@/components/ServicesPage/AllServices/AllServices";
import Testimonial from "@/components/Shared/Testimonial/Testimonial";

const Services = () => {
  return (
    <div>
      <HeroSection
        subHeading="Services"
        styledHeading="Digital Services"
        heading="That Drive Growth"
        description="Direct and easy to understand, with a focus on practical impact."
      />
      <AllServices/>
      <HowItWorks />
      <Testimonial />
      <ProfileOverview />
    </div>
  );
};

export default Services;
