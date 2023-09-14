import { FaInstagram, FaViber, FaYoutube } from "react-icons/fa";
import { LiaTelegram } from "react-icons/lia";
import { FiPhone } from "react-icons/fi";
import { BiLogoGmail } from "react-icons/bi";
import Men from "@/assets/images/men.jpg";
import Women from "@/assets/images/women.jpg";
import Sport from "@/assets/images/sport.jpg";

export const homeNav = [
  {
    id: "1",
    title: "men",
    info: "choose from a wide range of products in all categories",
    link: "/men",
    image: Men,
  },
  {
    id: "2",
    title: "women",
    info: "find the perfect item for all your needs",
    link: "/women",
    image: Women,
  },
  {
    id: "3",
    title: "sport",
    info: "a wide range of sports goods for professionals and amateurs",
    link: "/sport",
    image: Sport,
  },
];

export const footerNav = {
  info: [
    { title: "about us", link: "/about-us" },
    { title: "payment and delivery", link: "/payment-and-delivery" },
    { title: "ordering", link: "/ordering" },
    { title: "returns", link: "/returns" },
  ],
  getHelp: [
    { title: "contacts", link: "/contacts" },
    { title: "navigation", link: "/navigation" },
  ],
  links: [
    { icon: FaInstagram, link: "https://www.instagram.com" },
    { icon: LiaTelegram, link: "https://www.telegram.org" },
    { icon: FaViber, link: "https://www.viber.com" },
    { icon: FaYoutube, link: "https://www.youtube.com" },
    { icon: FiPhone, link: "tel:+38067-000-0000" },
    { icon: BiLogoGmail, link: "mailto:yourmail@gmail.com" },
  ],
};

export const linksNav = [
  {
    title: "instagram",
    link: "https://www.instagram.com",
    cover: "@sneakershop",
  },
  {
    title: "telegram",
    link: "https://www.telegram.org",
    cover: "@sneakershop",
  },
  {
    title: "viber",
    link: "https://www.viber.com",
    cover: "@viber/+38 (067) 000-00-00",
  },
  { title: "phone", link: "tel:+38067-000-0000", cover: "+38 (067)-000-0000" },
  {
    title: "email",
    link: "mailto:yourmail@gmail.com",
    cover: "sneakershop@gmail.com",
  },
];
