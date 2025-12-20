import AboutMe from "@/components/HomePage/AboutMe/AboutMe";
import FeaturedProjects from "@/components/HomePage/FeaturedProjects/FeaturedProjects";
import Hero from "@/components/HomePage/Hero/Hero";

const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutMe/>
      <FeaturedProjects/>
    </div>
  );
};

export default Home;