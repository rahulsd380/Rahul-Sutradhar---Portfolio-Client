"use client";
import { RxCrossCircled } from "react-icons/rx";
import Link from "next/link";
import { socialMedia } from "@/data/footer.data";
import { motion } from "framer-motion";
import Image from "next/image";
import { ICONS, IMAGES } from "../../../../public/assets";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineBriefcase,
  HiOutlineEnvelope,
} from "react-icons/hi2";

interface MenuProps {
  closeMenu: () => void;
}

const Menu = ({ closeMenu }: MenuProps) => {
  const navlinks = [
    {
      label: "Home",
      path: "/",
      icon: HiOutlineHome,
    },
    {
      label: "About Me",
      path: "/about-me",
      icon: HiOutlineUser,
    },
    // {
    //   label: "Portfolio",
    //   path: "/about-me",
    //   icon: HiOutlineUser,
    // },
    {
      label: "Services",
      path: "/services",
      icon: HiOutlineBriefcase,
    },
    {
      label: "Contact",
      path: "/contact-me",
      icon: HiOutlineEnvelope,
    },
  ];

  return (
    <div className="bg-neutral-55 rounded-xl p-7 w-[350px] md:w-[450px] relative font-Inter overflow-hidden">
      <Image
        src={IMAGES.dottedBg}
        alt=""
        className="absolute top-0 bottom-0 right-0 left-0 w-full h-full opacity-40"
      />
      <div className="w-[150px] h-[400px] absolute left-0 bottom-0 bg-primary-10/50 blur-[100px]"></div>

      <div className="text-white text-2xl font-medium flex items-center justify-between relative">
        <h2>Menu</h2>
        <motion.button
          onClick={closeMenu}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer"
        >
          <RxCrossCircled className="text-2xl" />
        </motion.button>
      </div>

      <div className="flex flex-col gap-2 mt-8 relative">
        {navlinks?.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={item.path}
                onClick={closeMenu}
                className="flex items-center gap-3 text-white hover:text-primary-25 text-lg font-medium transition-colors duration-300 py-2"
              >
                <Icon className="text-xl" />
                <span>{item.label}</span>
              </Link>
            </motion.div>
          );
        })}
      </div>

      <div className="space-y-4 flex flex-col mt-14 relative">
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          href="mailto:hello@rahulsutradhar.com"
          className="text-white hover:underline transition-colors duration-300 flex items-center gap-2.5"
        >
          <Image src={ICONS.email} alt={""} className="size-5" />
          hello@rahulsutradhar.com
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          href="tel:+8801608249337"
          className="text-white hover:underline transition-colors duration-300 flex items-center gap-2.5"
        >
          <Image src={ICONS.call} alt={""} className="size-5" />
          +880 1608249337
        </motion.a>
      </div>

      {/* Social media links */}
      <div className="flex flex-col items-center gap-4 absolute right-4 bottom-8">
        {socialMedia?.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.a
              key={item.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-neutral-40 hover:bg-primary-10 border border-neutral-45 hover:border-neutral-35/50 size-9 rounded-full flex items-center justify-center transition-all duration-300
                       hover:bg-primary hover:border-primary text-white"
            >
              <Icon className="text-[16px]" />
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
