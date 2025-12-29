import AboutMe from "@/components/AboutMePage/AboutMe/AboutMe";
import AboutMeHero from "@/components/AboutMePage/AboutMeHero/AboutMeHero";
import MissionAndVision from "@/components/AboutMePage/MissionAndVision/MissionAndVision";
import WorkExperience from "@/components/AboutMePage/WorkExperience/WorkExperience";

const AboutMePage = () => {
    return (
        <div>
            <AboutMeHero/>
            <AboutMe/>
            <MissionAndVision/>
            <WorkExperience/>
        </div>
    );
};

export default AboutMePage;