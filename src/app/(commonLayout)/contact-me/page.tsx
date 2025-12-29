import ProfileOverview from "@/components/AboutMePage/ProfileOverview/ProfileOverview";
import ContactMe from "@/components/ContactMePage/ContactMe/ContactMe";
import FAQ from "@/components/ContactMePage/FAQ/FAQ";
import HeroSection from "@/components/Reusable/HeroSection/HeroSection";
import Testimonial from "@/components/Shared/Testimonial/Testimonial";

const ContactMePage = () => {
  return (
    <div>
      <HeroSection
        subHeading="Contact Me"
        styledHeading="Have a Question"
        heading="or need help?"
      />
      <ContactMe />
      <FAQ />
      <Testimonial />
      <ProfileOverview />
    </div>
  );
};

export default ContactMePage;
