import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import ProjectCard from "./ProjectCard";
import Image from "next/image";
import { GRADIENTS } from "../../../../public/assets";
import Button from "@/components/Reusable/Button/Button";

const FeaturedProjects = () => {
  return (
    <div className="relative py-[100px]">
      <Image
        src={GRADIENTS.featuredProjectGradient}
        alt=""
        className="w-full absolute -top-[800px] -z-10 opacity-40"
      />
      <Container>
        <>
          <Heading
            subHeading="Portfolio"
            styledHeading="Featured"
            heading="Projects"
            description="A few examples of how I build digital experiences that are simple, scalable, and built for impact."
          />

          <div className="grid grid-cols-2 gap-[30px] mt-[70px]">
            {[1, 2, 3, 4]?.map((_, index) => (
              <ProjectCard key={index} />
            ))}
          </div>
          <div className="flex items-center justify-center mt-10">
            <Button variant="secondary" label="View All" />
          </div>
        </>
      </Container>
    </div>
  );
};

export default FeaturedProjects;
