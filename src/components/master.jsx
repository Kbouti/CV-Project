import { useState } from "react";

import { ContactInfo } from "./contactInfo.jsx";
import { Education } from "./education.jsx";
import { Experience } from "./experience.jsx";
import { MainOutput } from "./output.jsx";
import { examplePerson } from "./exampleData.jsx";
import { exampleEducation } from "./exampleData.jsx";


// Example person is one object with several state variables. We're fine with this for now as it opens up the possibility to update state when a single element is changed
// EducationObjects is our state variable for an array containing as many education entries as the user wants to make



const education = [exampleEducation]

const MasterPage = () => {
  const [fullName, setFullName] = useState(examplePerson.fullName);
  const [email, setEmail] = useState(examplePerson.email);
  const [phone, setPhone] = useState(examplePerson.phone);
  const [city, setCity] = useState(examplePerson.city);
  const [educationObjects, setEducationObjects] = useState(education);

  return (
    <>
      <MainOutput 
              fullName={fullName}
              phone = {phone}
              email = {email}
              city = {city}
              educationObjects = {educationObjects}

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
