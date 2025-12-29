import ProfileOverview from "@/components/AboutMePage/ProfileOverview/ProfileOverview";
import BookACall from "@/components/BookACallPage/BookACall/BookACall";
import HeroSection from "@/components/Reusable/HeroSection/HeroSection";

const BookACallPage = () => {
  return (
    <div>
        <HeroSection subHeading="Book a Call" styledHeading="Book a Free Call" heading="with Me" description="Book a 30 min meeting with us to learn more about our services."  />
      <BookACall />
      <ProfileOverview/>
    </div>
  );
};

export default BookACallPage;
