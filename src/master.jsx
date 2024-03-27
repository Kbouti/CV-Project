import { useState } from "react";

import { ContactInfo } from "./components/contactInfo.jsx";
import { Education } from "./components/education.jsx";
import { Experience } from "./components/experience.jsx";
import { MainOutput } from "./components/output.jsx";

const MasterPage = () => {
  const [fullName, setFullName] = useState("Derek Zoolander");
  const [email, setEmail] = useState("DZoo@Ballzmodels.com");
  const [phone, setPhone] = useState("212-555-5378");
  const [city, setCity] = useState("New York");

  return (
    <>
      <MainOutput 
              fullName={fullName}

      />
      <ContactInfo
        fullName={fullName}
        fullNameSetter={setFullName}
        email={email}
        emailSetter={setEmail}
        phone={phone}
        phoneSetter={setPhone}
        city={city}
        citySetter={setCity}
      />
      <Education />
      <Experience />
    </>
  );
};

export { MasterPage };
