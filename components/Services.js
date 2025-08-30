import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const Services = () => {
  const [serviceList,setServiceList] = useState([
    {
      key: "FS",
      title: "Full Stack Development",
      open: true,
      logo: "mdi:gear",
      description: "I deliver end-to-end full stack solutions — crafting fast, responsive, and visually striking front-end experiences while building scalable, secure back-end systems. From sleek portfolio websites and high-converting e-commerce platforms to dynamic forms and data-driven dashboards, I create digital products that engage users and drive results.",
      techStack: "Angular, React, SQL, MongoDB, AWS, Azure, Java, Python, Javascript, HTML, CSS",
    },
    {
      key: "SEO",
      title: "SEO Optimization",
      logo: "mdi:web",
      open: false,
      techStack: "Google Analytics, Search Console, Ahrefs, Screaming Frog",
      description: "From technical SEO and keyword research to content optimization and analytics, I create strategies that help brands get discovered and stay ahead of the competition.",
    },
    {
      key: "UX",
      title: "UX Design",
      logo: "mdi:pencil",
      open: false,
      techStack: "Figma",
      description: "I design user experiences that prioritize clarity, usability, and flow. From research and wireframes to testing and optimization, ensuring every interaction feels natural and intuitive.",
    },
  ]);

  

  const handleClick = (id) => {
    setServiceList((prev) =>
      prev.map((service) =>
        service.key === id
          ? { ...service, open: !service.open }
          : service
      )
    );
};

  const fanCards = () => {
    return (
      <div className="flex flex-col justify-center items-center border-t duration-300 ease-in-out">
        {serviceList.map((service) => 
        <div
            key={service.key}
            onClick={() => handleClick(service.key)}
            className="cursor-pointer border-b w-full"
          >
            <div className="flex py-5 px-2 xl:p-10 justify-between items-center">
              <div className="flex items-center gap-10">
                <Icon
                  icon={service.logo}
                  className=" w-5 h-5 xl:w-7 xl:h-7 hover:cursor-pointer "
                />
                <div className=" text-gray-800 text-sm xl:text-lg">{service.title}</div>
              </div>
              <Icon
                icon="mdi:arrow-down"
                className={" w-5 h-5 xl:w-7 xl:h-7 hover:cursor-pointer duration-300 ease-in-out  "+ (service.open ? " rotate-180" : "")}
              />
            </div>
            <div
              className={
                "transition-all duration-300 ease-in-out overflow-hidden text-sm xl:text-base " +
                (service.open
                  ? "max-h-96 opacity-100 py-5 px-2 xl:px-10"
                  : "max-h-1 opacity-0 py-0 px-2 xl:p-0")
              }
            >
              {service.description}
              {service.techStack && <div className="mt-5 font-semibold">Tech Stack: {service.techStack}</div>}
            </div>
          </div>)}
      </div>
    );
  };
  return (
    <div className=" py-10 p-5">
      <div className="container h-full xl:h-screen mx-auto max-w-screen-lg space-y-5 xl:space-y-14 xl:py-20 tracking-wide">
        <h2 className=" text-red-600 text-xl xl:text-3xl">
          {"<Services/>"}
          <span className="animate-blink-caret">_</span>
        </h2>
        <div className="xl:text-center space-y-2">
          <h3 className="text-slate">What I bring to the table?</h3>
          <p className="pt-10 text-sm xl:text-lg">
            I offer tailored web development services to create, optimize, and
            enhance your online platform, ensuring a seamless user experience
            and business growth.
          </p>
        </div>
        {fanCards()}
      </div>
    </div>
    
   
  );
};

export default Services;
