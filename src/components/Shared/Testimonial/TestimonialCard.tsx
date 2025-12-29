import Image from "next/image";
import { IMAGES } from "../../../../public/assets";
import { FaQuoteLeft } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";

const TestimonialCard = () => {
  return (
    <div className="bg-neutral-10 rounded-xl border border-primary-25 p-6 font-Inter flex flex-col justify-between gap-5 max-w-[430px] mr-6">
      <FaQuoteLeft className="text-primary-10 text-3xl" />
      <p className="text-sm md:text-base text-neutral-50">
        Webinxo turned our outdated website into a clean, high-converting
        platform. Our leads have nearly doubled since launch.
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={IMAGES.rahulSutradhar}
            alt=""
            className="size-10 rounded-full object-cover"
          />
          <div>
            <h2 className="capitalize text-white font-semibold">John Smith</h2>
            <h2 className="capitalize text-neutral-50 text-xs mt-1">
              CEO, BTC
            </h2>
          </div>
        </div>

        {/* Stars */}
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5]?.map((_, index) => (
            <GoStarFill key={index} className="text-yellow-500" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
