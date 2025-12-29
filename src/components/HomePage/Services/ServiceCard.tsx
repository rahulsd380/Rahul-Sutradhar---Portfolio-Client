import Image, { StaticImageData } from "next/image";
import { GRADIENTS, ICONS } from "../../../../public/assets";
import Link from "next/link";
import Button from "@/components/Reusable/Button/Button";

type TServiceCardProps = {
  service: {
    heading: string;
    subHeading: string;
    description: string;
    pointers: string[];
    image: StaticImageData;
  };
};
const ServiceCard = ({ service }: TServiceCardProps) => {
  return (
    <div className="p-4 md:p-6 lg:p-10 rounded-2xl lg:rounded-4xl border border-primary-20 flex flex-col lg:flex-row items-center justify-between gap-10 relative">
      <Image
        src={GRADIENTS.serviceCardGradient}
        alt={"Service Card Gradient"}
        className="absolute top-0 left-0 w-full h-full rounded-2xl lg:rounded-4xl object-cover -z-10 opacity-80 lg:opacity-100"
      />
      {/* Content and button */}
      <div className="flex flex-col gap-7 md:gap-9 lg:gap-14">
        {/* Contents */}
        <div>
          <h2 className="text-xl md:text-[32px] font-semibold font-Uncut-Sans leading-normal text-white">
            {service.heading}
          </h2>
          <div className={`flex items-center gap-2.5 mt-3`}>
            <Image
              src={ICONS.blueStar}
              alt="Blue Star Icon"
              className="w-[22px] h-[22px]"
            />
            <h3 className="font-Inter font-semibold text-white text-sm md:text-base">
              {service.subHeading}
            </h3>
          </div>

          <p className="text-sm text-neutral-35 font-Inter max-w-[698px] mt-5">
            {service.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-5 md:mt-8 max-w-[400px]">
            {service?.pointers?.map((item: string) => (
              <p
                key={item}
                className="text-sm text-neutral-35 font-Inter max-w-[698px]"
              >
                ↳ {item}
              </p>
            ))}
          </div>
        </div>
        <Link href={"/"}>
          <Button variant="primary" label="See More" />
        </Link>
      </div>

      <Image src={service.image} alt={service.heading} className="h-full" />
    </div>
  );
};

export default ServiceCard;
