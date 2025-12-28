import Image from "next/image";
import { IMAGES } from "../../../../public/assets";

const TestimonialCard = () => {
  return (
    <div className="bg-neutral-10 rounded-xl border border-primary-25 p-6 font-Inter flex flex-col justify-between gap-5 max-w-[430px] h-[220px] mr-6">
      <p className="text-neutral-50">
        Webinxo turned our outdated website into a clean, high-converting
        platform. Our leads have nearly doubled since launch.
      </p>

      <div className="flex items-center gap-3">
        <Image
          src={IMAGES.rahulSutradhar}
          alt=""
          className="size-10 rounded-full object-cover"
        />
        <div>
          <h2 className="capitalize text-white font-semibold">John Smith</h2>
          <h2 className="capitalize text-neutral-50 text-xs">CEO, BTC</h2>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;