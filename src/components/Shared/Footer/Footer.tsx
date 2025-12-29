"use client";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GRADIENTS, ICONS } from "../../../../public/assets";
import { motion } from "framer-motion";
import {
  contactInfo,
  navinks,
  services,
  socialMedia,
} from "@/data/footer.data";
import Marquee from "react-fast-marquee";

const Footer = () => {
  const pathname = usePathname();

  return (
    <div>
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-0 border-b border-neutral-30 pb-11">
          <div className="flex w-full lg:w-fit overflow-y-auto items-center">
            {navinks?.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-white font-Figtree font-medium transition-colors duration-300 hover:bg-primary-10 px-6 py-2 md:py-2.5 rounded-3xl ${
                  pathname === link.href
                    ? "text-white bg-primary-10"
                    : "text-neutral-35"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <a
            href="mailto:hello@rahulsutradhar.com"
            className="text-[32px] md:text-[50px] lg:text-[32px] 2xl:text-[50px] font-Instrument-Serif text-white"
          >
            hello@rahulsutradhar.com
          </a>
        </div>

        {/* Logo, Social Media, Services, Contact info */}
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-0 justify-between py-10 xl:py-16 border-b border-neutral-30">
          {/* Left side contents */}
          <div>
            {/* Logo */}
            <Link
              href={"/"}
              className="text-[28px] lg:text-[38px] text-white uppercase font-bold flex flex-col"
            >
              <div className="flex items-center gap-3">
                Rahul
                <Image src={ICONS.code} alt="" className="size-8" />
              </div>
              Sutradhar
            </Link>
            <p className="text-sm text-neutral-35 font-Inter max-w-[500px] mt-6">
              I help businesses achieve faster growth through scalable web and
              mobile app solutions
            </p>

            {/* Social media links */}
            <div className="flex items-center gap-4 mt-10">
              {socialMedia?.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-neutral-40 hover:bg-primary-10 border border-neutral-45 hover:border-neutral-35/50 size-9 rounded-full flex items-center justify-center transition-colors duration-300
                       hover:bg-primary hover:border-primary text-white"
                  >
                    <Icon className="text-[16px]" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div className="font-Inter flex flex-col md:flex-row justify-baseline xl:justify-between gap-10 md:gap-16 xl:gap-24">
            <div>
              <h2 className="font-bold text-neutral-35">Services</h2>
              {services?.map((service) => (
                <div key={service?.label} className="space-y-4 mt-6">
                  <Link
                    href={service.href}
                    className="text-white hover:underline text-sm md:text-base"
                  >
                    {service.label}
                  </Link>
                </div>
              ))}
            </div>
            <div>
              <h2 className="font-bold text-neutral-35">Contact</h2>

              <div className="space-y-5 mt-6 text-white">
                {contactInfo?.map((service) => (
                  <div
                    key={service.label}
                    className="flex items-center gap-3 text-sm md:text-base"
                  >
                    <Image
                      src={service.icon}
                      alt={service.label}
                      className="size-5"
                    />

                    {service?.href ? (
                      <a
                        href={service.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {service.label}
                      </a>
                    ) : (
                      <p>{service.label}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm text-neutral-35 font-Inter text-center mt-5">
          © Copyright 2026, All Rights Reserved by{" "}
          <span className="text-white">Rahul Sutradhar</span>
        </p>
      </Container>

      <div className="relative ">
        <Marquee speed={60} gradient={false}>
          <h2 className="text-[650px] leading-none translate-y-[60px] font-Uncut-Sans font-bold text-white whitespace-nowrap overflow-hidden">
            Rahul Sutradhar | Web Development | App Development | UI/UX Design
          </h2>
        </Marquee>

        <Image
          src={GRADIENTS.footerGradient}
          alt="Footer Gradient"
          className="absolute bottom-0 left-0 w-full -z-10"
        />

        <div className="bg-gradient-footer-blur backdrop-blur-lg h-[140px] absolute bottom-0 left-0 w-full z-10" />
      </div>
    </div>
  );
};

export default Footer;
