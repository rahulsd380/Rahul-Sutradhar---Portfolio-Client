import Button from "@/components/Reusable/Button/Button";
import Heading from "@/components/Reusable/Heading/Heading";
import Image from "next/image";
import Link from "next/link";
import { GRADIENTS } from "../../../../public/assets";

const TechnologyToolbox = () => {
  //   const techLogos = [
  //     { name: "React", logo: IMAGES.ReactLogo },
  //     { name: "Next.js", logo: IMAGES.NextLogo },
  //     { name: "Node.js", logo: IMAGES.NodeLogo },
  //     { name: "MongoDB", logo: IMAGES.MongoLogo },
  //     { name: "Tailwind CSS", logo: IMAGES.TailwindLogo },
  //     { name: "TypeScript", logo: IMAGES.TypescriptLogo },
  //     { name: "GraphQL", logo: IMAGES.GraphQLLogo },
  //     { name: "AWS", logo: IMAGES.AWSLogo },
  //   ];

  return (
    <div className="relative">
      <Image
        src={GRADIENTS.technologyToolboxGradient}
        alt=""
        className="absolute top-0"
      />

      <Heading
        subHeading="Tools"
        styledHeading="My"
        heading="Technology Toolbox"
        description="The key tools and technologies that help us build powerful, scalable, and user-friendly solutions for your business."
      />

      <div className="flex items-center justify-center gap-3 md:gap-6 mt-12">
        <Link href={"/"}>
          <Button label="Start Your Project" />
        </Link>
        <Link href={"/"}>
          <Button variant="secondary" label="Book A Call" />
        </Link>
      </div>
    </div>
  );
};

export default TechnologyToolbox;
