import Image from "next/image";
import { GRADIENTS, ICONS, IMAGES } from "../../../../public/assets";
import Link from "next/link";
import Button from "@/components/Reusable/Button/Button";
import Container from "@/components/Reusable/Container/Container";

const AllServices = () => {
  return (
    <Container>
      <div className="flex flex-col gap-10 mt-40 lg:mt-56 xl:mt-80">
        <div className="p-4 md:p-6 lg:p-10 rounded-2xl lg:rounded-4xl border border-primary-20/20 hover:border-primary-25 transition duration-300 flex flex-col lg:flex-row items-center justify-between gap-10 relative">
          <Image
            src={GRADIENTS.serviceDetailsCardGradient}
            alt={"Service Card Gradient"}
            className="absolute top-0 left-0 w-full h-full rounded-2xl lg:rounded-4xl object-cover -z-10"
          />
          {/* Content and button */}
          <div className="flex flex-col gap-7 md:gap-9 lg:gap-14">
            {/* Contents */}
            <div>
              <h2 className="text-xl md:text-[32px] font-semibold font-Uncut-Sans leading-normal text-white">
                Web Development
              </h2>
              <div className={`flex items-center gap-2.5 mt-3`}>
                <Image
                  src={ICONS.blueStar}
                  alt="Blue Star Icon"
                  className="w-[22px] h-[22px]"
                />
                <h3 className="font-Inter font-semibold text-white text-sm md:text-base">
                  Websites That Work, Not Just Look Good.
                </h3>
              </div>

              <p className="text-sm text-neutral-35 font-Inter max-w-[698px] mt-5">
                We help businesses craft high-performing mobile applications
                that merge intuitive design with robust technology built for
                speed, scalability, and a flawless user experience.
              </p>

              <h3 className="font-Inter font-semibold text-white text-sm md:text-base mt-6">
                What I Deliver:
              </h3>
              <p className="text-sm text-neutral-35 font-Inter mt-3">
                <span className="text-white font-medium">
                  Responsive Design:
                </span>{" "}
                Pixel-perfect layouts optimized for every device.
              </p>
              <p className="text-sm text-neutral-35 font-Inter mt-3">
                <span className="text-white font-medium">
                  Performance & SEO:
                </span>{" "}
                Lightning-fast loading speeds and search-ready structure.
              </p>

              <h3 className="font-Inter font-semibold text-white text-sm md:text-base mt-6">
                What I Deliver:
              </h3>

              <div className="flex flex-col gap-3 mt-3">
                {[1, 2, 3]?.map((_, index) => (
                  <div key={index} className={`flex items-center gap-2.5 mt-3`}>
                    <Image
                      src={ICONS.blueStar}
                      alt="Blue Star Icon"
                      className="w-[22px] h-[22px]"
                    />
                    <p
                      key={index}
                      className="text-sm text-neutral-35 font-Inter max-w-[698px]"
                    >
                      Increased lead conversion rate
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end justify-between h-full gap-10 lg:gap-20">
            <Image
              src={IMAGES.webDevelopmentDetails}
              alt={""}
              className="h-full"
            />
            <Link href={"/"}>
              <Button variant="secondary" label="Build Your Website" />
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AllServices;
