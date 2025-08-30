import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import FadeIn from "./FadeIn";

const Entry = ({ image, headline, body, techUsed, imgStart, link }) => {
  return (
    <FadeIn
      styleCss={
        "flex flex-col" + (imgStart ? " xl:flex-row" : " xl:flex-row-reverse")
      }
    >
      <div className=" pb-3 xl:hidden  flex justify-between relative">
        <h3 className="text-xl xl:text-3xl">{headline}</h3>

        <Link href={link} legacyBehavior>
          <a target="_blank" className={"absolute right-0"}>
            <Icon
              icon="mdi:open-in-new"
              className=" w-7 h-7 hover:cursor-pointer "
            />
          </a>
        </Link>
      </div>
      <img
        src={image}
        className=" inset-0 object-cover rounded-md w-full xl:w-3/5 xl:max-h-96 grayscale hover:grayscale-0 shadow-2xl  shadow-black/50"
      />

      <div
        className={
          "flex flex-col justify-center space-y-3 xl:space-y-5 text-sm w-full xl:w-3/5 xl:py-3 " +
          (imgStart ? "xl:text-right" : "xl:text-left")
        }
      >
        <h3 className=" hidden xl:block text-xl xl:text-3xl">{headline}</h3>
        <p
          className={
            " bg-red-600 text-white p-6 cursor-default z-10 rounded-md shadow-lg shadow-black/50 xl:whitespace-pre-wrap " +
            (imgStart ? "xl:-ml-20" : "xl:-mr-20")
          }
        >
          {body}
        </p>
        <ul
          className={
            "grid grid-cols-2 grid-rows-2 xl:flex xl:space-x-4 cursor-default w-full" +
            (imgStart ? " xl:justify-end" : "xl:justify-start")
          }
        >
          {techUsed.map((val) => {
            return <li className="text-xs">{val}</li>;
          })}
        </ul>

        <Link href={link} legacyBehavior>
          <a
            target="_blank"
            className={
              "hidden xl:flex " +
              (imgStart ? " xl:justify-end" : "xl:justify-start")
            }
          >
            <Icon
              icon="mdi:open-in-new"
              className=" w-7 h-7 hover:cursor-pointer "
            />
          </a>
        </Link>
      </div>
    </FadeIn>
  );
};

export default Entry;

// <motion.div
//   variants={secVariant}
//   initial="hidden"
//   whileInView="visible"
//   viewport={{ once: true, amount: 1 }}
//   className={"flex " + (imgStart ? "flex-row" : "flex-row-reverse")}
// >

// </motion.div>
