import Image from "next/image";
import { ICONS } from "../../../../public/assets";

type THeadingProps = {
  subHeading?: string;
  styledHeading: string;
  heading: string;
  description?: string;
};
const Heading: React.FC<THeadingProps> = ({
  subHeading,
  styledHeading,
  heading,
  description,
}) => {
  return (
    <div className={`flex flex-col items-center`}>
      <div className="flex items-center gap-2.5">
        <Image
          src={ICONS.blueStar}
          alt="Blue Star Icon"
          className="size-[22px]"
        />
        <h3 className="font-Inter text-xl font-semibold text-white">
          {subHeading}
        </h3>
      </div>
      <h3 className="text-white text-[55px] mt-[30px] font-Uncut-Sans leading-16 text-center max-w-[644px]">
        <span className="font-Instrument-Serif font-normal italic">
          {styledHeading}
        </span>{" "}
        {heading}
      </h3>
      {description && (
        <p className="text-lg text-neutral-35 font-Inter text-center max-w-[698px] mt-3">
          {description}
        </p>
      )}
    </div>
  );
};

export default Heading;
