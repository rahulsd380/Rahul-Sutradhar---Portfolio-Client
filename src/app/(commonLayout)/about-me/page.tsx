import AboutMe from "@/components/AboutMePage/AboutMe/AboutMe";
import AboutMeHero from "@/components/AboutMePage/AboutMeHero/AboutMeHero";
import MissionAndVision from "@/components/AboutMePage/MissionAndVision/MissionAndVision";

const AboutMePage = () => {
    return (
        <div>
            <AboutMeHero/>
            <AboutMe/>
            <MissionAndVision/>
        </div>
    );
};

export default AboutMePage;