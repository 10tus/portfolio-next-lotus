import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
const AboutMe = () => {
  //uncomment when finished
  const [index, changeIndex] = useState(0);
  const [typedText, changeTyped] = useState("");
  const pos = [
    "<Software Engineer/>",
    "<UX Designer/>"
  ];
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5, // Trigger when 10% of the component is visible
  });

  const [state, changeState] = useState(0);
  useEffect(() => {
    if (!inView) return;
    //typing state
    if (state == 0) {
      const timeout = setTimeout(() => {
        const nextType = pos[index].slice(0, typedText.length + 1);
        changeTyped(nextType);
        if (nextType === typedText && state == 0) {
          //set pause
          changeState(2);
        }
      }, 150);
      return () => clearTimeout(timeout);
    }
    //deleting state
    else if (state == 1) {
      const nextRemaining = pos[index].slice(0, typedText.length - 1);
      const timeout = setTimeout(() => {
        changeTyped(nextRemaining);
        if (nextRemaining === "") {
          //set to typing
          const nextIndex = index + 1;
          changeIndex(pos[nextIndex] ? nextIndex : 0);
          changeState(0);
        }
      }, 150);
      return () => clearTimeout(timeout);
    }
    //pausing state
    else if (state == 2) {
      const timeout = setTimeout(() => {
        changeState(1);
      }, 2000);
      return () => clearTimeout(timeout);
    }

    return () => {
      //unmount
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typedText, index, state,inView]);

  return (
    <div ref={ref} className=" xl:h-screen flex flex-col lg:flex-row p-5">
      <div className="container flex mx-auto xl:max-w-screen-lg 2xl:max-w-screen-2xl flex-col justify-center text-2xl space-y-7 tracking-wide">
        <h1 className=" text-xl xl:text-6xl">Janrey Valenzuela.</h1>
        <p className=" text-xl xl:text-6xl font-extrabold">
          {/* {"I am a Software Engineer"} */}
          <span className="text-red-600">
            {typedText}
            <span className="animate-blink-caret">{"_"}</span>
          </span>
        </p>
        <p className=" xl:pt-20 w-full text-xs xl:text-3xl xl:w-3/4 text-left">
          Design and problem solving is the name of my game. I am a slave to
          my craft and will exert 101% effort to my work. I am competent in{" "}
          <span className="text-red-600">designing interfaces</span> and{" "}
          <span className="text-red-600">constructing algorithms</span>. I am
          but a passionate learner dwelling on Earth. 
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
