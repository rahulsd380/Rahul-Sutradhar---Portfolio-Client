import Image from "next/image";
import { ICONS } from "../../../../public/assets";

type THeadingProps = {
  subHeading?: string;
  styledHeading: string;
  heading: string;
  description?: string;
  align?: "left" | "center" | "right"; // new prop
};

const Heading: React.FC<THeadingProps> = ({
  subHeading,
  styledHeading,
  heading,
  description,
  align = "center",
}) => {
  const containerClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  return (
    <div className={`flex flex-col relative ${containerClasses[align]}`}>
      {subHeading && (
        <div
          className={`flex items-center gap-2.5 ${
            align === "center"
              ? "justify-center"
              : align === "right"
              ? "justify-end"
              : ""
          }`}
        >
          <Image
            src={ICONS.blueStar}
            alt="Blue Star Icon"
            className="w-[22px] h-[22px]"
          />
          <h3 className="font-Inter text-base md:text-xl font-semibold text-white">
            {subHeading}
          </h3>
        </div>
      )}

      <h3 className="text-white text-[32px] md:text-[48px] lg:text-[40px] xl:text-[55px] mt-[30px] font-Uncut-Sans leading-10 md:leading-14 lg:leading-12 xl:leading-16 max-w-[644px]">
        <span className="font-Instrument-Serif font-normal italic">
          {styledHeading}
        </span>{" "}
        {heading}
      </h3>

      {description && (
        <p className="text-sm md:text-lg lg:text-sm xl:text-lg text-neutral-35 font-Inter max-w-[698px] mt-3">
          {description}
        </p>
      )}
    </div>
  );
};

export default Heading;