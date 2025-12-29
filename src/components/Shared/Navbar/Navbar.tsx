/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ICONS } from "../../../../public/assets";
import Container from "@/components/Reusable/Container/Container";
import { RxArrowTopRight } from "react-icons/rx";
import { IoMenuOutline } from "react-icons/io5";
import Menu from "./Menu";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <Container>
        <div className="flex items-center justify-between py-[30px] font-Figtree z-50 relative">
          <Link
            href={"/"}
            className="text-xl md:text-2xl text-white uppercase font-bold flex flex-col"
          >
            <div className="flex items-center gap-3">
              Rahul
              <Image src={ICONS.code} alt="" className="" />
            </div>
            Sutradhar
          </Link>

          <div className="flex items-center gap-[30px]">
            <Link
              href={"/contact-me"}
              className="text-white font-semibold uppercase underline hidden md:flex items-center gap-1"
            >
              Let's talk
              <RxArrowTopRight className="text-xl font-extrabold" />
            </Link>

            <motion.button
              onClick={toggleMenu}
              className="bg-white hover:bg-primary-10 hover:border-primary-15 hover:shadow-button size-10 md:size-[60px] rounded-full text-2xl md:text-3xl font-bold text-neutral-10 hover:text-white flex items-center justify-center cursor-pointer transition duration-300 relative z-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <IoMenuOutline />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </Container>

      {/* Menu Overlay and Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={closeMenu}
            />

            {/* Menu Container */}
            <motion.div
              initial={{ opacity: 0, x: 100, y: 100 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 100, y: 100 }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 100,
                duration: 0.5,
              }}
              className="fixed right-4 bottom-4 md:right-8 md:bottom-8 z-40"
            >
              <Menu closeMenu={closeMenu} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;