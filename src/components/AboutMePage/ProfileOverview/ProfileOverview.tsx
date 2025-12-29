import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import { GRADIENTS, ICONS, IMAGES } from "../../../../public/assets";
import Link from "next/link";
import Button from "@/components/Reusable/Button/Button";
import { HiOutlineFolderDownload } from "react-icons/hi";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import {
  FiFacebook,
  FiLinkedin,
  FiInstagram,
  FiGithub,
  FiMessageCircle, // WhatsApp alternative (outlined)
  FiMail,
} from "react-icons/fi";
import { RiRedditLine } from "react-icons/ri";

const ProfileOverview = () => {
  const socialMediaLinks = [
    {
      icon: <FiLinkedin />,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/rahulsutradhar/",
    },
    {
      icon: <FiFacebook />,
      title: "Facebook",
      link: "https://www.facebook.com/",
    },
    {
      icon: <FiInstagram />,
      title: "Instagram",
      link: "https://www.instagram.com/",
    },
    {
      icon: <FiGithub />,
      title: "GitHub",
      link: "https://github.com/",
    },
    {
      icon: <FiMessageCircle />,
      title: "WhatsApp",
      link: "https://wa.me/",
    },
    {
      icon: <RiRedditLine />,
      title: "Reddit",
      link: "https://www.reddit.com/",
    },
    {
      icon: <FiMail />,
      title: "hello@rahul-sutradhar.com",
      link: "mailto:rahulsutradhar@gmail.com",
    },
  ];
  return (
    <div className="py-[200px] relative">
      <Image
        src={GRADIENTS.profileOverviewGradient}
        alt={""}
        className="absolute left-0 top-10"
      />
      <Container>
        <div className="flex gap-10">
          {/* Left card */}
          <div className="p-5 bg-neutral-65 rounded-xl border border-neutral-35/30 w-[50%] flex flex-col justify-between">
            {/* Profile */}
            <div className="relative">
              <div className="flex items-center gap-6">
                <Image
                  src={IMAGES.rahulSutradhar}
                  alt=""
                  className="size-20 rounded-full"
                />
                <div className="bg-white border border-neutral-25 rounded-3xl py-1.5 px-3.5 text-neutral-20 flex items-center gap-2 font-Inter text-sm md:text-base w-fit">
                  <Image src={ICONS.available} alt="" className="size-5" />
                  <p>Taking New Projects</p>
                </div>
              </div>

              <h2 className="text-xl md:text-[32px] font-semibold font-Uncut-Sans leading-normal text-white mt-6">
                I’m Rahul Sutradhar.
              </h2>
              <p className="text-sm text-neutral-35 font-Inter max-w-[698px] mt-4">
                I help businesses achieve faster growth through scalable web and
                mobile app solutions.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-end gap-3 md:gap-6 mt-12">
              <Link href={"/"}>
                <Button label="Start Your Project" />
              </Link>
              <Button
                variant="secondary"
                label="Download Resume"
                icon={
                  <HiOutlineFolderDownload className="text-lg md:text-xl font-extrabold" />
                }
              />
            </div>
          </div>

          {/* Right cards */}
          <div className="grid grid-cols-3 gap-5 w-[50%]">
            {/* Social Media cards */}
            {socialMediaLinks.map((item, index) => {
              const isLast = index === socialMediaLinks.length - 1;

              return (
                <a
                  key={item.title}
                  href={item.link}
                  className={`bg-neutral-70/70 hover:bg-primary-10 transition duration-300 group h-fit rounded-xl border border-neutral-35/30 p-4 relative overflow-hidden
          ${isLast ? "col-span-3" : ""}`}
                >
                  <div className="w-[94px] h-[220px] absolute top-0 right-18 rounded-t-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="167"
                      height="118"
                      viewBox="0 0 167 118"
                      fill="none"
                    >
                      <g opacity="0.4" filter="url(#filter0_f_38_86)">
                        <g filter="url(#filter1_f_38_86)">
                          <path
                            d="M248.991 -37.5419C243.083 -102.245 197.959 -46.7251 176.136 -10.8774L174.184 -7.49728L79.1992 96.5256L182.826 8.75874C207.343 20.2847 254.9 27.1609 248.991 -37.5419Z"
                            fill="#284DF6"
                          />
                        </g>
                        <g filter="url(#filter2_f_38_86)">
                          <path
                            d="M248.991 -37.5419C243.083 -102.245 197.959 -46.7251 176.136 -10.8774L174.184 -7.49728L79.1992 96.5256L182.826 8.75874C207.343 20.2847 254.9 27.1609 248.991 -37.5419Z"
                            fill="#284DF6"
                          />
                        </g>
                      </g>
                      <defs>
                        <filter
                          id="filter0_f_38_86"
                          x="-0.000778198"
                          y="-146.552"
                          width="328.695"
                          height="322.277"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feGaussianBlur
                            stdDeviation="0"
                            result="effect1_foregroundBlur_38_86"
                          />
                        </filter>
                        <filter
                          id="filter1_f_38_86"
                          x="63.3992"
                          y="-83.1516"
                          width="201.895"
                          height="195.477"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feGaussianBlur
                            stdDeviation="7.9"
                            result="effect1_foregroundBlur_38_86"
                          />
                        </filter>
                        <filter
                          id="filter2_f_38_86"
                          x="49.1992"
                          y="-97.3516"
                          width="230.295"
                          height="223.877"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feGaussianBlur
                            stdDeviation="15"
                            result="effect1_foregroundBlur_38_86"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <div className="bg-neutral-75 group-hover:bg-white rounded-xl p-2.5 flex items-center justify-center text-white group-hover:text-primary-10 text-2xl w-fit transition duration-300">
                    {item?.icon}
                  </div>
                  <div className="font-Uncut-Sans text-lg text-white font-medium flex items-center justify-between mt-6">
                    <h2>{item?.title}</h2>
                    <LuSquareArrowOutUpRight />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProfileOverview;
