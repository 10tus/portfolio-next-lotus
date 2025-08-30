import Nav from "./Nav";
import FooterLinks from "./FooterLinks";
import { useEffect } from "react";
import FadeIn from "./FadeIn";
import React from "react";

const Layout = ({ children }) => {
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
      // to change soon
    };
  }, []);
  return (
    <>
      <Nav />

      <main>{children}</main>
      {/* <main>
        {React.Children.map(children, (child, index) => (
          <FadeIn styleCss={"container h-full mx-auto flex"}>
            {React.cloneElement(child, {
              key: { index },
              style: { ...child.props.style },
            })}
          </FadeIn>
        ))}
      </main> */}

      <FooterLinks />
    </>
  );
};

export default Layout;
