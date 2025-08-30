import React from "react";
import Entry from "./Entry";

import { WorkOne, WorkTwo, WorkThree } from "./EntryData";
const Portfolio = () => {
  return (
    <div className=" h-full py-10 p-5">
      <div className="container h-full mx-auto max-w-screen-lg space-y-10 py-10 xl:py-20 tracking-wide">
        <h2 className=" text-red-600 text-xl xl:text-3xl">
          {"<Portfolio/>"}
          <span className="animate-blink-caret">_</span>
        </h2>
        {/*work entries */}
        <div className=" space-y-20 xl:space-y-32">
          {/* entry 1 */}
          <Entry {...WorkOne} />
          <Entry {...WorkTwo} />
          <Entry {...WorkThree} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
