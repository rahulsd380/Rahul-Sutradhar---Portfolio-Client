import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaRedditAlien,
} from "react-icons/fa";
import { ICONS } from "../../public/assets";

export const socialMedia = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: FaLinkedinIn,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com",
    icon: FaFacebookF,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com",
    icon: FaInstagram,
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: FaTwitter,
  },
  {
    name: "Reddit",
    href: "https://www.reddit.com",
    icon: FaRedditAlien,
  },
];

export const navinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
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
