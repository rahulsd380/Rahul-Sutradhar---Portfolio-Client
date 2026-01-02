import AboutMe from "@/components/HomePage/AboutMe/AboutMe";
import FeaturedProjects from "@/components/HomePage/FeaturedProjects/FeaturedProjects";
import Hero from "@/components/HomePage/Hero/Hero";
import HowItWorks from "@/components/HomePage/HowItWorks/HowItWorks";
import Services from "@/components/HomePage/Services/Services";
import CTA from "@/components/Reusable/CTA/CTA";
// import Testimonial from "@/components/Shared/Testimonial/Testimonial";
import WhoIHelp from "@/components/Shared/WhoIHelp/WhoIHelp";

export const metadata = {
  title: "Web & App Developer | Rahul Sutradhar ",
  description:
    "Rahul Sutradhar is a web and app developer based in Bangladesh helping startups and growing businesses build scalable, production-ready software systems.",
  alternates: {
    canonical: "https://rahulsutradhar.com/",
  },
};

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <FeaturedProjects />
      <Services />
      <WhoIHelp/>
      <HowItWorks/>
      {/* <Testimonial/> */}
      <div className="mb-[150px] mt-16 w-full">
        <CTA />
      </div>
    </div>
  );
};

export default Home;
