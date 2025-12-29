"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { GRADIENTS, ICONS, IMAGES } from "../../../../public/assets";
import Link from "next/link";
import Button from "@/components/Reusable/Button/Button";
import Container from "@/components/Reusable/Container/Container";

const AllServices = () => {
  const allServices = [
    {
      title: "Web Development",
      image: IMAGES.webDevelopmentDetails,
      btnText: "Build Your Website",
    },
    {
      title: "App Development",
      image: IMAGES.appDevelopmentDetails,
      btnText: "Build Your App",
    },
    {
      title: "SEO",
      image: IMAGES.seoDetails,
      btnText: "Boost Your Traffic",
    },
    {
      title: "AI Integration",
      image: IMAGES.aiIntegrationDetails,
      btnText: "Integrate AI",
    },
  ];

  const cardVariants:Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const contentVariants:Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const imageVariants:Variants = {
    hidden: { opacity: 0, scale: 0.9, x: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  const listItemVariants:Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <Container>
      <div className="flex flex-col gap-10 mt-40 lg:mt-56 xl:mt-80 pb-20">
        {allServices?.map((service) => (
          <motion.div
            key={service?.title}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="p-4 md:p-6 lg:p-10 rounded-2xl lg:rounded-4xl border border-primary-20/20 hover:border-primary-25 transition duration-500 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden"
          >
            {/* Background Gradient Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0 -z-10"
            >
              <Image
                src={GRADIENTS.serviceDetailsCardGradient}
                alt={""}
                fill
                className="object-cover rounded-2xl lg:rounded-4xl"
              />
            </motion.div>

            {/* Left side: Content */}
            <motion.div variants={contentVariants} className="flex flex-col gap-7 md:gap-9 lg:gap-14">
              <div>
                <h2 className="text-xl md:text-[32px] font-semibold font-Uncut-Sans leading-normal text-white">
                  {service?.title}
                </h2>
                
                <motion.div variants={listItemVariants} className={`flex items-center gap-2.5 mt-3`}>
                  <Image src={ICONS.blueStar} alt="" className="w-[22px] h-[22px]" />
                  <h3 className="font-Inter font-semibold text-white text-sm md:text-base">
                    Websites That Work, Not Just Look Good.
                  </h3>
                </motion.div>

                <p className="text-sm text-neutral-35 font-Inter max-w-[698px] mt-5">
                  We help businesses craft high-performing mobile applications
                  that merge intuitive design with robust technology built for
                  speed, scalability, and a flawless user experience.
                </p>

                <div className="space-y-4 mt-6">
                  <h3 className="font-Inter font-semibold text-white text-sm md:text-base">
                    What I Deliver:
                  </h3>
                  <motion.p variants={listItemVariants} className="text-sm text-neutral-35 font-Inter">
                    <span className="text-white font-medium">Responsive Design:</span> Pixel-perfect layouts optimized for every device.
                  </motion.p>
                  <motion.p variants={listItemVariants} className="text-sm text-neutral-35 font-Inter">
                    <span className="text-white font-medium">Performance & SEO:</span> Lightning-fast loading speeds and search-ready structure.
                  </motion.p>
                </div>

                {/* Additional list items */}
                <div className="flex flex-col gap-3 mt-6">
                  {[1, 2, 3]?.map((_, i) => (
                    <motion.div
                      key={i}
                      variants={listItemVariants}
                      className="flex items-center gap-2.5"
                    >
                      <Image src={ICONS.blueStar} alt="" className="w-[18px] h-[18px]" />
                      <p className="text-sm text-neutral-35 font-Inter">
                        Increased lead conversion rate
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right side: Image and Button */}
            <div className="flex flex-col items-center lg:items-end justify-between h-full gap-10 lg:gap-20 w-full lg:w-auto">
              <motion.div 
                variants={imageVariants}
                whileHover={{ y: -10, rotate: 1 }}
                className="relative"
              >
                <Image 
                    src={service?.image} 
                    alt={service.title} 
                    width={400}
                    height={400}
                    className="h-full object-contain" 
                />
              </motion.div>
              
              <motion.div variants={listItemVariants}>
                <Link href={"/"}>
                  <Button variant="secondary" label={service?.btnText} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default AllServices;