"use client";
import Heading from "@/components/Reusable/Heading/Heading";
import { motion } from "framer-motion";
import Script from "next/script";

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  "https://calendly.com/rahulchandrasutradhar3/30min?background_color=ffffff";

const BookACall = () => {
  return (
    <motion.div
      className="relative w-full h-[80vh] mt-20 xl:mt-96 mb-[100px]"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      onClick={(e) => e.stopPropagation()}
      role="dialog"
      aria-modal="true"
      aria-label="Book a meeting"
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[250px] md:size-[344px] rounded-full bg-primary-10 blur-[200px]" />

      <Heading
        styledHeading="Book a Free Call"
        heading="with Me"
        description="Book a 30 min meeting with us to learn more about our services."
      />

      {/* Calendly scrip */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />

      {/* Calendly inline widget */}
      <div
        className="calendly-inline-widget w-full h-full px-5 md:px-0"
        data-url={CALENDLY_URL}
        style={{ minWidth: "320px", height: "100%" }}
      />
    </motion.div>
  );
};

export default BookACall;
