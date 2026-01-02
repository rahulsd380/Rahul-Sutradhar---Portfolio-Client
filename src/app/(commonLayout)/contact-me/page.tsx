import ProfileOverview from "@/components/AboutMePage/ProfileOverview/ProfileOverview";
import ContactMe from "@/components/ContactMePage/ContactMe/ContactMe";
import FAQ from "@/components/ContactMePage/FAQ/FAQ";
import HeroSection from "@/components/Reusable/HeroSection/HeroSection";
import { contactFaq } from "@/data/faqData";
// import Testimonial from "@/components/Shared/Testimonial/Testimonial";
export const metadata = {
  title: "Contact Rahul Sutradhar",
  description:
    "Get in touch to discuss your project. Founder-led development, clear communication, and honest feasibility advice.",
  alternates: {
    canonical: "https://rahulsutradhar.com/contact-me",
  },
};

const ContactMePage = () => {
  return (
    <div>
      <HeroSection
        subHeading="Contact Me"
        styledHeading="Have a Question"
        heading="or need help?"
      />
      <ContactMe />
     <FAQ
  data={contactFaq}
  heading="Before You Reach Out"
/>
      {/* <Testimonial /> */}
      <ProfileOverview />
    </div>
  );
};

export default ContactMePage;
