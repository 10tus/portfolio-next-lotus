import { Link, animateScroll as scroll } from "react-scroll";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";

const Nav = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["About", "WorkExperience", "Portfolio", "Services", "Contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    // Trigger on page load
    handleScroll();
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="invisible xl:visible fixed text-lg text-neutral-600 ml-5 ">
      <div className="flex flex-row xl:flex-col w-20 space-y-7 items-center">
        <div className="border-l-2 h-24 border-neutral-600 "></div>
        <Link
          to="About"
          smooth={true}
          duration={500}
          className={activeSection === "About" ? "text-red-600" : ""}
        >
          <Icon icon="mi:home" className="w-7 h-7 hover:cursor-pointer" />
        </Link>
        <Link
          to="WorkExperience"
          smooth={true}
          duration={500}
          className={activeSection === "WorkExperience" ? "text-red-600" : ""}
        >
          <Icon icon="typcn:briefcase" className="w-7 h-7 hover:cursor-pointer" />
        </Link>
        <Link
          to="Portfolio"
          smooth={true}
          duration={500}
          className={activeSection === "Portfolio" ? "text-red-600" : ""}
        >
          <Icon icon="mi:folder" className="w-7 h-7 hover:cursor-pointer" />
        </Link>
        <Link
          to="Services"
          smooth={true}
          duration={500}
          className={activeSection === "Services" ? "text-red-600" : ""}
        >
          <Icon icon="mi:laptop" className="w-7 h-7 hover:cursor-pointer" />
        </Link>
        <Link
          to="Contact"
          smooth={true}
          duration={500}
          className={activeSection === "Contact" ? "text-red-600" : ""}
        >
          <Icon icon="mi:send" className="w-7 h-7 hover:cursor-pointer" />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;