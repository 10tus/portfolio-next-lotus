import React from "react";
import FadeIn from "./FadeIn";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="h-full xl:h-screen xl:py-30  p-5">
      <div className="container h-full mx-auto max-w-screen-lg space-y-10  tracking-wide">
        <h2 className=" text-red-600 text-xl xl:text-3xl">
          {"<Contact/>"}
          <span className="animate-blink-caret">_</span>
        </h2>
        <div className="text-center p-5 xl:pt-32 flex flex-col space-y-5">
          <h3 className="text-slate">Interested? Let's Talk!</h3>
          <p className="text-xs xl:text-lg">
            I'd love to hear from you! Feel free to reach out using any of
            the methods below, and I'll get back to you as soon as possible.
          </p>
          <div className="grid grid-cols-1 xl:grid-cols-3 py-20 space-y-5 xl:space-y-0 items-center justify-items-center ">
            <Link href="https://discord.gg/zp5Hdh7SHS" legacyBehavior>
              <a
                target="_blank"
                className="flex flex-col items-center space-y-2 xl:space-y-8"
              >
                <Icon
                  icon="simple-icons:discord"
                  className=" w-12 h-12 hover:cursor-pointer hover:text-red-600"
                />
                <p className="text-xs xl:text-lg">Join my Discord Server</p>
              </a>
            </Link>
            <Link href="mailto:itslotusdevs@gmail.com" legacyBehavior>
              <a
                target="_blank"
                className="flex flex-col items-center space-y-8"
              >
                <Icon
                  icon="eva:email-outline"
                  className=" w-12 h-12 hover:cursor-pointer hover:text-red-600"
                />
                <p className="text-xs xl:text-lg">itslotusdevs@gmail.com</p>
              </a>
            </Link>
            <Link
              href="linkedin.com/in/johnny-vee-106953210"
              legacyBehavior
            >
              <a
                target="_blank"
                className="flex flex-col items-center space-y-8"
              >
                <Icon
                  icon="eva:linkedin-outline"
                  className=" w-12 h-12 hover:cursor-pointer hover:text-red-600"
                />
                <p className="text-xs xl:text-lg">
                  Let's connect on LinkedIn
                </p>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center space-y-2 text-sm">
        <div>Made with NextJs</div>
        <div>Styled with Tailwind CSS</div>
      </div>

    </div>
  );
};

export default Contact;
