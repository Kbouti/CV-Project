import { useState } from "react";

import { ContactInfo } from "./contactInfo.jsx";
import { Education } from "./education.jsx";
import { Experience } from "./experience.jsx";
import { MainOutput } from "./output.jsx";
import { examplePerson } from "./exampleData.jsx";




const MasterPage = () => {
  const [fullName, setFullName] = useState(examplePerson.fullName);
  const [email, setEmail] = useState(examplePerson.email);
  const [phone, setPhone] = useState(examplePerson.phone);
  const [city, setCity] = useState(examplePerson.city);

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

export { examplePerson, MasterPage };
