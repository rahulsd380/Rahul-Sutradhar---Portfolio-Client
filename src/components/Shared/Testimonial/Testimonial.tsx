import Heading from "@/components/Reusable/Heading/Heading";
import Marquee from "react-fast-marquee";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <div className="relative overflow-hidden">
      <Heading
        subHeading="Testimonials"
        styledHeading="What My"
        heading="Clients Say"
        description="We help businesses grow with design, strategy, and genuine care but don’t just take our word for it."
      />
      
      <div className="mt-13 lg:mt-[70px] space-y-6 relative">
        {/* Left Gradient Blur */}
        <div className="absolute left-0 top-0 w-32 h-full bg-linear-to-r from-neutral-10 to-transparent z-10 pointer-events-none hidden md:block"></div>
        
        {/* Right Gradient Blur */}
        <div className="absolute right-0 top-0 w-32 h-full bg-linear-to-l from-neutral-10 to-transparent z-10 pointer-events-none hidden md:block"></div>
        
        {/* Top Marquee */}
        <div className="relative">
          <Marquee direction="left" speed={50} gradient={false}>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5]?.map((_, index) => (
                <TestimonialCard key={index} />
              ))}
            </div>
          </Marquee>
        </div>
        
        {/* Bottom Marquee */}
        <div className="relative">
          <Marquee direction="right" speed={50} gradient={false}>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5]?.map((_, index) => (
                <TestimonialCard key={index} />
              ))}
            </div>
          </Marquee>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-50/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary-30/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Testimonial;