import { RxArrowTopRight } from "react-icons/rx";
import { TExperience, TJobDetail } from "./WorkExperience";

const ExperienceCard = ({ experience }: { experience: TExperience }) => {
  return (
    <div className="border-b border-neutral-60 pb-7 md:pb-13">
      <h2 className="text-xl md:text-[32px] font-semibold font-Uncut-Sans leading-normal text-white">
        {experience?.companyName}
      </h2>
      <div className="flex flex-col lg:flex-row gap-10 xl:gap-9 2xl:gap-0 justify-between mt-5 lg:mt-10">
        {/* Left Side content */}
        <div className="max-w-full lg:max-w-[280px] text-white font-Inter text-sm md:text-lg">
          <p className="">{experience?.companyOverview}</p>
          <p className="mt-3 lg:mt-6">{experience?.employmentPeriod}</p>
        </div>

        {/* Middle content */}
        <dl className="space-y-3 text-sm">
          {experience?.jobDetails?.map(({ label, value, href }: TJobDetail) => (
            <div
              key={label}
              className="flex gap-10 font-Inter text-sm md:text-lg"
            >
              <h2 className="text-neutral-35">{label}</h2>
              <dd className="text-white font-semibold">
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:underline"
                  >
                    {value}
                    <RxArrowTopRight className="text-lg md:text-xl font-extrabold" />
                  </a>
                ) : (
                  value
                )}
              </dd>
            </div>
          ))}
        </dl>

        {/* Right Side content */}
        <p className="text-sm md:text-lg lg:text-sm xl:text-lg text-neutral-35 font-Inter max-w-full lg:max-w-[300px] xl:max-w-[500px]">
          I build responsive front-end interfaces and back-end services. I focus
          on performance, accessibility, and automation, shipping maintainable
          features that enhance user experience.
          <br />
          <br />I work with Next.js and Express.js, integrating REST APIs.
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
