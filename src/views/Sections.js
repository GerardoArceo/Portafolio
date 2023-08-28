import React from "react";

import Features from "./Sections/Features.js";
import Projects from "./Sections/Projects.js";
import ContactUs from "./Sections/ContactUs.js";
import Presentation from "./Sections/Presentation.js";
import AboutMe from "./Sections/AboutMe.js";


export default function Sections() {
  const wrapper = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    wrapper.current.scrollTop = 0;
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );
    if (
      window.location.href.lastIndexOf("#") > 0 &&
      document.getElementById(href) !== null
    ) {
      document.getElementById(href).scrollIntoView();
    }
    document.body.classList.add("sections-page");
    return function cleanup() {
      document.body.classList.remove("sections-page");
    };
  }, []);

  return (
    <>
      <div className="wrapper" ref={wrapper}>

        <div className="section-space" />
        <Presentation />        
        <AboutMe />
        <Projects />
        <Features />
        <ContactUs />
        
      </div>
    </>
  );
}
