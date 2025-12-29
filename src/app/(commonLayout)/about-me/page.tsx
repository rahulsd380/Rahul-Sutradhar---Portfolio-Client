import AboutMe from "@/components/AboutMePage/AboutMe/AboutMe";
import AboutMeHero from "@/components/AboutMePage/AboutMeHero/AboutMeHero";
import MissionAndVision from "@/components/AboutMePage/MissionAndVision/MissionAndVision";
import ProfileOverview from "@/components/AboutMePage/ProfileOverview/ProfileOverview";
import WorkExperience from "@/components/AboutMePage/WorkExperience/WorkExperience";
import HowItWorks from "@/components/HomePage/HowItWorks/HowItWorks";
import Testimonial from "@/components/Shared/Testimonial/Testimonial";
import WhoIHelp from "@/components/Shared/WhoIHelp/WhoIHelp";

const AboutMePage = () => {
  return (
    <div>
      <AboutMeHero />
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
