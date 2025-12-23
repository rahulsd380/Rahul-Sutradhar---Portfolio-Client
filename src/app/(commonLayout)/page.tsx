import AboutMe from "@/components/HomePage/AboutMe/AboutMe";
import FeaturedProjects from "@/components/HomePage/FeaturedProjects/FeaturedProjects";
import Hero from "@/components/HomePage/Hero/Hero";
import Services from "@/components/HomePage/Services/Services";

const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutMe/>
      <FeaturedProjects/>
      <Services/>
    </div>
  );
};

export default Home;