import QuoteApi from "../../components/QuoteApi";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [active, setActive] = useState("About");

  const linkIcon = [
    {
      icon: "github",
      link: "https://github.com/mrVinzcode",
      svg: <FaGithub className="h-8 w-8" />,
    },
    {
      icon: "linkedin",
      link: "https://www.linkedin.com/in/melvinmangubat554/",
      svg: <FaLinkedin className="h-7 w-7" />,
    },
    {
      icon: "twitter",
      link: "https://twitter.com/",
      svg: <BsTwitterX className="h-7 w-7" />,
    },
    {
      icon: "instagram",
      link: "https://www.instagram.com/",
      svg: <FaInstagram className="h-8 w-8" />,
    },
  ];

  const mainSections = ["About", "Projects", "Experience"];

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="/">Melvin Mangubat</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Web Developer
        </h2>
        <p className="lg:mt-4 max-w-md lg:max-w-sm mt-8 leading-7 tracking-wide">
          I approach my work with great attention to detail and ensuring
          seamless user experiences and optimal performance.
        </p>

        <nav className="nav hidden lg:block">
          <ul className="mt-16 w-max uppercase">
            {mainSections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className="group flex items-center py-3"
                >
                  <span
                    className={`mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-visible:bg-slate-200 motion-reduce:transition-none
                  ${
                    active === section
                      ? "w-16 bg-slate-200"
                      : "w-8 bg-slate-600"
                  }`}
                  ></span>
                  <span
                    className={`text-xs font-bold tracking-widest group-hover:text-slate-200 ${
                      active === section ? "text-slate-200" : "text-slate-500"
                    }`}
                    onClick={() => setActive(section)}
                  >
                    {section}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <QuoteApi />

        <ul
          className="ml-1 lg:mt-40 mt-20 flex items-center"
          aria-label="Social icons"
        >
          {linkIcon.map((social) => (
            <li key={social.icon} className="mr-5 text-xs shrink-0">
              <a
                className="block hover:text-slate-200"
                href={social.link}
                target="_blank"
              >
                <span className="sr-only">{social.icon}</span>
                {social.svg}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
