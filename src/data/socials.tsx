import {
  FaGithub,
  FaLinkedin,
  FaHashnode,
  FaTwitter,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";
import { SiLeetcode, SiCodechef } from "react-icons/si";

export const socialHandles: {
  name: string;
  href: string;
  className: string;
  Icon: JSX.Element;
}[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mrprince88/",
    className: "bg-linkedin",
    Icon: <FaLinkedin />,
  },
  {
    name: "Github",
    href: "https://github.com/mrprince88",
    className: "bg-github",
    Icon: <FaGithub />,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/mrprincetwts",
    className: "bg-twitter",
    Icon: <FaTwitter />,
  },
  {
    name: "Gmail",
    href: "mailto:mrprince0088@gmail.com",
    className: "bg-gmail",
    Icon: <FaEnvelope />,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/mrprince88",
    className: "bg-facebook",
    Icon: <FaFacebook />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/mr.prince88_",
    className: "bg-instagram",
    Icon: <FaInstagram />,
  },
  {
    name: "Hashnode",
    href: "https://mrprince88.hashnode.dev/",
    className: "bg-hashnode",
    Icon: <FaHashnode />,
  },
  {
    name: "Leetcode",
    href: "https://leetcode.com/mrprince88/",
    className: "bg-leetcode",
    Icon: <SiLeetcode />,
  },
  {
    name: "Codechef",
    href: "https://www.codechef.com/users/mrprince8",
    className: "bg-codechef",
    Icon: <SiCodechef />,
  },
];
