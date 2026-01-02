import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaRedditAlien,
} from "react-icons/fa";
import { ICONS } from "../../public/assets";

export const socialMedia = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rahul-sutradhar380/",
    icon: FaLinkedinIn,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61581136832665",
    icon: FaFacebookF,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/rahul_sutradhar_380/",
    icon: FaInstagram,
  },
  // {
  //   name: "Twitter",
  //   href: "https://twitter.com",
  //   icon: FaTwitter,
  // },
  {
    name: "Reddit",
    href: "https://www.reddit.com/user/External_Concert_504/",
    icon: FaRedditAlien,
  },
];

export const navlinks = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About Me",
      path: "/about-me",
    },
    // {
    //   label: "Portfolio",
    //   path: "/portfolio",
    // },
    {
      label: "Services",
      path: "/services",
    },
    // {
    //   label: "Blog",
    //   path: "/blog",
    // },
    {
      label: "Contact",
      path: "/contact-me",
    },
  ];

export const services = [
  {
    label: "Web Development",
    href: "/services/web-development",
  },
  {
    label: "Mobile App Development",
    href: "/services/mobile-app-development",
  },
  {
    label: "UI/UX Design",
    href: "/services/ui-ux-design",
  },
  {
    label: "E-commerce Solutions",
    href: "/services/e-commerce-solutions",
  },
  {
    label: "SEO & Digital Visibility",
    href: "/services/seo-digital-visibility",
  },
  {
    label: "AI Integration",
    href: "/services/ai-integration",
  },
];

export const contactInfo = [
  {
    label: "+880 1608249337",
    href: "tel:+8801608249337",
    icon: ICONS.call,
  },
  {
    label: "hello@rahulsutradhar.com",
    href: "mailto:hello@rahulsutradhar.com",
    icon: ICONS.email,
  },
  {
    label: "Cumilla, Bangladesh",
    icon: ICONS.location,
  },
];
