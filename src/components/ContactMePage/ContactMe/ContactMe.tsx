/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Heading from "../../Reusable/Heading/Heading";
import { IMAGES } from "../../../../public/assets";
import Button from "../../Reusable/Button/Button";
import ContactUsForm from "./ContactUsForm";
import Container from "../../Reusable/Container/Container";

const ContactMe = () => {
  const stats = [
    {
      value: "600+",
      title: "Projects Delivered",
    },
    {
      value: "20+",
      title: "Industries Served",
    },
    {
      value: "4.8",
      title: "Average Rating",
    },
  ];
  return (
    <Container>
      <div className="bg-primary-30 backdrop-blur-[300px] rounded-4xl p-[50px] flex items-center gap-10 mt-14">
        <div className="w-1/2">
          <Heading
            subHeading="Let's Connect"
            styledHeading="Let’s Collaborate"
            heading="and Begin the work"
            description="Direct and easy to understand, with a focus on practical impact."
            align="left"
          />

          <div className="mt-6 space-y-6">
            <div className="flex gap-3">
              {stats?.map((stat) => (
                <div
                  key={stat?.value}
                  className={`bg-neutral-80 hover:bg-primary-10 transition duration-300 group h-fit rounded-xl border border-neutral-35/30 p-4 font-Inter text-white flex flex-col items-center justify-center`}
                >
                  <h2 className="text-2xl font-medium">{stat?.value}</h2>
                  <p className="text-sm">{stat?.title}</p>
                </div>
              ))}
            </div>

            <div
              className={`bg-neutral-80 hover:bg-primary-10 transition duration-300 group h-fit rounded-xl border border-neutral-35/30 p-4 font-Inter text-white flex flex-col justify-center`}
            >
              <div className="flex gap-5">
                <Image
                  src={IMAGES.rahulSutradhar}
                  alt=""
                  className="size-[60px]"
                />
                <div>
                  <h2 className="text-2xl font-medium">Rahul Sutradhar</h2>
                  <p className="text-sm">Developer</p>
                </div>
              </div>

              <p className="text-sm text-white font-Inter mt-6">
                I’m Rahul a developer who blends technology with business
                thinking. I help brands build systems that grow revenue and simplify work.
              </p>
            </div>

            <div className="p-6 bg-primary-35 rounded-2xl flex items-center justify-between">
              <h2 className="font-Uncut-Sans text-2xl font-semibold text-white">
                Prefer to book a call ?
              </h2>
              <Button variant="secondary" label="Book A Call" />
            </div>
          </div>
        </div>

        <ContactUsForm />
      </div>
    </Container>
  );
};

export default ContactMe;
