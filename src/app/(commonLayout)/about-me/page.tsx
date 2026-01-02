import AboutMe from "@/components/AboutMePage/AboutMe/AboutMe";
import MissionAndVision from "@/components/AboutMePage/MissionAndVision/MissionAndVision";
import ProfileOverview from "@/components/AboutMePage/ProfileOverview/ProfileOverview";
import WorkExperience from "@/components/AboutMePage/WorkExperience/WorkExperience";
import FAQ from "@/components/ContactMePage/FAQ/FAQ";
import HowItWorks from "@/components/HomePage/HowItWorks/HowItWorks";
import HeroSection from "@/components/Reusable/HeroSection/HeroSection";
// import Testimonial from "@/components/Shared/Testimonial/Testimonial";
import WhoIHelp from "@/components/Shared/WhoIHelp/WhoIHelp";
import { aboutFaq } from "@/data/faqData";

export const metadata = {
  title: "About Rahul Sutradhar | Web & App Developer",
  description:
    "Learn about Rahul Sutradhar’s approach to building scalable software systems and working directly with founders and businesses.",
  alternates: {
    canonical: "https://rahulsutradhar.com/about-me",
  },
};


const AboutMePage = () => {
  return (
    <div>
      <HeroSection
        subHeading="About Me"
        styledHeading="Building Scalable Web Systems"
        heading="for Businesses That Want to Grow"
        description="I’m a web development consultant helping startups, agencies, and growing businesses design and build reliable web systems that stay fast, stable, and easy to extend after launch."
      />
      <AboutMe />
      <MissionAndVision />
      <WorkExperience />
      {/* <TechnologyToolbox/> */}
      <WhoIHelp />
      <HowItWorks />

<FAQ
  data={aboutFaq}
  heading="How I Approach Work & Decisions"
/>
      {/* <Testimonial /> */}
      <ProfileOverview />
    </div>
  );
};

export default AboutMePage;
