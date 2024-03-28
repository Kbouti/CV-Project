import { useState } from "react";

import { ContactInfo } from "./contactInfo.jsx";
import { Education } from "./education.jsx";
import { Experience } from "./experience.jsx";
import { MainOutput } from "./output.jsx";

const MasterPage = () => {
  const [fullName, setFullName] = useState("Derek Zoolander");
  const [email, setEmail] = useState("DZoo@Ballzmodels.com");
  const [phone, setPhone] = useState("212-555-5378");
  const [city, setCity] = useState("New York");

  return (
    <>
      <MainOutput 
              fullName={fullName}
              phone = {phone}
              email = {email}
              city = {city}

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