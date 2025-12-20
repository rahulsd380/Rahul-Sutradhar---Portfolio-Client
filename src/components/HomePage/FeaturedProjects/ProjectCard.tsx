import Image from "next/image";
import { IMAGES } from "../../../../public/assets";
import Link from "next/link";
import Button from "@/components/Reusable/Button/Button";

const ProjectCard = () => {
  return (
    <div className="rounded-[20px] border border-primary-20 p-3">
      <Image
        src={IMAGES.dummyProject}
        alt=""
        className="rounded-[10px] w-full"
      />

      <div className="px-3 pb-3">
        <div className="py-2.5 px-4 rounded-3xl border border-neutral-30 bg-neutral-30 shadow-stat-card text-white font-Inter text-xs mt-6 w-fit">
          e-Commerce Website
        </div>
        <h2 className="text-white text-xl font-bold font-Uncut-Sans mt-6">
          BrightRoof — Service Website
        </h2>
        <p className="text-sm text-neutral-35 font-Inter max-w-[698px] mt-3">
          A fast, conversion-focused website for a UK plumbing brand. Designed
          for all screens.
        </p>

        <div className="flex justify-end mt-6">
          <Link href={"/"}>
            <Button variant="primary" label="View Live" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
