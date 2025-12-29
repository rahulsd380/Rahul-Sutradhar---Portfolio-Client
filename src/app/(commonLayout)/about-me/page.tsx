import AboutMe from "@/components/AboutMePage/AboutMe/AboutMe";
import MissionAndVision from "@/components/AboutMePage/MissionAndVision/MissionAndVision";
import ProfileOverview from "@/components/AboutMePage/ProfileOverview/ProfileOverview";
import WorkExperience from "@/components/AboutMePage/WorkExperience/WorkExperience";
import HowItWorks from "@/components/HomePage/HowItWorks/HowItWorks";
import HeroSection from "@/components/Reusable/HeroSection/HeroSection";
import Testimonial from "@/components/Shared/Testimonial/Testimonial";
import WhoIHelp from "@/components/Shared/WhoIHelp/WhoIHelp";

const AboutMePage = () => {
  return (
    <div>
      <HeroSection subHeading="About Me" styledHeading="Building Technology" heading="That Empowers Businesses" description="My goal is to make digital growth accessible for every brand simple, effective, and built to scale." />
      <AboutMe />
      <MissionAndVision />
      <WorkExperience />
      {/* <TechnologyToolbox/> */}
      <WhoIHelp />
      <HowItWorks />
      <Testimonial />
      <ProfileOverview />
    </div>
  );
};

export default AboutMePage;
