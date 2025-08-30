import Head from "next/head";
import AboutMe from "../components/AboutMe";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import WorkExperience from "../components/WorkExperience";
import Services from "../components/Services";
import FadeIn from "../components/FadeIn";

export default function Home() {
  return (
    <>
      <div id="About">
        <FadeIn>
          <AboutMe />
        </FadeIn>
      </div>
      <div id="WorkExperience">
        <FadeIn>
          <WorkExperience />
        </FadeIn>
      </div>
      <div id="Portfolio">
        <FadeIn>
          <Portfolio />
        </FadeIn>
      </div>
      <div id="Services">
        <FadeIn>
          <Services />
        </FadeIn>
      </div>
      <div id="Contact">
        <FadeIn>
          <Contact />
        </FadeIn>
      </div>
    </>
  );
}