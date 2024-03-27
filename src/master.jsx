import { useState } from "react";

import { ContactInfo } from "./components/contactInfo.jsx";
import { Education } from "./components/education.jsx";
import { Experience } from "./components/experience.jsx";
import { MainOutput } from "./components/output.jsx";

const MasterPage = () => {

// I suspect we declare any state variables here and pass them as props to our individual components

const [fullName, setFullName] = useState("Derek Zoolander");
const [email, setEmail] = useState("DZoo@Ballzmodels.com")


  return (
    <>
      <MainOutput />
      <ContactInfo 
      fullName = {fullName}
      nameSetter = {setFullName}
      email = {email}
      emailSetter = {setEmail}
      />
      <Education />
      <Experience />
    </>
  );
};


export {MasterPage};