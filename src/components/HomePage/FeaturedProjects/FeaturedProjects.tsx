import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";

const FeaturedProjects = () => {
  return (
    <Container>
      <div className="py-[100px]">
        <Heading
          subHeading="Portfolio"
          styledHeading="Featured"
          heading="Projects"
          description="A few examples of how I build digital experiences that are simple, scalable, and built for impact."
        />
      </div>
    </Container>
  );
};

export default FeaturedProjects;
