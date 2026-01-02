import ProfileOverview from "@/components/AboutMePage/ProfileOverview/ProfileOverview";
import BookACall from "@/components/BookACallPage/BookACall/BookACall";
import HeroSection from "@/components/Reusable/HeroSection/HeroSection";
export const metadata = {
  title: "Book a Call with Rahul Sutradhar",
  description:
    "Schedule a consultation to discuss your project, feasibility, timelines, and technical approach.",
  alternates: {
    canonical: "https://rahulsutradhar.com/book-call",
  },
};

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
