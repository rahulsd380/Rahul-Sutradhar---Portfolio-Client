/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { ICONS } from "../../../../public/assets";
import Container from "@/components/Reusable/Container/Container";
import { RxArrowTopRight } from "react-icons/rx";
import { IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <Container>
      <div className="flex items-center justify-between py-[30px] font-Figtree z-10 relative">
        <Link
          href={"/"}
          className="text-2xl text-white uppercase font-bold flex flex-col"
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
            className="text-white font-semibold uppercase underline flex items-center gap-1"
          >
            Let's talk
            <RxArrowTopRight className="text-xl font-extrabold" />
          </Link>

          <button className="bg-white hover:bg-primary-10 hover:border-primary-15 hover:shadow-button size-[60px] rounded-full text-3xl font-bold text-neutral-10 hover:text-white flex items-center justify-center cursor-pointer transition duration-300">
            <IoMenuOutline />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
