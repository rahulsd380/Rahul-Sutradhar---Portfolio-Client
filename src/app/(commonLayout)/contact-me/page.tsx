import ContactMe from "@/components/ContactMe/ContactMe";
import HeroSection from "@/components/Reusable/HeroSection/HeroSection";

const ContactMePage = () => {
  return (
    <div>
      <HeroSection
        subHeading="Contact Me"
        styledHeading="Have a Question"
        heading="or need help?"
      />
      <ContactMe/>
    </div>
  );
};

export default ContactMePage;
