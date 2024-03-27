import { useState } from "react";

import { ContactInfo } from "./components/contactInfo.jsx";
import { Education } from "./components/education.jsx";
import { Experience } from "./components/experience.jsx";
import { MainOutput } from "./components/output.jsx";

const MasterPage = () => {
  return (
    <>
      <MainOutput />
      <ContactInfo />
      <Education />
      <Experience />
    </>
  );
};


export {MasterPage};