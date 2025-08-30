import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const FooterLinks = () => {
  return (
    <div className="invisible xl:visible fixed right-0 bottom-0 text-lg mr-5 text-neutral-600  ">
      <div className=" flex flex-col w-20 space-y-7 items-center">
        <Link href="https://github.com/10tus" rel="noopener noreferrer" target="_blank">
          <Icon
            icon="eva:github-outline"
            className=" w-7 h-7 hover:cursor-pointer hover:text-red-600"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/janrey-valenzuela-106953210/" rel="noopener noreferrer" target="_blank">
          <Icon
            icon="eva:linkedin-outline"
            className=" w-7 h-7 hover:cursor-pointer hover:text-red-600"
          />
        </Link>
        <Link href="https://discord.gg/zp5Hdh7SHS" rel="noopener noreferrer" target="_blank">
          <Icon
            icon="simple-icons:discord"
            className=" w-7 h-7 hover:cursor-pointer hover:text-red-600"
          />
        </Link>

        <Link href="mailto:itslotusdevs@gmail.com" rel="noopener noreferrer" target="_blank">
          <Icon
            icon="eva:email-outline"
            className=" w-7 h-7 hover:cursor-pointer hover:text-red-600"
          />
        </Link>
        <div className="border-l-2 h-24 border-neutral-600 "></div>
      </div>
    </div>
  );
};

export default FooterLinks;
