import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import Image from "next/image";
import { IMAGES } from "../../../../public/assets";
import { GoStarFill } from "react-icons/go";

const WhoIHelp = () => {
  const headingCommonClassName =
    "font-Uncut-Sans text-2xl md:text-[32px] font-semibold text-white leading-9";
  const descriptionCommonClassName =
    "font-Inter text-sm md:text-base text-neutral-35 leading-6 mt-2";
  return (
    <Container>
      <div className="py-7 lg:py-[100px]">
        <Heading
          subHeading="Who I Work Best With"
          styledHeading="Teams That Need Systems"
          heading="— Not Just Another Website"
          description="I work with founders and teams who care about clarity, scalability, and real outcomes — not rushed builds or surface-level fixes."
        />

        <div className="flex flex-col md:flex-row gap-3 mt-13 lg:mt-[70px]">
          {/* Left side */}
          <div className="w-full md:w-[60%] lg:w-[70%] space-y-3">
            {/* Left-Card-1 */}
            <div className="bg-neutral-55 rounded-[20px] p-6 relative overflow-hidden max-h-[350px]">
              <div className="w-[181px] h-[345px] rotate-135 bg-gradient-step-card rounded-[345px] blur-[48px] absolute bottom-[-110px] left-[-130px]"></div>
              <div className="w-[181px] h-[345px] rotate-90 bg-gradient-step-card rounded-[345px] blur-[48px] absolute -top-56 -right-10"></div>
              <Image
                src={IMAGES.dottedBg}
                alt=""
                className="absolute top-0 bottom-0 right-0 left-0 w-full"
              />
              <div className="relative flex flex-col h-full">
                <h3 className={headingCommonClassName}>Local Businesses</h3>
                <p className={descriptionCommonClassName}>
                  If your website exists but doesn’t consistently bring
                  inquiries, conversions, or clarity — the problem isn’t design.
                  It’s structure, messaging, and performance.
                </p>
                <div className={descriptionCommonClassName}>
                  Best for service-based local businesses ready to invest in
                  long-term results.
                </div>
              </div>
              <Image src={IMAGES.linnerVector} alt="" className="" />
            </div>

            {/* Left-Card-2 */}
            <div className="bg-neutral-55 h-[228px] rounded-[20px] p-6 relative overflow-hidden">
              <div className="size-[322px] bg-gradient-step-card rounded-[322px] blur-[48px] absolute -bottom-60 left-[168px]"></div>
              <div className="flex flex-col items-center justify-center text-center h-full">
                <h3 className="font-Uncut-Sans text-[32px] md:text-[48px] font-semibold text-white leading-9">
                  3+
                </h3>
                <p className="font-Inter text-sm md:text-base text-white leading-6 mt-4 z-10">
                  Years Shipping Production Software
                </p>
              </div>
            </div>

            {/* Left-Card-3/4 */}
            <div className="flex gap-3">
              <div className="bg-neutral-55 h-[228px] rounded-[20px] p-6 relative overflow-hidden w-full">
                <Image
                  src={IMAGES.dottedBg}
                  alt=""
                  className="absolute top-0 bottom-0 right-0 left-0 w-full"
                />
                <div className="w-[181px] h-[345px] rotate-135 bg-gradient-step-card rounded-[345px] blur-[48px] absolute bottom-[-110px] left-[-130px]"></div>
                <div className="flex flex-col items-center justify-center text-center h-full gap-6 relative">
                  <h3 className="font-Uncut-Sans text-base md:text-2xl font-semibold text-white leading-6 md:leading-9">
                    120+ Projects Delivered
                  </h3>
                  <Image
                    src={IMAGES.projectDelivered}
                    alt=""
                    className="h-[120] px] w-[90px]"
                  />
                </div>
              </div>
              <div className="bg-neutral-55 h-[228px] rounded-[20px] p-6 relative overflow-hidden w-full">
                <div className="w-7 h-[392px] rotate-[-30deg] bg-gradient-step-card rounded-[322px] blur-[30px] absolute -top-56 left-0"></div>
                <div className="w-7 h-[392px] rotate-30 bg-gradient-step-card rounded-[322px] blur-[30px] absolute -top-56 right-0"></div>
                <div className="flex flex-col items-center justify-center text-center h-full gap-2 relative">
                  {/* Stars */}
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5]?.map((_, index) => (
                      <GoStarFill key={index} className="text-yellow-500" />
                    ))}
                  </div>

                  <div>
                    <h3 className="font-Uncut-Sans text-[32px] md:text-[58px] font-semibold text-white">
                      38+
                    </h3>
                    <h3 className="font-Uncut-Sans text-lg md:text-[28px] text-white leading-5 md:leading-0 mt-3">
                      Clients Served
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-[40%] lg:w-[30%] space-y-3 h-full">
            {/* Right-Card-1 */}
            <div className="bg-neutral-55 rounded-[20px] relative overflow-hidden h-full">
              <div className="w-[181px] h-[345px] rotate-39 bg-gradient-step-card rounded-[345px] blur-[48px] absolute bottom-[-110px] right-[-130px]"></div>
              <div className="w-[181px] h-[345px] rotate-90 bg-gradient-step-card rounded-[345px] blur-[48px] absolute -top-56 -left-10"></div>
              <Image
                src={IMAGES.dottedBg}
                alt=""
                className="absolute top-0 bottom-0 right-0 left-0 w-full h-full"
              />
              <div className="relative p-6">
                <h3 className={headingCommonClassName}>Startups</h3>
                <p className={descriptionCommonClassName}>
                  Launch your first product with a system designed to scale —
                  without rebuilding everything after your first traction spike.
                </p>
              </div>
              <Image src={IMAGES.startup} alt="" className="relative" />
            </div>
            {/* Right-Card-2 */}
            <div className="bg-neutral-55 rounded-[20px] relative overflow-hidden h-full">
              <div className="w-[181px] h-[345px] rotate-39 bg-gradient-step-card rounded-[345px] blur-[48px] absolute bottom-[-110px] right-[-130px]"></div>
              <div className="w-[181px] h-[345px] rotate-90 bg-gradient-step-card rounded-[345px] blur-[48px] absolute -top-56 -left-10"></div>
              <Image
                src={IMAGES.dottedBg}
                alt=""
                className="absolute top-0 bottom-0 right-0 left-0 w-full h-full"
              />
              <div className="relative p-6">
                <h3 className={headingCommonClassName}>Agencies</h3>
                <p className={descriptionCommonClassName}>
                  Partner with a technical team that helps you deliver stable
                  systems while you focus on growth and clients.
                </p>
              </div>
              <Image src={IMAGES.agency} alt="" className="relative" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhoIHelp;
